/* global React, Sticker, Stamp, Tag, Btn, Tile, Annotation, useHash, go */

const PROJECTS = [
  {
    id: 'mopi',
    year: '2025',
    title: 'MOPI-HFRS · A2C extension',
    subtitle: 'Multi-objective RL for healthier food recommendations',
    blurb: 'Extending a static GNN food recommender into a dynamic multi-objective system with A2C — jointly optimizing relevance and health across 8,170 users × 6,769 items.',
    tags: ['RL', 'A2C', 'GNN', 'PyTorch'],
    stamp: '1st place',
    stickerColor: 'butter',
    accentMetric: { label: 'health alignment', from: '0.39', to: '0.73' },
    long: [
      'Joint work with Dr. Chuxu Zhang. The original MOPI-HFRS paper reports A2C-style improvements on a static recommender — but it (a) used a high-variance REINFORCE policy gradient, (b) had three compounding evaluation bugs that misreported accuracy by over 50%, and (c) lacked any warm-start.',
      'I rebuilt the system with an A2C critic baseline, added behavioral-cloning pretraining, and designed a per-step multi-objective reward combining relevance and health-tag overlap. The corrected baseline matters as much as the result.',
    ],
    bullets: [
      'Won 1st in UConn School of Computing College of Engineering Senior Design Competition (1 of 72).',
      'Discovered & corrected 3 evaluation bugs in original codebase.',
      'Replaced REINFORCE → A2C with critic baseline + behavior-cloning warm start.',
      'Per-step multi-objective reward: relevance + health-tag overlap.',
      'Health alignment: 0.39 → 0.73 (slight tradeoff on preference alignment).',
    ],
  },
  {
    id: 'autotrainer',
    year: '2025',
    title: 'Terminal LLM Trainer',
    subtitle: 'Finetune small LLMs without an ML background',
    blurb: 'A TUI tool that automates synthetic data generation, VB-LoRA finetuning, and ORPO alignment — packaged for engineers who just want a model that calls their tools right.',
    tags: ['LLMs', 'HuggingFace', 'TUI', 'Python'],
    stamp: 'open source',
    stickerColor: 'mint',
    long: [
      'I noticed friends building agents kept hitting the same wall: small open-source LLMs are great until they fumble tool calls. The fix is finetuning, but the ML pipeline is hostile to anyone who hasn\'t lived in it for years.',
      'Autotrainer wraps the whole workflow in a TUI: generate synthetic data, finetune with VB-LoRA (parameter-efficient, runs on consumer GPUs), evaluate with BERTScore/CodeBERTScore, then progressively align with ORPO — contrasting ground truth against the model\'s own prior generations.',
    ],
    bullets: [
      'Full TUI: synthetic data → SFT (VB-LoRA) → eval → ORPO alignment.',
      'No separate RLHF reward model — ORPO chooses chosen/rejected pairs from prior gens.',
      'Demo: finetuned SmolLM2-135M for MCP tool-calling (code_search, open_file, run_tests).',
      'Runs on consumer hardware.',
    ],
  },
  {
    id: 'voice',
    year: '2025',
    title: 'On-device Voice AI · Savant',
    subtitle: 'Local GPT-4o-style conversation, no cloud',
    blurb: 'Replicating advanced conversational AI on-device with limited compute: a multi-agent architecture managing 60+ tool calls, a semantic router, and finetuned SLMs.',
    tags: ['Voice', 'SLM', 'Whisper', 'RAG'],
    stamp: 'shipped',
    stickerColor: 'sky',
    long: [
      'Six months at Savant building a Voice AI model end-to-end. The constraint: it had to run on-device — no cloud calls, no GPT-4o at runtime.',
      'I designed a multi-agent system that intelligently routes user queries to specialized lightweight SLM agents, with OpenAI Whisper handling speech-to-text and a custom model2vec embedding classifier doing the routing. A RAG-backed vector DB carries chat history for context.',
    ],
    bullets: [
      'Independently spearheaded end-to-end development.',
      'Multi-agent architecture managing 60+ complex tool calls.',
      'Whisper STT + custom model2vec embeddings + classifier router.',
      'Vector DB w/ RAG for chat-history context.',
      'Finetuned CSMs to up to 95% accuracy per use case with natural speech.',
    ],
  },
  {
    id: 'knowgraph',
    year: '2025',
    title: 'Bioinformatics KG extraction',
    subtitle: 'Multi-agent system for normalizing experimental assays',
    blurb: 'Knowledge graphs across thousands of bioinformatics papers, normalized by an agent team: Ontology, Top-K, RAG, and LLM-as-a-Judge.',
    tags: ['Agents', 'RAG', 'NLP', 'Ontology'],
    stamp: 'paper in progress',
    stickerColor: 'lilac',
    long: [
      'Research with Dr. Tingting Yu and Dr. Jinze Liu (UConn). The question: can we extract the process of experiments — the actual sequence of steps, samples, assays — across thousands of bioinformatics papers, and put them into a shared graph?',
      'I orchestrated LLMs to normalize assay types via a custom multi-agent architecture: an Ontology agent grounds vocabulary, a Top-K agent retrieves candidates, a RAG agent contextualizes, and an LLM-as-a-Judge agent decides. Visualized with React + Vite.',
    ],
    bullets: [
      'Paper in progress on agentic systems for experimental-process extraction.',
      'Visualized knowledge graphs over 1000s of papers (React + Vite).',
      'Custom multi-agent: Ontology + Top-K + RAG + Judge.',
    ],
  },
  {
    id: 'bugbench',
    year: '2025',
    title: 'Autonomous Bug-Report Testing for Android',
    subtitle: 'Benchmarking how well autonomous agents reproduce bugs',
    blurb: 'Leading research on automating bug-report testing — including building the eval harness and benchmark itself.',
    tags: ['Eval', 'Agents', 'Android'],
    stamp: 'active',
    stickerColor: 'rose',
    long: [
      'With Dr. Tingting Yu. Bug reports are messy; testing whether an autonomous system can reproduce them requires both the agent and the harness to measure success/failure correctly.',
      'I\'m using computer-use agents to extract APK info and evaluate the outcome of executed reports. The novel methods sit alongside the benchmark itself — both are research output.',
    ],
    bullets: [
      'Eval + benchmarks for autonomous bug-report testing.',
      'Computer-use agents extracting APK info & evaluating outcomes.',
    ],
  },
  {
    id: 'flashpoint',
    year: '2025',
    title: 'Spatial-query NLP · Flashpoint AI',
    subtitle: 'Natural language → PostGIS',
    blurb: 'Solo-built a full-stack map-query app for spatial survey data, with an LLM agent translating English to PostGIS.',
    tags: ['Full-stack', 'PostGIS', 'OpenAI'],
    stamp: 'shipped',
    stickerColor: 'sky',
    long: [
      'A solo engineering project at Flashpoint AI: turn unstructured natural-language input into structured PostGIS queries for spatial survey data, with a map UI on top.',
    ],
    bullets: [
      'Full-stack: PostgreSQL + PostGIS, Node.js + Next.js + TS, React + Tailwind.',
      'OpenAI API agent for NL → PostGIS translation.',
    ],
  },
  {
    id: 'elgato',
    year: '2024',
    title: 'Predicting court motion outcomes · EL GATO Lab',
    subtitle: 'Tabular + document features for civil court motions',
    blurb: 'Combining engineered tabular features with TF-IDF-weighted Word2Vec embeddings for motion-outcome classification.',
    tags: ['NLP', 'ML', 'sklearn'],
    long: [
      'With Dr. Derek Aguiar. Civil-court motions have rich text (briefs) and tabular structure (counts, parties, dates). I built features for both and combined them.',
    ],
    bullets: [
      'Beta-Bernoulli / one-hot for tabular; TF-IDF + Word2Vec for documents.',
      'Decision Tree, XGBoost, SVM for up to 65% prediction accuracy.',
      'Anomaly-detection methods (Isolation Forest, One-Class SVM) for data filtering.',
    ],
  },
  {
    id: 'nn-scratch',
    year: '2024',
    title: 'Neural network from scratch',
    subtitle: 'No frameworks — just NumPy',
    blurb: 'A feed-forward NN written without deep-learning frameworks for handwritten-digit recognition.',
    tags: ['DL', 'NumPy', 'Python'],
    long: ['Self-explanatory: forward prop, backprop, gradient descent, manually.'],
    bullets: ['Feed-forward neural network from scratch in NumPy.', 'Forward propagation, backpropagation, gradient descent.', 'Trained on handwritten digit recognition.'],
  },
];
window.PROJECTS = PROJECTS;

