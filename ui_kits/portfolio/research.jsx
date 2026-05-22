/* global React, Sticker, Stamp, Tag, Btn, Tile */

const PUBLICATIONS = [
  {
    venue: 'Accepted',
    year: '2025',
    title: 'HyperEdit: Unlocking Instruction-based Text Editing in LLMs via Hypernetworks',
    authors: 'Aarya Vasantlal et al.',
    note: 'Accepted to publication; co-author.',
    status: 'accepted',
    stickerColor: 'butter',
  },
  {
    venue: 'In progress',
    year: '2025',
    title: 'Agentic Knowledge-Graph Extraction of Bioinformatic Research Experiment Processes',
    authors: 'A. Vasantlal, T. Yu, J. Liu',
    note: 'A multi-agent system (Ontology + Top-K + RAG + LLM-as-a-Judge) normalizing assay types across 1000s of papers and visualizing extracted processes as knowledge graphs.',
    status: 'in progress',
    stickerColor: 'mint',
  },
  {
    venue: 'In progress',
    year: '2025',
    title: 'Benchmarking Autonomous Bug Report Testing for Android Applications',
    authors: 'A. Vasantlal, T. Yu',
    note: 'Novel methods + evals + benchmarks for autonomous bug-report testing using computer-use agents.',
    status: 'in progress',
    stickerColor: 'rose',
  },
];

const ACTIVE_RESEARCH = [
  {
    lab: 'AI for Software Engineering — UConn',
    pi: 'Dr. Tingting Yu · Dr. Jinze Liu',
    role: 'Research Fellow',
    when: 'May 2025 — present',
    bullets: [
      'Bioinformatic experiment process KG extraction via multi-agent LLM systems',
      'Benchmarking autonomous bug-report testing for Android using computer-use agents',
    ],
  },
  {
    lab: 'EL GATO Lab — UConn',
    pi: 'Dr. Derek Aguiar',
    role: 'ML Research Fellow',
    when: 'Sept 2024 — Aug 2025',
    bullets: [
      'Predicting motion outcomes for civil court cases (Beta-Bernoulli, TF-IDF + Word2Vec weighted embeddings)',
      'Decision Tree, XGBoost, SVM classifiers; up to 65% accuracy',
      'Anomaly detection with Isolation Forests and One-Class SVM',
    ],
  },
  {
    lab: 'MOPI-HFRS · UConn Senior Design',
    pi: 'Dr. Chuxu Zhang',
    role: 'Project Lead',
    when: 'Sept 2025 — Apr 2026',
    bullets: [
      'Extended a static GNN food recommender with A2C RL across 8,170 users × 6,769 items',
      'Fixed 3 compounding evaluation bugs misreporting accuracy by >50%',
      'Health alignment 0.39 → 0.73; replaced REINFORCE with A2C critic baseline + BC pretraining',
    ],
  },
];

const Research = () => (
  <section>
    <div className="kicker" style={{ marginTop: 24 }}>research · publications & active work</div>
    <h1 style={{ fontFamily:'var(--font-display)', fontSize: 64, fontWeight:600, letterSpacing:'-.035em', margin: '8px 0 6px', lineHeight: .98 }}>
      Papers, labs, and<br/>
      <em style={{ fontFamily:'var(--font-serif)', fontStyle:'italic', fontWeight:400, color:'var(--accent-ink)' }}>things being figured out.</em>
    </h1>
    <p className="hero__dek" style={{ marginTop: 18, maxWidth: '56ch' }}>
      A mix of published, in-flight, and currently-being-written work. The official PI for each thread is named in their tile.
    </p>

    {/* Publications */}
    <div style={{ marginTop: 56 }}>
      <div className="kicker">publications</div>
      <div style={{ display:'grid', gridTemplateColumns: '1fr', gap: 12, marginTop: 14 }}>
        {PUBLICATIONS.map((p, i) => (
          <article key={i} className="tile" style={{ position:'relative', padding: '22px 24px' }}>
            <div style={{ display:'flex', alignItems:'flex-start', justifyContent:'space-between', gap: 18 }}>
              <div style={{ flex: 1 }}>
                <div style={{ display:'flex', alignItems:'center', gap: 10, marginBottom: 6 }}>
                  <span className="meta">{p.venue} · {p.year}</span>
                </div>
                <div style={{ fontFamily:'var(--font-display)', fontSize: 24, fontWeight:600, letterSpacing:'-.02em', lineHeight: 1.15 }}>
                  {p.title}
                </div>
                <div style={{ fontFamily:'var(--font-serif)', fontStyle:'italic', fontSize: 15, color:'var(--ink-3)', marginTop: 4 }}>
                  {p.authors}
                </div>
                {p.note && <div style={{ fontFamily:'var(--font-serif)', fontSize: 16, color:'var(--ink-2)', marginTop: 12, lineHeight: 1.5, maxWidth: '70ch' }}>{p.note}</div>}
              </div>
              <div style={{ flexShrink: 0 }}>
                <Sticker color={p.stickerColor} rotate={3}>{p.status}</Sticker>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>

    {/* Active research */}
    <div style={{ marginTop: 64 }}>
      <div className="kicker">research threads · active</div>
      <h2 style={{ fontFamily:'var(--font-display)', fontSize: 36, fontWeight: 600, letterSpacing:'-.02em', margin: '8px 0 18px' }}>
        Where I&rsquo;m thinking from.
      </h2>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap: 14 }}>
        {ACTIVE_RESEARCH.map((r, i) => (
          <Tile key={i} className={i % 2 ? 'tilt-2' : 'tilt-1'}>
            <div className="meta">{r.when}</div>
            <div style={{ fontFamily:'var(--font-display)', fontSize: 22, fontWeight:600, letterSpacing:'-.02em', marginTop: 8, lineHeight: 1.1 }}>
              {r.lab}
            </div>
            <div style={{ fontFamily:'var(--font-serif)', fontStyle:'italic', fontSize: 15, color:'var(--ink-3)', marginTop: 4 }}>
              {r.role} · {r.pi}
            </div>
            <ul style={{ fontFamily:'var(--font-serif)', fontSize: 14.5, lineHeight: 1.6, color:'var(--ink-2)', paddingLeft: 18, margin: '14px 0 0' }}>
              {r.bullets.map((b, k) => <li key={k} style={{ marginBottom: 4 }}>{b}</li>)}
            </ul>
          </Tile>
        ))}
      </div>
    </div>

    {/* Coursework */}
    <div style={{ marginTop: 56 }}>
      <div className="kicker">relevant coursework · UConn CSE</div>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 14 }}>
        {['Intro to Transformers', 'Machine Learning', 'Artificial Intelligence', 'AI for Software Engineering',
          'Software Engineering', 'Linear Algebra', 'Differential Equations', 'Multivariate Calculus',
          'Probability', 'Probability for Computing', 'Cloud Computing'].map(c => <Tag key={c}>{c}</Tag>)}
      </div>
    </div>
  </section>
);

Object.assign(window, { Research });
