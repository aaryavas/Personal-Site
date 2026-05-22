/* global React, Sticker, Stamp, Tag, Btn, Tile, Annotation, MathOrnament */

const Contact = () => (
  <section>
    <div className="kicker" style={{ marginTop: 24 }}>contact · say hello</div>
    <h1 style={{ fontFamily:'var(--font-display)', fontSize: 64, fontWeight:600, letterSpacing:'-.035em', margin: '8px 0 6px', lineHeight: .98 }}>
      I&rsquo;d love to <em style={{ fontFamily:'var(--font-serif)', fontStyle:'italic', fontWeight:400, color:'var(--accent-ink)' }}>hear from you.</em>
    </h1>
    <p className="hero__dek" style={{ marginTop: 18, maxWidth: '54ch' }}>
      Research collabs, internships, weird agent ideas — all welcome. Email is fastest.
    </p>

    <div className="bento" style={{ marginTop: 40 }}>

      {/* Email */}
      <Tile href="mailto:aarya.vasantlal@uconn.edu" className="b-span-8 b-rows-3 tilt-1" ink>
        <div className="meta">email · best</div>
        <div style={{ fontFamily:'var(--font-display)', fontSize: 44, fontWeight: 600, letterSpacing:'-.025em', lineHeight: 1.05, marginTop: 8, wordBreak:'break-all' }}>
          aarya.vasantlal<br/>@uconn.edu
        </div>
        <div className="meta" style={{ marginTop: 14 }}>I usually reply within a day or two.</div>
      </Tile>

      {/* Phone */}
      <Tile className="b-span-4 b-rows-3 tilt-2">
        <div className="meta">phone · maybe</div>
        <div style={{ fontFamily:'var(--font-display)', fontSize: 32, fontWeight: 600, letterSpacing:'-.02em', lineHeight: 1.05, marginTop: 8 }}>
          860 · 571<br/>· 1509
        </div>
        <div className="meta" style={{ marginTop: 12 }}>text > call. EST.</div>
      </Tile>

      {/* GitHub */}
      <Tile href="https://github.com/aaryavas" className="b-span-4 b-rows-2 tilt-3">
        <div className="meta">github ↗</div>
        <div style={{ fontFamily:'var(--font-display)', fontSize: 24, fontWeight: 600, letterSpacing:'-.02em', lineHeight: 1.05, marginTop: 6 }}>
          @aaryavas
        </div>
        <div className="meta" style={{ marginTop: 10 }}>open-source · agents · rust · py</div>
      </Tile>

      {/* LinkedIn */}
      <Tile href="https://www.linkedin.com/in/aarya-vasantlal" className="b-span-4 b-rows-2 tilt-4">
        <div className="meta">linkedin ↗</div>
        <div style={{ fontFamily:'var(--font-display)', fontSize: 24, fontWeight: 600, letterSpacing:'-.02em', lineHeight: 1.05, marginTop: 6 }}>
          aarya-vasantlal
        </div>
        <div className="meta" style={{ marginTop: 10 }}>1k followers · 500+ connections</div>
      </Tile>

      {/* CV download */}
      <Tile href="#" className="b-span-4 b-rows-2 tilt-1" accent>
        <div className="meta" style={{ color:'var(--accent-ink)' }}>cv · 1 page · pdf</div>
        <div style={{ fontFamily:'var(--font-display)', fontSize: 24, fontWeight: 600, letterSpacing:'-.02em', lineHeight: 1.05, marginTop: 6, color:'var(--ink)' }}>
          Download CV
        </div>
        <div className="meta" style={{ marginTop: 10, color:'var(--accent-ink)' }}>updated 2026·02</div>
      </Tile>

    </div>

    {/* SIGNATURE */}
    <div style={{ marginTop: 80, paddingTop: 32, borderTop: '1px solid var(--rule)', display:'flex', alignItems:'center', justifyContent:'space-between', gap: 24, flexWrap:'wrap' }}>
      <div>
        <div className="meta" style={{ marginBottom: 10 }}>thanks for stopping by</div>
        <div style={{ fontFamily:"'Homemade Apple', cursive", fontSize: 64, color:'var(--ink)', lineHeight: 1, letterSpacing:'.005em' }}>
          Aarya
        </div>
        <svg viewBox="0 0 220 14" width="220" height="14" fill="none" stroke="var(--ink)" strokeWidth="1.4" strokeLinecap="round" style={{ opacity:.45, marginLeft: 8, marginTop: -8 }}>
          <path d="M 4 8 C 80 4, 140 12, 200 7 C 210 5, 215 9, 218 7"/>
        </svg>
      </div>
      <MathOrnament style={{ fontSize: 36, color:'var(--ink-4)' }}>∑ thanks → ∞</MathOrnament>
    </div>
  </section>
);

Object.assign(window, { Contact });