/* ----- Projects index ----- */
const ProjectsIndex = () => (
  <section>
    <div className="kicker" style={{ marginTop: 24 }}>work · 2024 → present</div>
    <h1 style={{ fontFamily:'var(--font-display)', fontSize: 64, fontWeight:600, letterSpacing:'-.035em', margin: '8px 0 6px', lineHeight: .98 }}>
      Things I&rsquo;ve <em style={{ fontFamily:'var(--font-serif)', fontStyle:'italic', fontWeight:400, color:'var(--accent-ink)' }}>made, broken,</em><br/>
      and re-made.
    </h1>
    <p className="hero__dek" style={{ marginTop: 18, maxWidth: '54ch' }}>
      Research, side-projects, internships. Roughly in reverse chronological order. The starred ones are the ones I&rsquo;d most like to talk about.
    </p>

    <div style={{ marginTop: 36, display:'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 14 }}>
      {PROJECTS.map((p, i) => {
        const big = i === 0;
        return (
          <a key={p.id} className="tile" href={'#/projects/' + p.id}
             style={{
               gridColumn: big ? 'span 8' : 'span 4',
               background: big ? 'var(--paper-light)' : (i === 1 ? 'var(--ink)' : 'var(--paper-light)'),
               color: i === 1 ? 'var(--paper)' : 'var(--ink)',
               border: i === 1 ? '1px solid var(--ink)' : '1px solid var(--rule)',
               padding: 22, minHeight: big ? 240 : 180,
               display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
               position: 'relative',
             }}>
            {p.stamp && (
              <span style={{ position:'absolute', top:-8, right:18 }}>
                <Sticker color={p.stickerColor || 'butter'} rotate={3}>{p.stamp}</Sticker>
              </span>
            )}
            <div>
              <div className="meta" style={{ color: i===1 ? 'var(--paper-3)' : 'var(--ink-3)' }}>{p.year} · {p.tags.slice(0,2).join(' · ')}</div>
              <div style={{ fontFamily:'var(--font-display)', fontSize: big ? 38 : 24, fontWeight:600, letterSpacing:'-.025em', lineHeight: 1.02, marginTop: 8 }}>
                {p.title}
              </div>
              <div style={{ fontFamily:'var(--font-serif)', fontStyle:'italic', fontSize: big ? 18 : 15, color: i===1 ? 'var(--paper-3)' : 'var(--ink-3)', marginTop: 6, lineHeight:1.4 }}>
                {p.subtitle}
              </div>
            </div>
            {big && (
              <div style={{ display:'flex', gap: 8, marginTop: 16, flexWrap:'wrap' }}>
                {p.tags.map(t => <Tag key={t}>{t}</Tag>)}
              </div>
            )}
          </a>
        );
      })}
    </div>
  </section>
);

/* ----- Project detail ----- */
const ProjectDetail = ({ id }) => {
  const p = PROJECTS.find(x => x.id === id);
  if (!p) {
    return (
      <section style={{ paddingTop: 64 }}>
        <div className="meta">404</div>
        <h1 style={{ fontFamily:'var(--font-display)', fontSize: 56 }}>No such project.</h1>
        <Btn href="#/projects">← back to work</Btn>
      </section>
    );
  }
  return (
    <section>
      <div className="crumbs">
        <a href="#/projects">work</a> <span>/</span> <span>{p.id}</span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 32, marginTop: 16 }}>
        <div>
          <div className="meta" style={{ marginBottom: 12 }}>{p.year} · {p.tags.join(' · ')}</div>
          <h1 style={{ fontFamily:'var(--font-display)', fontSize: 64, fontWeight:600, letterSpacing:'-.035em', lineHeight:1, margin: 0 }}>
            {p.title}
          </h1>
          <p className="hero__dek" style={{ marginTop: 18, maxWidth: '54ch' }}>{p.subtitle}</p>

          <div className="article" style={{ margin: '24px 0 0' }}>
            {p.long.map((para, i) => <p key={i}>{para}</p>)}
            <h2>Highlights</h2>
            <ul style={{ fontFamily:'var(--font-serif)', fontSize: 17, lineHeight: 1.7, color:'var(--ink-2)', paddingLeft: 20, margin: 0 }}>
              {p.bullets.map((b, i) => <li key={i} style={{ marginBottom: 6 }}>{b}</li>)}
            </ul>
          </div>

          <div style={{ marginTop: 36, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Btn variant="primary" href="https://github.com/aaryavas">View on GitHub →</Btn>
            <Btn href="#/projects">← back to all work</Btn>
          </div>
        </div>

        {/* SIDE COLUMN */}
        <aside>
          <div style={{ position: 'sticky', top: 92 }}>
            {p.stamp && (
              <div style={{ marginBottom: 18, display:'flex', justifyContent:'flex-end' }}>
                <Sticker color={p.stickerColor || 'butter'} rotate={-4}>{p.stamp}</Sticker>
              </div>
            )}

            {p.accentMetric && (
              <Tile accent style={{ marginBottom: 14 }}>
                <div className="meta" style={{ color:'var(--accent-ink)' }}>{p.accentMetric.label}</div>
                <div style={{ display:'flex', alignItems:'baseline', gap: 12, marginTop: 8 }}>
                  <span style={{ fontFamily:'var(--font-display)', fontSize: 36, fontWeight:600, color:'var(--ink-3)' }}>{p.accentMetric.from}</span>
                  <span style={{ fontFamily:'var(--font-mono)', fontSize: 18, color:'var(--accent-ink)' }}>→</span>
                  <span style={{ fontFamily:'var(--font-display)', fontSize: 48, fontWeight:700, color:'var(--accent-ink)' }}>{p.accentMetric.to}</span>
                </div>
              </Tile>
            )}

            <Tile>
              <div className="meta">stack</div>
              <div style={{ display:'flex', gap:6, flexWrap:'wrap', marginTop:8 }}>
                {p.tags.map(t => <Tag key={t}>{t}</Tag>)}
              </div>
            </Tile>

            <Tile style={{ marginTop: 14 }}>
              <div className="meta">year</div>
              <div style={{ fontFamily:'var(--font-display)', fontSize: 32, fontWeight:600, color:'var(--ink)', marginTop: 6 }}>{p.year}</div>
            </Tile>
          </div>
        </aside>
      </div>
    </section>
  );
};

Object.assign(window, { ProjectsIndex, ProjectDetail });
