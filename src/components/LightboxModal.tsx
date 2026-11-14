import React, { useEffect } from 'react';
import { CertificationItem } from '../data/portfolioData';

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'cert' | 'resume' | null;
  certData?: CertificationItem | null;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  onClose,
  type,
  certData,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      id="lightbox"
      className="lightbox active"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      role="dialog"
      aria-modal="true"
    >
      <button
        id="lightbox-close"
        className="lightbox-close"
        onClick={onClose}
        aria-label="Close dialog"
      >
        &times;
      </button>

      <div id="lightbox-content" className="lightbox-content">
        {type === 'resume' && (
          <div style={{ textAlign: 'center', padding: '20px' }}>
            <img
              src="/assets/SAHIL JAIN RESUME LATEST.jpg"
              alt="Sahil Jain Resume"
              style={{
                width: '100%',
                maxHeight: '74vh',
                objectFit: 'contain',
                display: 'block',
                borderRadius: 'var(--r-lg)',
                boxShadow: 'var(--shadow-md)',
                margin: '0 auto',
              }}
            />
            <div style={{ marginTop: '18px', display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
              <a
                href="/assets/SAHIL JAIN RESUME LATEST.jpg"
                download="Sahil_Jain_Resume.jpg"
                className="btn btn-p"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 26px' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download Resume
              </a>
            </div>
          </div>
        )}

        {type === 'cert' && certData && (
          <div style={{ textAlign: 'center', padding: '20px' }}>
            {certData.image ? (
              <img
                src={certData.image}
                alt={certData.title}
                style={{
                  width: '100%',
                  display: 'block',
                  borderRadius: 'var(--r-lg)',
                  objectFit: 'contain',
                  maxHeight: '72vh',
                  boxShadow: 'var(--shadow-md)',
                  margin: '0 auto',
                }}
              />
            ) : (
              <div style={{ padding: '32px', textAlign: 'center' }}>
                <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '22px', fontWeight: 700, marginBottom: '8px' }}>
                  {certData.title}
                </h2>
                <p style={{ color: 'var(--primary)', fontWeight: 600, marginBottom: '12px' }}>
                  {certData.org} • {certData.type}
                </p>
                <p style={{ color: 'var(--ink-3)', fontSize: '15px' }}>{certData.desc}</p>
              </div>
            )}
            <div style={{ marginTop: '16px' }}>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '18px', fontWeight: 700 }}>
                {certData.title}
              </h3>
              <p style={{ color: 'var(--ink-3)', fontSize: '14px', marginTop: '4px' }}>
                Issued by {certData.org} ({certData.type})
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
