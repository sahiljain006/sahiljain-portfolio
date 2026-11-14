import React from 'react';
import { SITE, CertificationItem } from '../data/portfolioData';

interface CertificationsSectionProps {
  onSelectCert: (cert: CertificationItem) => void;
}

export const CertificationsSection: React.FC<CertificationsSectionProps> = ({ onSelectCert }) => {
  return (
    <section className="sec" id="certifications" style={{ paddingTop: '50px' }}>
      <div
        className="sec-deco sec-deco-dots"
        style={{
          gridTemplateColumns: 'repeat(3,3px)',
          gap: '6px',
          top: '70px',
          left: '30px',
          opacity: 0.4,
        }}
      >
        <span /><span /><span /><span /><span /><span />
        <span /><span /><span />
      </div>
      <div
        className="sec-deco sec-deco-glow"
        style={{
          width: '150px',
          height: '150px',
          top: '30%',
          right: '-50px',
          background: 'rgba(236,72,153,0.07)',
        }}
      />

      <div className="sec-label reveal visible">Certifications</div>
      <h2 className="sec-title reveal visible reveal-d1">
        Credentials &amp;{' '}
        <span
          style={{
            background: 'var(--grad-warm)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Training
        </span>
      </h2>
      <p className="sec-desc reveal visible reveal-d2">
        Continuous learning is the foundation of growth — showing {SITE.certifications.length} featured credentials out of 15+ earned.
      </p>

      <div className="cert-scroll reveal visible reveal-d3" style={{ marginTop: '48px' }}>
        {SITE.certifications.map((c: CertificationItem, i: number) => (
          <div
            key={i}
            className="cert"
            onClick={() => onSelectCert(c)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onSelectCert(c);
              }
            }}
          >
            {c.image ? (
              <img src={c.image} alt={c.title} className="cert-bg-img" loading="lazy" />
            ) : null}
            <div className="cert-overlay">
              <div className="cert-title">{c.title}</div>
              <div className="cert-org-name">{c.org}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
