/* global React */
const { useEffect, useState, useRef, useMemo } = React;

/* ============================================================
   PRIMITIVES — shared across all surfaces
   ============================================================ */

// hash-based router helpers
function useHash() {
  const [hash, setHash] = useState(() => window.location.hash || '#/');
  useEffect(() => {
    const on = () => setHash(window.location.hash || '#/');
    window.addEventListener('hashchange', on);
    return () => window.removeEventListener('hashchange', on);
  }, []);
  return hash;
}
function go(to) { window.location.hash = to; }

// nav scroll-aware shadow
function useScrolled() {
  const [s, setS] = useState(false);
  useEffect(() => {
    const on = () => setS(window.scrollY > 64);
    window.addEventListener('scroll', on, { passive: true });
    on();
    return () => window.removeEventListener('scroll', on);
  }, []);
  return s;
}

const Wordmark = ({ onClick }) => (
  <button className="nav__brand" onClick={onClick} aria-label="Home">
    <span className="nav__sig">Aarya Vasantlal</span>
    <span className="pin">·  cse '26  ·  storrs</span>
  </button>
);

const TopNav = () => {
  const hash = useHash();
  const scrolled = useScrolled();
  const active = (h) => hash === h || (h !== '#/' && hash.startsWith(h));
  const items = [
    ['#/projects', 'work'],
    ['#/research', 'research'],
    ['#/blog', 'essays'],
    ['#/now', 'now'],
    ['#/contact', 'contact'],
  ];
  return (
    <header className={'nav' + (scrolled ? ' scrolled' : '')}>
      <Wordmark onClick={() => go('#/')} />
      <nav className="nav__links">
        {items.map(([h, label]) => (
          <a key={h} href={h} className={active(h) ? 'active' : ''}>{label}</a>
        ))}
      </nav>
    </header>
  );
};

const Footer = () => (
  <footer className="footer">
    <span className="meta">© Aarya Vasantlal  ·  set in Bricolage Grotesque, Literata, JetBrains Mono</span>
    <span className="meta">
      <a href="https://github.com/aaryavas" style={{color:'inherit'}}>github</a> ·{' '}
      <a href="https://www.linkedin.com/in/aarya-vasantlal" style={{color:'inherit'}}>linkedin</a> ·{' '}
      <a href="mailto:aarya.vasantlal@uconn.edu" style={{color:'inherit'}}>email</a>
    </span>
  </footer>
);

/* ----------- Sticker, Stamp, Tag, Btn ----------- */
const Sticker = ({ children, color = 'butter', rotate = -2, style }) => (
  <span className={'sticker sticker--' + color} style={{ transform: `rotate(${rotate}deg)`, ...style }}>{children}</span>
);
const Stamp = ({ children, rotate = -5, style }) => (
  <span className="stamp" style={{ transform: `rotate(${rotate}deg)`, ...style }}>{children}</span>
);
const Tag = ({ children, ink, style }) => (
  <span className={'tag' + (ink ? ' tag--ink' : '')} style={style}>{children}</span>
);
const Btn = ({ children, variant = '', sm, href, onClick, ...rest }) => {
  const cls = `btn ${variant ? 'btn--' + variant : ''} ${sm ? 'btn--sm' : ''}`.trim();
  if (href) return <a href={href} className={cls} {...rest}>{children}</a>;
  return <button className={cls} onClick={onClick} {...rest}>{children}</button>;
};

/* ----------- Tile ----------- */
const Tile = ({ as = 'div', className = '', children, href, ink, accent, sticker, style, ...rest }) => {
  const cls = ['tile',
    ink && 'tile--ink',
    accent && 'tile--accent',
    sticker && 'tile--sticker',
    className].filter(Boolean).join(' ');
  if (href) return <a href={href} className={cls} style={style} {...rest}>{children}</a>;
  const C = as;
  return <C className={cls} style={style} {...rest}>{children}</C>;
};

