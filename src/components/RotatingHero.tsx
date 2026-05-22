import { useState, useEffect, useRef } from 'react';

interface RotatingHeroProps {
  words: string[];
  dur?: number;
}

export default function RotatingHero({ words, dur = 2400 }: RotatingHeroProps) {
  const [i, setI] = useState(0);
  const [w, setW] = useState(0);
  const measureRef = useRef<HTMLSpanElement>(null);
  const innerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % words.length), dur);
    return () => clearInterval(t);
  }, [dur, words.length]);

  useEffect(() => {
    if (!measureRef.current) return;
    const widths = Array.from(measureRef.current.children).map(
      (c) => (c as HTMLElement).offsetWidth
    );
    setW(Math.max(...widths));
  }, [words]);

  useEffect(() => {
    if (!innerRef.current) return;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;
    innerRef.current.animate(
      [
        { opacity: 0, transform: 'translateY(12px)' },
        { opacity: 1, transform: 'none' },
      ],
      { duration: 380, easing: 'cubic-bezier(.2,.7,.2,1)', fill: 'forwards' }
    );
  }, [i]);

  return (
    <span className="hero__rot" style={{ minWidth: w ? w + 8 : 'auto' }}>
      <span
        ref={measureRef}
        aria-hidden="true"
        style={{
          position: 'absolute',
          visibility: 'hidden',
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
        }}
      >
        {words.map((x, k) => (
          <span key={k} style={{ display: 'inline-block', padding: '0 4px' }}>
            {x}
          </span>
        ))}
      </span>
      <span
        ref={innerRef}
        key={i}
        className="hero__rot-inner"
        style={{ color: 'var(--accent-ink)' }}
      >
        {words[i]}
      </span>
    </span>
  );
}
