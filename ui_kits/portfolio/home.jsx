/* global React, Sticker, Stamp, Tag, Btn, Tile, Annotation, RotatingHero, MathOrnament, ScratchpadBg, go */

const Home = () => {
  const words = ['researcher.', 'builder.', 'debugger.', 'aligner.', 'tinkerer.', 'writer.'];

  return (
    <section>
      {/* HERO */}
      <div className="hero" style={{ position: 'relative' }}>
        <ScratchpadBg density={18} />

        <div className="hero__eyebrow">
          <span className="dot"/>
          <span className="meta">currently · senior @ uconn cse · graduating may 2026</span>
        </div>

        <h1 className="hero__title fadeup">
          Hi, I&rsquo;m <em>Aarya</em>.<br/>
          An AI{' '}
          <RotatingHove />
        </h1>

        <p className="hero__dek fadeup" style={{ animationDelay: '120ms' }}>
          I work on <em>agentic AI for software engineering</em> — multi-agent
          architectures, RL-driven alignment, on-device voice models, the
          occasional knowledge graph. I publish, I open-source, I sometimes win
          competitions. Mostly I&rsquo;m here to learn out loud.
        </p>

        <div className="hero__cta fadeup" style={{ animationDelay: '220ms' }}>
          <Btn variant="primary" href="#/projects">See the work →</Btn>
          <Btn href="#/research">Research</Btn>
          <Btn variant="ghost" href="#/contact">say hi ↗</Btn>
        </div>

        <div className="hero__math">
          <MathOrnament>∂ℒ/∂θ → 0</MathOrnament>
        </div>
      </div>

      {/* BENTO */}
      <div className="bento" style={{ marginTop: 56 }}>

        {/* About — big paper tile w/ marginalia */}
        <Tile className="b-span-7 b-rows-4 tilt-1" sticker>
          <div className="meta" style={{ marginBottom: 14 }}>about · 3rd person</div>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: 20, lineHeight: 1.55, color: 'var(--ink)', margin: '0 0 14px' }}>
            <strong style={{ fontWeight: 600 }}>Aarya Vasantlal</strong> is a senior CSE student
            at the University of Connecticut graduating May 2026. Her work spans agentic
            multi-agent systems for bioinformatics knowledge-graph extraction
            <span className="notation"> (Yu, Liu)</span>, autonomous bug-report
            testing for Android, on-device voice AI at Savant, spatial-query
            NLP at Flashpoint AI, and RL alignment work for Outlier.
          </p>
          <div style={{ display:'flex', gap: 10, flexWrap: 'wrap', marginTop: 18 }}>
            <Tag>agentic systems</Tag>
            <Tag>llms</Tag>
            <Tag>reinforcement learning</Tag>
            <Tag>rag</Tag>
            <Tag>nlp</Tag>
            <Tag>full-stack</Tag>
          </div>
          <div style={{ position:'absolute', right: 24, top: 20 }}>
            <Sticker rotate={-4} color="butter">1st place senior design</Sticker>
          </div>
        </Tile>

        {/* Currently working */}
        <Tile className="b-span-5 b-rows-2 tilt-2" ink>
          <div className="meta" style={{ marginBottom: 12 }}>currently · in progress</div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 600, letterSpacing: '-.02em', lineHeight: 1.05 }}>
            Co-authoring a paper on <em style={{ fontFamily:'var(--font-serif)', fontStyle:'italic', fontWeight:400 }}>knowledge-graph extraction for bioinformatics experiments.</em>
          </div>
          <div style={{ marginTop: 14, display:'flex', gap:8 }}>
            <Tag ink style={{ borderColor:'var(--paper-3)', color:'var(--paper)'}}>multi-agent</Tag>
            <Tag ink style={{ borderColor:'var(--paper-3)', color:'var(--paper)'}}>rag</Tag>
            <Tag ink style={{ borderColor:'var(--paper-3)', color:'var(--paper)'}}>ontology</Tag>
          </div>
        </Tile>

        {/* GitHub link */}
        <Tile href="https://github.com/aaryavas" className="b-span-3 b-rows-2 tilt-3" style={{ display:'flex', flexDirection:'column', justifyContent:'space-between' }}>
          <div className="meta">open source ↗</div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 600, letterSpacing: '-.02em', lineHeight: 1 }}>
            github.com/<br/>aaryavas
          </div>
          <div className="meta">12 repos · rust · py · ts</div>
        </Tile>

        {/* Featured project */}
        <Tile href="#/projects/mopi" className="b-span-2 b-rows-2 tilt-4" style={{ background:'var(--sticker-mint)', border:'1px solid var(--ink)', display:'flex', flexDirection:'column', justifyContent:'space-between' }}>
          <div className="meta">featured</div>
          <div style={{ fontFamily:'var(--font-display)', fontSize: 18, fontWeight:600, lineHeight: 1.05 }}>MOPI-<br/>HFRS<br/>A2C</div>
          <div className="meta">0.39 → 0.73</div>
        </Tile>

        {/* Latest essay row */}
        <Tile href="#/blog/three-bugs-and-a-baseline" className="b-span-7 b-rows-2 tilt-2">
          <div className="kicker">latest essay · 2025.11</div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 32, fontWeight: 600, letterSpacing: '-.02em', lineHeight: 1.05 }}>
            Three bugs and a baseline.
          </div>
          <div style={{ fontFamily:'var(--font-serif)', fontStyle:'italic', fontSize: 16, color: 'var(--ink-3)', marginTop: 6 }}>
            How a misreported accuracy by 50% turned into a senior-design win.
          </div>
        </Tile>

        {/* Now (compact) */}
        <Tile href="#/now" className="b-span-5 b-rows-2 tilt-3" accent>
          <div className="meta" style={{ color:'var(--accent-ink)' }}>now · listening · reading</div>
          <div style={{ fontFamily:'var(--font-serif)', fontSize: 17, lineHeight:1.5, color: 'var(--ink)', marginTop: 8 }}>
            Re-reading <em>The Bitter Lesson</em>; finally training a 135M model
            that doesn&rsquo;t lie about its tool calls.
          </div>
        </Tile>

      </div>

      <hr className="rule" style={{ marginTop: 64 }}/>

      {/* SELECTED PROJECTS LIST */}
      <div style={{ marginTop: 48 }}>
        <div className="kicker">selected work</div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 44, fontWeight: 600, letterSpacing:'-.025em', margin: '8px 0 24px' }}>
          A handful of recent things.
        </h2>
        <div>
          <RowLink date="2025·12" title="MOPI-HFRS · A2C extension" dek="Multi-objective RL for healthier food recommendations · 0.39 → 0.73 health alignment · UConn senior design winner." href="#/projects/mopi" />
          <RowLink date="2025·09" title="RL-LLM-AutoTrainer" dek="A terminal-first finetuning + alignment tool for engineers without an ML background. VB-LoRA + ORPO." href="#/projects/autotrainer" />
          <RowLink date="2025·06" title="On-device Voice AI · Savant" dek="GPT-4o-style conversation, locally. Whisper + custom embeddings + semantic router across 60 tool calls." href="#/projects/voice" />
          <RowLink date="2025·05" title="Bioinformatics KG extraction" dek="Multi-agent system (Ontology, Top-K, RAG, Judge) for normalizing assay types across thousands of papers." href="#/projects/knowgraph" />
        </div>
        <div style={{ marginTop: 24 }}>
          <Btn variant="ghost" href="#/projects">see all work →</Btn>
        </div>
      </div>
    </section>
  );
};

// helper: import the row link inline (avoids cross-file plumbing)
const RowLink = ({ date, title, dek, href }) => (
  <a className="row-link" href={href}>
    <span className="row-link__date">{date}</span>
    <span>
      <div className="row-link__title">{title}</div>
      <div className="row-link__dek">{dek}</div>
    </span>
    <span className="row-link__arrow">read →</span>
  </a>
);

// component name collision-proof rename for the hero rotator
const RotatingHove = () => <RotatingHero words={['researcher.', 'builder.', 'debugger.', 'aligner.', 'tinkerer.', 'writer.']} />;

Object.assign(window, { Home, RowLink });
