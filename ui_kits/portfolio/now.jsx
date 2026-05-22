/* global React, Sticker, Stamp, Tag, Btn, Tile, Annotation, MathOrnament */

const Now = () => (
  <section>
    <div className="kicker" style={{ marginTop: 24 }}>now · what I&rsquo;m on lately</div>
    <h1 style={{ fontFamily:'var(--font-display)', fontSize: 64, fontWeight:600, letterSpacing:'-.035em', margin: '8px 0 6px', lineHeight: .98 }}>
      A working <em style={{ fontFamily:'var(--font-serif)', fontStyle:'italic', fontWeight:400, color:'var(--accent-ink)' }}>set of obsessions.</em>
    </h1>
    <p className="hero__dek" style={{ marginTop: 18, maxWidth: '54ch' }}>
      Updated whenever something new sticks. Inspired by <a href="#">nownownow.com</a>.
    </p>

    {/* BENTO of now-items */}
    <div className="bento" style={{ marginTop: 44 }}>

      {/* reading */}
      <Tile className="b-span-6 b-rows-3 tilt-1">
        <div className="meta">reading</div>
        <ul style={{ listStyle:'none', padding: 0, margin: '14px 0 0' }}>
          <li style={{ display:'flex', alignItems:'baseline', gap: 14, padding: '10px 0', borderBottom: '1px dashed var(--rule)' }}>
            <span style={{ fontFamily:'var(--font-display)', fontSize: 22, fontWeight: 500, letterSpacing:'-.015em' }}>The Bitter Lesson</span>
            <span style={{ fontFamily:'var(--font-serif)', fontStyle:'italic', fontSize: 15, color:'var(--ink-3)' }}>— Sutton, again</span>
          </li>
          <li style={{ display:'flex', alignItems:'baseline', gap: 14, padding: '10px 0', borderBottom: '1px dashed var(--rule)' }}>
            <span style={{ fontFamily:'var(--font-display)', fontSize: 22, fontWeight: 500, letterSpacing:'-.015em' }}>Sparks of AGI</span>
            <span style={{ fontFamily:'var(--font-serif)', fontStyle:'italic', fontSize: 15, color:'var(--ink-3)' }}>— Bubeck et al.</span>
          </li>
          <li style={{ display:'flex', alignItems:'baseline', gap: 14, padding: '10px 0', borderBottom: '1px dashed var(--rule)' }}>
            <span style={{ fontFamily:'var(--font-display)', fontSize: 22, fontWeight: 500, letterSpacing:'-.015em' }}>The Pragmatic Programmer</span>
            <span style={{ fontFamily:'var(--font-serif)', fontStyle:'italic', fontSize: 15, color:'var(--ink-3)' }}>— Hunt & Thomas</span>
          </li>
          <li style={{ display:'flex', alignItems:'baseline', gap: 14, padding: '10px 0' }}>
            <span style={{ fontFamily:'var(--font-display)', fontSize: 22, fontWeight: 500, letterSpacing:'-.015em' }}>Three-Body</span>
            <span style={{ fontFamily:'var(--font-serif)', fontStyle:'italic', fontSize: 15, color:'var(--ink-3)' }}>— Liu Cixin · finally</span>
          </li>
        </ul>
      </Tile>

      {/* building */}
      <Tile className="b-span-6 b-rows-3 tilt-2" ink>
        <div className="meta">building</div>
        <div style={{ marginTop: 14, display:'flex', flexDirection:'column', gap: 14 }}>
          <div>
            <div style={{ fontFamily:'var(--font-display)', fontSize: 22, fontWeight: 500, color:'var(--paper)' }}>
              MOPI-HFRS A2C extension
            </div>
            <div style={{ fontFamily:'var(--font-mono)', fontSize: 12, color:'var(--paper-3)', marginTop: 4 }}>
              [████████████████░░░] · writing the paper
            </div>
          </div>
          <div>
            <div style={{ fontFamily:'var(--font-display)', fontSize: 22, fontWeight: 500, color:'var(--paper)' }}>
              Bug-report benchmark
            </div>
            <div style={{ fontFamily:'var(--font-mono)', fontSize: 12, color:'var(--paper-3)', marginTop: 4 }}>
              [██████░░░░░░░░░░░░░] · eval harness
            </div>
          </div>
          <div>
            <div style={{ fontFamily:'var(--font-display)', fontSize: 22, fontWeight: 500, color:'var(--paper)' }}>
              RL-LLM-AutoTrainer v0.4
            </div>
            <div style={{ fontFamily:'var(--font-mono)', fontSize: 12, color:'var(--paper-3)', marginTop: 4 }}>
              [██████████░░░░░░░░░] · adding evals
            </div>
          </div>
        </div>
      </Tile>

      {/* a thought */}
      <Tile className="b-span-7 b-rows-2 tilt-3" accent>
        <div className="meta" style={{ color:'var(--accent-ink)' }}>a thought</div>
        <div style={{ fontFamily:'var(--font-serif)', fontStyle:'italic', fontSize: 24, lineHeight: 1.35, color:'var(--ink)', marginTop: 10 }}>
          &ldquo;The most valuable artifact in ML research isn&rsquo;t the model.
          It&rsquo;s the eval harness everyone else will use to argue with you.&rdquo;
        </div>
      </Tile>

      {/* listening */}
      <Tile className="b-span-5 b-rows-2 tilt-4">
        <div className="meta">listening</div>
        <ul style={{ listStyle: 'none', padding: 0, margin: '12px 0 0', fontFamily:'var(--font-serif)', fontSize: 16, color:'var(--ink-2)', lineHeight: 1.7 }}>
          <li>· Dwarkesh Patel — anything Karpathy</li>
          <li>· No Priors</li>
          <li>· Latent Space</li>
          <li>· Mike Knoop talking ARC</li>
        </ul>
      </Tile>

      {/* mood */}
      <Tile className="b-span-4 b-rows-2 tilt-1">
        <div className="meta">mood</div>
        <div style={{ fontFamily:'var(--font-display)', fontSize: 32, fontWeight: 600, letterSpacing:'-.02em', lineHeight: 1.05, marginTop: 10 }}>
          Cautiously optimistic.<br/>
          <span style={{ fontFamily:'var(--font-serif)', fontStyle:'italic', fontWeight: 400, color:'var(--ink-3)', fontSize: 22 }}>Mostly under-caffeinated.</span>
        </div>
      </Tile>

      {/* writing */}
      <Tile className="b-span-4 b-rows-2 tilt-2">
        <div className="meta">writing next</div>
        <ul style={{ listStyle: 'none', padding: 0, margin: '12px 0 0', fontFamily:'var(--font-serif)', fontSize: 16, color:'var(--ink-2)', lineHeight: 1.7 }}>
          <li>· post on debugging RL eval harnesses</li>
          <li>· short note on ORPO vs DPO in practice</li>
          <li>· thread on agent routing topologies</li>
        </ul>
      </Tile>

      {/* tiny */}
      <Tile className="b-span-4 b-rows-2 tilt-3" sticker style={{ background: 'var(--sticker-mint)', border: '1px solid var(--ink)' }}>
        <div className="meta">snack</div>
        <div style={{ fontFamily:'var(--font-display)', fontSize: 22, fontWeight: 500, lineHeight: 1.1, marginTop: 6 }}>
          A 135M SmolLM<br/>that finally calls tools right.
        </div>
        <div style={{ marginTop: 12 }}>
          <MathOrnament>≈ 95% acc.</MathOrnament>
        </div>
      </Tile>

    </div>

    <div className="meta" style={{ marginTop: 36, textAlign:'right' }}>last updated · 2026·02·11</div>
  </section>
);

Object.assign(window, { Now });
