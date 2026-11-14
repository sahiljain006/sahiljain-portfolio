import React, { useState } from 'react';
import { SITE, ProjectItem } from '../data/portfolioData';

export const ProjectsSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const r = card.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * 100;
    const y = ((e.clientY - r.top) / r.height) * 100;
    card.style.setProperty('--mouse-x', `${x}%`);
    card.style.setProperty('--mouse-y', `${y}%`);
  };

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="sec" id="projects" style={{ paddingTop: '50px' }}>
      <div
        className="sec-deco sec-deco-ring"
        style={{ width: '220px', height: '220px', top: '-40px', left: '-100px', opacity: 0.3 }}
      />
      <div
        className="sec-deco sec-deco-glow"
        style={{
          width: '180px',
          height: '180px',
          bottom: '10%',
          right: '-60px',
          background: 'rgba(124,92,252,0.07)',
        }}
      />

      <div className="sec-label reveal visible">Projects</div>
      <h2 className="sec-title reveal visible reveal-d1">
        Things I've{' '}
        <span
          style={{
            background: 'var(--grad)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Built
        </span>
      </h2>
      <p className="sec-desc reveal visible reveal-d2">
        Showing {SITE.projects.length} featured builds from 10+ projects shipped across AI, full-stack systems, and client web experiences.
      </p>

      <div className="projects-list" style={{ marginTop: '48px' }}>
        {SITE.projects.map((p: ProjectItem, i: number) => {
          const isExpanded = expandedId === p.id;
          return (
            <div
              key={p.id}
              className={`proj reveal visible reveal-d${Math.min((i % 2) + 1, 2)}`}
              onMouseMove={handleMouseMove}
            >
              <div className="proj-grid">
                <div className="proj-visual" style={{ background: p.mockGrad }}>
                  <span className={`proj-badge ${p.badge}`}>
                    {p.badge === 'ai' ? 'AI' : p.badge === 'fs' ? 'Full Stack' : 'Web'}
                  </span>
                  {p.image ? (
                    <img src={p.image} alt={p.title} className="proj-screenshot" loading="lazy" />
                  ) : (
                    <div className="proj-mockup">
                      <div className="proj-mockup-bar">
                        <span className="proj-mockup-dot" />
                        <span className="proj-mockup-dot" />
                        <span className="proj-mockup-dot" />
                      </div>
                      <div className="proj-mockup-body">
                        <div style={{ height: '7px', borderRadius: '4px', background: 'rgba(255,255,255,0.06)', width: '70%' }} />
                        <div style={{ height: '7px', borderRadius: '4px', background: 'rgba(255,255,255,0.06)', width: '100%' }} />
                        <div
                          style={{
                            height: '52px',
                            borderRadius: 'var(--r-sm)',
                            background: 'linear-gradient(135deg,rgba(184,173,255,0.12),rgba(253,164,175,0.08),rgba(153,246,228,0.06))',
                          }}
                        />
                        <div style={{ height: '7px', borderRadius: '4px', background: 'rgba(255,255,255,0.06)', width: '50%' }} />
                        <div style={{ height: '7px', borderRadius: '4px', background: 'rgba(255,255,255,0.06)', width: '85%' }} />
                      </div>
                    </div>
                  )}
                </div>

                <div className="proj-info">
                  <h3 className="proj-title">{p.title}</h3>
                  <div className="proj-sub">{p.sub}</div>
                  <p className="proj-desc">{p.desc}</p>

                  {isExpanded && (
                    <div
                      style={{
                        margin: '12px 0',
                        padding: '14px',
                        borderRadius: 'var(--r-sm)',
                        background: 'rgba(24,21,42,0.03)',
                        border: '1px solid var(--border)',
                        fontSize: '13px',
                      }}
                    >
                      <div style={{ marginBottom: '8px' }}>
                        <strong style={{ color: 'var(--accent)' }}>Challenge: </strong>
                        <span style={{ color: 'var(--ink-2)' }}>{p.problem}</span>
                      </div>
                      <div style={{ marginBottom: '8px' }}>
                        <strong style={{ color: 'var(--primary)' }}>Solution: </strong>
                        <span style={{ color: 'var(--ink-2)' }}>{p.solution}</span>
                      </div>
                      <div>
                        <strong style={{ color: 'var(--soft-green)' }}>Key Highlights: </strong>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '6px' }}>
                          {p.features.map((f, fIdx) => (
                            <span
                              key={fIdx}
                              style={{
                                fontSize: '11px',
                                background: 'rgba(79,110,247,0.08)',
                                color: 'var(--primary)',
                                padding: '3px 8px',
                                borderRadius: 'var(--r-xs)',
                              }}
                            >
                              ✓ {f}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="proj-stack">
                    {p.stack.map((s, idx) => (
                      <span key={idx}>{s}</span>
                    ))}
                  </div>

                  <div className="proj-btns" style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
                    {p.demoUrl && (
                      <a
                        href={p.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="proj-btn primary"
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                        Visit Live Site
                      </a>
                    )}
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`proj-btn ${p.demoUrl ? 'secondary' : 'primary'}`}
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        Code
                      </a>
                    )}
                    <button
                      type="button"
                      className="proj-btn secondary"
                      onClick={() => toggleExpand(p.id)}
                    >
                      {isExpanded ? 'Less Details ↑' : 'Case Study Details ↓'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
