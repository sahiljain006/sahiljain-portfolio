import React from 'react';

interface ResumeSectionProps {
  onOpenPreview: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenPreview }) => {
  return (
    <section className="sec" id="resume" style={{ paddingTop: '50px' }}>
      <div
        className="sec-deco sec-deco-dots"
        style={{
          gridTemplateColumns: 'repeat(3,3px)',
          gap: '6px',
          top: '60px',
          right: '50px',
          opacity: 0.4,
        }}
      >
        <span /><span /><span /><span /><span /><span />
        <span /><span /><span />
      </div>
      <div
        className="sec-deco sec-deco-glow"
        style={{
          width: '160px',
          height: '160px',
          top: '35%',
          left: '-50px',
          background: 'rgba(245,158,11,0.07)',
        }}
      />

      <div className="sec-label reveal visible">Resume</div>
      <h2 className="sec-title reveal visible reveal-d1">
        My{' '}
        <span
          style={{
            background: 'var(--grad-warm)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Resume
        </span>
      </h2>
      <p className="sec-desc reveal visible reveal-d2">
        A concise overview of my projects, technical expertise, experience, and achievements.
      </p>

      <div className="resume-card reveal visible reveal-d3" style={{ marginTop: '48px' }}>
        <div className="resume-card-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <polyline points="10 9 9 9 8 9" />
          </svg>
        </div>
        <div className="resume-card-content">
          <div className="resume-card-top">
            <h3 className="resume-card-name">Sahil Jain</h3>
            <span className="resume-card-badge">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              Updated: October 2026
            </span>
          </div>
          <div className="resume-card-actions">
            <a
              href="/assets/SAHIL JAIN RESUME LATEST.jpg"
              download="Sahil_Jain_Resume.jpg"
              className="resume-btn resume-btn-primary"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Resume
            </a>
            <button
              type="button"
              className="resume-btn resume-btn-secondary"
              onClick={onOpenPreview}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              Preview Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
