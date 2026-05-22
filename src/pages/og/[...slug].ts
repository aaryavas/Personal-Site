import type { APIContext, GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';
import satori from 'satori';
import sharp from 'sharp';
import fs from 'node:fs';

import path from 'node:path';
const fontPath = path.join(process.cwd(), 'src/fonts/BricolageGrotesque-Bold.ttf');
const fontData = fs.readFileSync(fontPath);

export const getStaticPaths: GetStaticPaths = async () => {
  const projects = await getCollection('projects');
  const posts = await getCollection('posts');

  return [
    { params: { slug: 'index.png' }, props: { title: 'Aarya Vasantlal', subtitle: 'AI researcher · builder · UConn CSE \'26' } },
    ...projects.map(p => ({
      params: { slug: `projects/${p.slug}.png` },
      props: { title: p.data.title, subtitle: p.data.subtitle },
    })),
    ...posts.map(p => ({
      params: { slug: `blog/${p.slug}.png` },
      props: { title: p.data.title, subtitle: p.data.dek },
    })),
  ];
};

function ogMarkup(title: string, subtitle: string) {
  return {
    type: 'div',
    props: {
      style: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '80px',
        backgroundColor: '#050816',
        fontFamily: 'Bricolage Grotesque',
      },
      children: [
        {
          type: 'div',
          props: {
            style: {
              fontSize: '24px',
              color: '#8A8270',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              fontWeight: 500,
              marginBottom: '24px',
            },
            children: 'AARYA VASANTLAL',
          },
        },
        {
          type: 'div',
          props: {
            style: {
              fontSize: '64px',
              fontWeight: 700,
              color: '#F2ECDF',
              lineHeight: 1.05,
              letterSpacing: '-0.035em',
            },
            children: title,
          },
        },
        {
          type: 'div',
          props: {
            style: {
              fontSize: '28px',
              color: '#C8C1AE',
              marginTop: '20px',
              lineHeight: 1.4,
            },
            children: subtitle,
          },
        },
      ],
    },
  };
}

export async function GET({ props }: APIContext) {
  const { title, subtitle } = props as { title: string; subtitle: string };

  // satori accepts plain objects at runtime but its types expect ReactNode
  const svg = await satori(ogMarkup(title, subtitle) as any, {
    width: 1200,
    height: 630,
    fonts: [
      {
        name: 'Bricolage Grotesque',
        data: fontData,
        style: 'normal' as const,
      },
    ],
  });

  const png = await sharp(Buffer.from(svg)).png().toBuffer();

  return new Response(new Uint8Array(png), {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}
