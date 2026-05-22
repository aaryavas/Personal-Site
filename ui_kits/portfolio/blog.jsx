/* global React, Sticker, Stamp, Tag, Btn, Tile, Annotation, useHash, go */

const POSTS = [
  {
    slug: 'three-bugs-and-a-baseline',
    date: '2025·11·18',
    title: 'Three bugs and a baseline.',
    dek: 'How a misreported accuracy by 50% turned into a senior-design win.',
    read: '8 min',
    tags: ['rl', 'evals'],
    body: [
      "I'm finishing my senior project this semester — extending MOPI-HFRS, a graph-neural-net food recommender, into a dynamic multi-objective system with A2C reinforcement learning. The paper's numbers were good. The code was suspicious.",
      "By week three, I'd found three compounding evaluation bugs in the original codebase. Each one inflated accuracy in a slightly different way. Stacked, they misreported the model by over 50%. The headline result was, frankly, not real.",
      "The interesting part wasn't the bugs themselves — anyone digging hard enough finds them. The interesting part was that fixing them gave us a real baseline that the new method could honestly beat. Health alignment 0.39 → 0.73. Slight tradeoff on preference. Clean win.",
      "There's a lesson in here I keep coming back to: in ML research, the most valuable artifact you produce isn't the model. It's the eval harness everyone else will use to argue with you. Get the harness right, and the rest is downstream.",
    ],
  },
  {
    slug: 'voice-ai-by-yourself',
    date: '2025·09·02',
    title: 'Voice AI on-device, by yourself.',
    dek: 'Six months at Savant, ~60 tool calls, one router.',
    read: '12 min',
    tags: ['voice', 'agents'],
    body: [
      "When I started at Savant, the goal was simple: GPT-4o-quality conversation, on-device, no cloud. I had limited compute, six months, and a strong opinion that it should be possible.",
      "The crux was the router. With sixty tool calls, you can't ask a single small model to reason about all of them in-context. Instead I built a semantic router: a model2vec embedding of the user query against an embedding of each tool's purpose, then a tiny classifier picks the right specialist SLM agent.",
      "Pair that with Whisper for STT, a vector DB carrying chat history, and finetuned conversational SLMs at the leaves, and you have something that holds together — about 95% accuracy per use case, with speech that doesn't feel robotic.",
    ],
  },
  {
    slug: 'finetuning-without-the-priesthood',
    date: '2025·07·14',
    title: 'Finetuning without the priesthood.',
    dek: 'Why I built a TUI for VB-LoRA + ORPO and put it on GitHub.',
    read: '6 min',
    tags: ['llms', 'tools'],
    body: [
      "I have a lot of friends building agents. They're great engineers. They are not, by hobby, ML researchers. And every time they try to finetune a small open-source LLM to call their tools reliably, they bounce off the same cliff: the pipeline is hostile.",
      "RL-LLM-AutoTrainer is my attempt to close that gap. Generate synthetic data, finetune with VB-LoRA so it runs on a consumer GPU, evaluate with BERTScore, then progressively align with ORPO — all in a TUI you can drive without remembering twelve flags.",
      "The demo finetunes SmolLM2-135M for MCP tool calling. Three example tasks: code_search, open_file, run_tests. It works.",
    ],
  },
  {
    slug: 'rlhf-for-math',
    date: '2024·08·30',
    title: 'RLHF for math, what I learned.',
    dek: 'A summer engineering alignment data for frontier models.',
    read: '7 min',
    tags: ['alignment'],
    body: [
      "I spent the summer of 2024 at Outlier writing alignment data for frontier models in mathematics — differential equations, linear algebra, the works. The job was easy to describe and hard to do well: write problems and responses that push the model away from surface-level agreeability.",
      "The trick I kept returning to: structure-first feedback. Models love to agree. They will validate a wrong proof if you nudge them. Building adversarial feedback loops where every step has to satisfy a rule (an axiom, a structural constraint) caught more deceptive reasoning than any heuristic about tone.",
    ],
  },
];
window.POSTS = POSTS;

const BlogIndex = () => (
  <section>
    <div className="kicker" style={{ marginTop: 24 }}>essays · informal</div>
    <h1 style={{ fontFamily:'var(--font-display)', fontSize: 64, fontWeight:600, letterSpacing:'-.035em', margin: '8px 0 6px', lineHeight: .98 }}>
      Thinking out loud<br/>
      <em style={{ fontFamily:'var(--font-serif)', fontStyle:'italic', fontWeight:400, color:'var(--accent-ink)' }}>about whatever I&rsquo;m building.</em>
    </h1>
    <p className="hero__dek" style={{ marginTop: 18, maxWidth: '56ch' }}>
      Short essays — usually about something I&rsquo;ve just figured out or just gotten wrong. No newsletter. RSS{' '}
      <a href="#" style={{ color: 'inherit' }}>here</a>.
    </p>

    {/* Filters */}
    <div style={{ display:'flex', gap: 10, alignItems:'center', marginTop: 36, flexWrap:'wrap' }}>
      <span className="meta">filter</span>
      <Tag ink>all</Tag>
      <Tag>rl</Tag>
      <Tag>agents</Tag>
      <Tag>llms</Tag>
      <Tag>tools</Tag>
      <Tag>evals</Tag>
      <Tag>alignment</Tag>
    </div>

    <div style={{ marginTop: 24 }}>
      {POSTS.map(p => (
        <a key={p.slug} className="row-link" href={'#/blog/' + p.slug}>
          <span className="row-link__date">{p.date}</span>
          <span>
            <div className="row-link__title">{p.title}</div>
            <div className="row-link__dek">{p.dek}</div>
          </span>
          <span className="row-link__arrow">{p.read} ↗</span>
        </a>
      ))}
    </div>
  </section>
);

const BlogPost = ({ slug }) => {
  const p = POSTS.find(x => x.slug === slug);
  if (!p) return (
    <section style={{ paddingTop:64 }}>
      <h1 style={{ fontFamily:'var(--font-display)', fontSize: 56 }}>404 · no such essay</h1>
      <Btn href="#/blog">← back to essays</Btn>
    </section>
  );
  return (
    <section>
      <div className="crumbs">
        <a href="#/blog">essays</a> <span>/</span> <span>{p.slug}</span>
      </div>
      <article className="article">
        <div className="meta">{p.date} · {p.read} read · {p.tags.join(' · ')}</div>
        <h1>{p.title}</h1>
        <p className="lede">{p.dek}</p>
        {p.body.map((para, i) => {
          // pull one para and decorate it with a marginal annotation for variety
          if (i === 1) {
            return (
              <div key={i} style={{ position:'relative' }}>
                <p>{para}</p>
                <div style={{ position:'absolute', right:-160, top: 4, width: 130, display:'none' }} className="marginalia">
                  {/* offscreen on small viewports — true marginalia in a wider design */}
                </div>
              </div>
            );
          }
          if (i === 2) {
            return (
              <blockquote key={i}>{para}</blockquote>
            );
          }
          return <p key={i}>{para}</p>;
        })}

        <hr className="rule" style={{ marginTop: 40 }}/>

        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginTop: 24, gap: 16, flexWrap:'wrap' }}>
          <div className="meta">— Aarya, {p.date.split('·')[0]}</div>
          <div style={{ display:'flex', gap:10, alignItems:'center' }}>
            <Btn variant="ghost" href="#/blog">← all essays</Btn>
            <Btn href="https://github.com/aaryavas">comment on github →</Btn>
          </div>
        </div>
      </article>
    </section>
  );
};

Object.assign(window, { BlogIndex, BlogPost });