/* ----------- Annotation — animated hand-drawn ----------- */
const Annotation = ({ kind = 'arrow-curve', color, w = 100, h = 60, rotate = 0, style }) => {
  const paths = {
    'arrow-curve': (
      <g>
        <path d="M 6 8 C 30 8, 56 10, 78 36"/>
        <path d="M 70 28 L 80 38 L 70 44"/>
      </g>
    ),
    'arrow-left': (
      <g>
        <path d="M 94 15 L 8 15"/>
        <path d="M 18 8 L 6 15 L 18 22"/>
      </g>
    ),
    'circle': <path d="M 60 6 C 90 6, 116 16, 116 30 C 116 44, 90 54, 60 54 C 30 54, 4 44, 4 30 C 4 16, 30 6, 60 6 Z"/>,
    'underline': <path d="M 4 8 Q 24 2, 44 8 T 84 8 T 124 8 T 164 8 T 196 8"/>,
    'scribble': <path d="M 4 14 C 14 2, 20 22, 30 12 S 50 4, 60 16 S 80 4, 96 12"/>,
    'star': <path d="M 30 6 L 36 24 L 54 26 L 40 38 L 46 54 L 30 44 L 14 54 L 20 38 L 6 26 L 24 24 Z"/>,
    'asterisk': <path d="M 20 4 L 20 36 M 6 12 L 34 28 M 6 28 L 34 12"/>,
    'check': <path d="M 4 14 L 16 26 L 36 4"/>,
  };
  const vb = {
    'arrow-curve': '0 0 100 60', 'arrow-left': '0 0 100 30',
    'circle': '0 0 120 60', 'underline': '0 0 200 12', 'scribble': '0 0 100 24',
    'star': '0 0 60 60', 'asterisk': '0 0 40 40', 'check': '0 0 40 30',
  }[kind];
  return (
    <svg viewBox={vb} width={w} height={h} fill="none" stroke={color || 'currentColor'}
         strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
         className="draw"
         style={{ transform: `rotate(${rotate}deg)`, ...style }}>
      {paths[kind]}
    </svg>
  );
};

/* ----------- Rotating hero word ----------- */
const RotatingHero = ({ words, dur = 2400 }) => {
  const [i, setI] = useState(0);
  const [w, setW] = useState(0);
  const measureRef = useRef(null);
  const innerRef = useRef(null);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % words.length), dur);
    return () => clearInterval(t);
  }, [dur, words.length]);
  useEffect(() => {
    if (!measureRef.current) return;
    const widths = [...measureRef.current.children].map(c => c.offsetWidth);
    setW(Math.max(...widths));
  }, [words]);
  // Web Animations API: actually progresses in iframe; CSS animations get throttled here.
  useEffect(() => {
    if (!innerRef.current) return;
    innerRef.current.animate(
      [{ opacity: 0, transform: 'translateY(12px)' }, { opacity: 1, transform: 'none' }],
      { duration: 380, easing: 'cubic-bezier(.2,.7,.2,1)', fill: 'forwards' }
    );
  }, [i]);
  const current = words[i];
  return (
    <span className="hero__rot" style={{ minWidth: w ? w + 8 : 'auto' }}>
      <span ref={measureRef} aria-hidden="true" style={{ position:'absolute', visibility:'hidden', whiteSpace:'nowrap', pointerEvents:'none' }}>
        {words.map((x, k) => <span key={k} style={{ display:'inline-block', padding:'0 4px' }}>{x}</span>)}
      </span>
      <span ref={innerRef} key={i} className="hero__rot-inner" style={{ color:'var(--accent-ink)' }}>
        {current}
      </span>
    </span>
  );
};

/* ----------- Math ornament (decorative formula) ----------- */
const MathOrnament = ({ children = '∂ℒ/∂θ ≈ 0', style }) => (
  <span className="notation" style={{ fontStyle: 'italic', fontFeatureSettings: '"ss01" on', ...style }}>{children}</span>
);

/* ----------- Generative scratchpad bg (sparse dots + glyphs) ----------- */
const ScratchpadBg = ({ density = 14 }) => {
  const items = useMemo(() => {
    const arr = [];
    const glyphs = ['∑', '∂', 'π', 'σ', '∇', '∫', 'θ', 'α', '≈', 'λ', 'μ', 'ε'];
    for (let i = 0; i < density; i++) {
      arr.push({ type: 'dot', top: Math.random() * 100, left: Math.random() * 100, op: 0.06 + Math.random() * 0.15 });
    }
    for (let i = 0; i < Math.floor(density / 3); i++) {
      arr.push({
        type: 'glyph',
        top: Math.random() * 100, left: Math.random() * 100,
        size: 18 + Math.random() * 26,
        rot: Math.random() * 30 - 15,
        char: glyphs[Math.floor(Math.random() * glyphs.length)],
      });
    }
    return arr;
  }, [density]);
  return (
    <div className="scratch" aria-hidden>
      {items.map((it, k) =>
        it.type === 'dot' ? (
          <span key={k} className="dot" style={{ top: it.top + '%', left: it.left + '%', opacity: it.op }} />
        ) : (
          <span key={k} className="glyph" style={{
            top: it.top + '%', left: it.left + '%',
            fontSize: it.size, transform: `rotate(${it.rot}deg)`
          }}>{it.char}</span>
        )
      )}
    </div>
  );
};

Object.assign(window, {
  useHash, go, useScrolled,
  Wordmark, TopNav, Footer,
  Sticker, Stamp, Tag, Btn, Tile,
  Annotation, RotatingHero, MathOrnament, ScratchpadBg,
});
