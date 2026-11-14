import React, { useState } from 'react';
import { SITE, SkillCategory, SkillItem } from '../data/portfolioData';

// Dedicated tech icons for high fidelity
const TechIcon: React.FC<{ name: string }> = ({ name }) => {
  switch (name.toLowerCase()) {
    case 'html':
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
          <path d="M4 2l1.5 18L12 22l6.5-2L20 2H4z" fill="#E44D26" />
          <path d="M12 2v20l5.5-1.5L19.5 4 12 2z" fill="#F16529" />
          <path d="M12 7.5l-.3 3.2 5.5.1-.5 5.7L12 18l-4.7-1.5.3-3.5H5l-.8 8.5L12 22" fill="#FFFFFF" />
        </svg>
      );
    case 'css':
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
          <path d="M4 2l1.5 18L12 22l6.5-2L20 2H4z" fill="#1572B6" />
          <path d="M12 2v20l5.5-1.5L19.5 4 12 2z" fill="#33A9DC" />
          <path d="M12 7.5l-.3 3.2 5.5.1-.5 5.7L12 18l-4.7-1.5.3-3.5H5l-.8 8.5L12 22" fill="#FFFFFF" />
        </svg>
      );
    case 'javascript':
      return (
        <svg viewBox="0 0 24 24" width="18" height="18">
          <rect width="24" height="24" rx="3" fill="#F7DF1E" />
          <path
            fill="#000000"
            d="M6.29 20.14l1.94-1.15c.4.7.93 1.3 1.6 1.8.66.48 1.38.72 2.16.72.82 0 1.46-.25 1.93-.74.47-.5.7-1.16.7-2 0-.52-.13-.96-.39-1.33-.26-.37-.62-.68-1.08-.93l-.37-.18c-.27-.13-.46-.26-.56-.38-.11-.13-.16-.27-.16-.42 0-.15.06-.28.17-.39.11-.11.26-.17.45-.17.27 0 .5.09.68.27l.78 1c.38.5.86.89 1.44 1.17.58.28 1.2.42 1.86.42 1.06 0 1.89-.31 2.48-.94.6-.63.89-1.47.89-2.53 0-.75-.21-1.39-.64-1.91-.42-.52-1-.95-1.7-1.28l-.42-.2c-.28-.13-.5-.26-.66-.38-.16-.13-.24-.27-.24-.42 0-.16.07-.3.2-.42.14-.12.32-.18.54-.18.4 0 .73.12 1 .36l.68.84c.52.65 1.15 1.16 1.9 1.53.74.37 1.54.56 2.39.56 1.12 0 2-.31 2.63-.92.63-.62.94-1.46.94-2.54 0-.76-.21-1.42-.63-1.97-.42-.55-1-.99-1.68-1.33-.68-.34-1.44-.51-2.28-.51-1.08 0-2.04.31-2.88.93-.84.62-1.34 1.4-1.5 2.34l-1.96-.34c.28-1.4 1.06-2.55 2.34-3.44 1.28-.89 2.76-1.34 4.44-1.34 1.22 0 2.34.22 3.35.65 1.01.44 1.83 1.04 2.46 1.82.63.78.95 1.68.95 2.72 0 .78-.2 1.48-.6 2.1-.4.62-.94 1.15-1.62 1.59-.68.44-1.46.76-2.33.96-.87.2-1.76.3-2.68.3-1.1 0-2.12-.18-3.06-.53-.94-.35-1.74-.87-2.4-1.56l-1.72 1.02z"
          />
        </svg>
      );
    case 'react.js':
    case 'react':
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#00D8FF" strokeWidth="1.5" />
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#00D8FF" strokeWidth="1.5" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#00D8FF" strokeWidth="1.5" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="2" fill="#00D8FF" />
        </svg>
      );
    case 'python':
      return (
        <svg viewBox="0 0 24 24" width="18" height="18">
          <path
            fill="#3776AB"
            d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.007 2.752h5.814v.828H3.9S0 5.789 0 11.969c0 6.18 3.394 5.98 3.394 5.98h2.01v-2.866s-.108-3.394 3.34-3.394h5.766s3.234.052 3.234-3.128V3.254S18.13 0 11.914 0zM8.708 1.84a1.052 1.052 0 011.052 1.052 1.052 1.052 0 01-1.052 1.052A1.052 1.052 0 017.656 2.892 1.052 1.052 0 018.708 1.84z"
          />
          <path
            fill="#FFD43B"
            d="M12.086 24c6.094 0 5.714-2.656 5.714-2.656l-.007-2.752h-5.814v-.828h8.121S24 18.211 24 12.031c0-6.18-3.394-5.98-3.394-5.98h-2.01v2.866s.108 3.394-3.34 3.394h-5.766s-3.234-.052-3.234 3.128v5.334S5.87 24 12.086 24zm3.206-1.84a1.052 1.052 0 01-1.052-1.052 1.052 1.052 0 011.052-1.052 1.052 1.052 0 011.052 1.052 1.052 1.052 0 01-1.052 1.052z"
          />
        </svg>
      );
    case 'sqlite':
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
          <ellipse cx="12" cy="5" rx="8" ry="3" fill="#003B57" />
          <path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5" stroke="#003B57" strokeWidth="1.8" />
          <ellipse cx="12" cy="12" rx="8" ry="2.5" fill="#3B82F6" opacity="0.3" stroke="#003B57" strokeWidth="1.5" />
          <ellipse cx="12" cy="19" rx="8" ry="2.5" fill="#0EA5E9" opacity="0.4" stroke="#003B57" strokeWidth="1.5" />
        </svg>
      );
    case 'mysql':
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
          <ellipse cx="12" cy="6" rx="9" ry="3" stroke="#00758F" strokeWidth="2" />
          <path d="M3 6v12c0 1.66 4 3 9 3s9-1.34 9-3V6" stroke="#00758F" strokeWidth="2" />
          <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" stroke="#F29111" strokeWidth="2" />
        </svg>
      );
    case 'rest apis':
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 6h16M4 12h10M4 18h14" />
          <circle cx="20" cy="12" r="2" fill="#FF6B35" />
          <circle cx="16" cy="18" r="2" fill="#FF6B35" />
        </svg>
      );
    case 'django framework':
    case 'django':
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="#092E20">
          <path d="M11.146 0h4.225v16.326c-1.371.493-2.923.754-4.225.754-5.26 0-7.868-2.608-7.868-7.462 0-4.636 2.807-7.854 7.868-7.854zm0 3.738c-2.839 0-4.041 1.681-4.041 4.318 0 2.666 1.188 4.347 4.041 4.347.884 0 1.768-.13 2.376-.391V3.97c-.608-.145-1.42-.232-2.376-.232zM17.159 0h4.225v23.277h-4.225V0z" />
        </svg>
      );
    case 'github':
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      );
    case 'vs code':
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="#007ACC">
          <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.27a.997.997 0 0 0-.005 1.415L4.54 12 .322 15.315a.997.997 0 0 0 .005 1.415l1.322 1.211a1 1 0 0 0 1.276.058l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.94-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zM18 16.66l-6.007-4.66L18 7.34v9.32z" />
        </svg>
      );
    case 'canva':
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
          <circle cx="12" cy="12" r="11" fill="url(#canvaGrad)" />
          <path
            d="M14.5 13.8c-.8.6-1.8.9-2.7.9-2.5 0-4.1-1.8-4.1-4.2 0-2.6 1.9-4.5 4.6-4.5 1.1 0 2 .3 2.6.8l-.8 1.4c-.5-.4-1.1-.6-1.8-.6-1.6 0-2.7 1.2-2.7 2.8 0 1.5 1 2.6 2.5 2.6.6 0 1.2-.2 1.7-.5l.7 1.3z"
            fill="#FFFFFF"
          />
          <defs>
            <linearGradient id="canvaGrad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00C4CC" />
              <stop offset="1" stopColor="#7D2AE8" />
            </linearGradient>
          </defs>
        </svg>
      );
    case 'ms office':
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
          <rect x="2" y="2" width="9" height="9" rx="1.5" fill="#F25022" />
          <rect x="13" y="2" width="9" height="9" rx="1.5" fill="#7FBA00" />
          <rect x="2" y="13" width="9" height="9" rx="1.5" fill="#00A4EF" />
          <rect x="13" y="13" width="9" height="9" rx="1.5" fill="#FFB900" />
        </svg>
      );
    case 'chatgpt':
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="#10A37F">
          <path d="M22.28 9.37a5.98 5.98 0 0 0-.52-4.99 6.07 6.07 0 0 0-6.47-2.82 6.07 6.07 0 0 0-4.52-2.06c-3.1 0-5.69 2.32-6.01 5.37a5.98 5.98 0 0 0-3.9 2.86 6.07 6.07 0 0 0 .76 7.02 5.98 5.98 0 0 0 .52 4.99 6.07 6.07 0 0 0 6.47 2.82 6.07 6.07 0 0 0 4.52 2.06c3.1 0 5.69-2.32 6.01-5.37a5.98 5.98 0 0 0 3.9-2.86 6.07 6.07 0 0 0-.76-7.02zm-8.86 12.87a4.26 4.26 0 0 1-2.61-.88l.13-.08 4.34-2.5a.9.9 0 0 0 .45-.78v-6.13l1.84 1.06v5.06a4.28 4.28 0 0 1-4.15 4.25zm-8.52-4.22a4.24 4.24 0 0 1-.5-2.71l.13.08 4.34 2.5a.9.9 0 0 0 .9 0l5.31-3.07v2.13l-4.38 2.53a4.28 4.28 0 0 1-5.8-1.46zm-1.8-9.45a4.25 4.25 0 0 1 2.11-1.83v5.17a.9.9 0 0 0 .45.78l5.31 3.07-1.84 1.06-4.38-2.53a4.28 4.28 0 0 1-1.65-5.72zm15.1 3.42l-5.31-3.07 1.84-1.06 4.38 2.53a4.28 4.28 0 0 1 1.65 5.72 4.25 4.25 0 0 1-2.11 1.83v-5.17a.9.9 0 0 0-.45-.78zm2.3 5.48l-.13-.08-4.34-2.5a.9.9 0 0 0-.9 0l-5.31 3.07v-2.13l4.38-2.53a4.28 4.28 0 0 1 5.8 1.46 4.24 4.24 0 0 1 .5 2.71zm-9.74-5.35l2.42-1.4 2.42 1.4v2.8l-2.42 1.4-2.42-1.4v-2.8z" />
        </svg>
      );
    case 'gemini':
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
          <path
            d="M12 0C12 6.627 6.627 12 0 12c6.627 0 12 5.373 12 12 0-6.627 5.373-12 12-12-6.627 0-12-5.373-12-12z"
            fill="url(#geminiGrad)"
          />
          <defs>
            <linearGradient id="geminiGrad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
              <stop stopColor="#1BA1E3" />
              <stop offset="0.5" stopColor="#5B73E8" />
              <stop offset="1" stopColor="#D96570" />
            </linearGradient>
          </defs>
        </svg>
      );
    case 'claude':
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
          <circle cx="12" cy="12" r="11" fill="#D97706" opacity="0.15" />
          <path
            d="M12 4.5c4.142 0 7.5 3.358 7.5 7.5s-3.358 7.5-7.5 7.5-7.5-3.358-7.5-7.5 3.358-7.5 7.5-7.5zm0 3c-2.485 0-4.5 2.015-4.5 4.5s2.015 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.015-4.5-4.5-4.5z"
            fill="#D97706"
          />
        </svg>
      );
    case 'prompt engineering':
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 4V2m0 16v-2M8 9h2m10 0h2m-4.2 2.8l1.4 1.4M18.8 5.2l-1.4 1.4M6.2 17.8l-1.4-1.4M4.8 6.2l1.4 1.4" />
          <circle cx="14" cy="9" r="3" fill="#8B5CF6" />
          <path d="M4 20l7-7" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
  }
};

// Category header icon
const CategoryHeaderIcon: React.FC<{ iconName: string; accentColor?: string }> = ({ iconName, accentColor }) => {
  switch (iconName) {
    case 'web':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke={accentColor || '#0EA5E9'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      );
    case 'backend':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke={accentColor || '#10B981'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
      );
    case 'tool':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke={accentColor || '#F28C5A'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      );
    case 'sparkles':
    default:
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke={accentColor || '#7C5CFC'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3v3m0 12v3M3 12h3m12 0h3M5.6 5.6l2.2 2.2m8.4 8.4l2.2 2.2M5.6 18.4l2.2-2.2m8.4-8.4l2.2-2.2" />
        </svg>
      );
  }
};

export const SkillsSection: React.FC = () => {
  const [activeItemName, setActiveItemName] = useState<string | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const r = card.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * 100;
    const y = ((e.clientY - r.top) / r.height) * 100;
    card.style.setProperty('--mouse-x', `${x}%`);
    card.style.setProperty('--mouse-y', `${y}%`);
  };

  return (
    <section className="sec" id="skills" style={{ paddingTop: '50px' }}>
      <div
        className="sec-deco sec-deco-dots"
        style={{
          gridTemplateColumns: 'repeat(4,3px)',
          gap: '7px',
          top: '80px',
          right: '40px',
          opacity: 0.5,
        }}
      >
        <span /><span /><span /><span /><span /><span />
        <span /><span /><span /><span /><span /><span />
      </div>
      <div
        className="sec-deco sec-deco-glow"
        style={{
          width: '160px',
          height: '160px',
          bottom: '20%',
          right: '-40px',
          background: 'rgba(79,110,247,0.07)',
        }}
      />

      <div className="sec-label reveal visible">Skills</div>
      <h2 className="sec-title reveal visible reveal-d1">
        Technical{' '}
        <span
          style={{
            background: 'var(--grad)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Toolkit
        </span>
      </h2>
      <p className="sec-desc reveal visible reveal-d2">
        A structured overview of the modern programming languages, frameworks, developer workflows, and AI tooling I apply to engineer scalable digital products.
      </p>

      {/* 2x2 Clean Grid for the 4 Dedicated Categories */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
          marginTop: '48px',
        }}
      >
        {SITE.skills.map((cat: SkillCategory, i: number) => (
          <div
            key={i}
            className={`skill-cat reveal visible reveal-d${Math.min((i % 4) + 1, 4)}`}
            onMouseMove={handleMouseMove}
            style={{
              padding: '28px',
              borderRadius: 'var(--r-xl)',
              background: 'linear-gradient(145deg, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.72) 100%)',
              border: '1px solid rgba(24,21,42,0.08)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <div>
              {/* Category Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '18px',
                  paddingBottom: '14px',
                  borderBottom: '1px solid rgba(24,21,42,0.06)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div
                    className="skill-cat-icon"
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      background: cat.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: `0 4px 14px ${cat.color}`,
                    }}
                  >
                    <CategoryHeaderIcon iconName={cat.iconName} accentColor={cat.accentColor} />
                  </div>
                  <div>
                    <h3
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: '18px',
                        fontWeight: 700,
                        color: 'var(--ink)',
                        margin: 0,
                      }}
                    >
                      {cat.title}
                    </h3>
                    <span
                      style={{
                        fontSize: '12px',
                        fontWeight: 600,
                        color: cat.accentColor || 'var(--primary)',
                      }}
                    >
                      {cat.badge || `${cat.items.length} Technologies`}
                    </span>
                  </div>
                </div>

                <span
                  style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.05em',
                    padding: '3px 10px',
                    borderRadius: '20px',
                    background: 'rgba(24,21,42,0.04)',
                    color: 'var(--ink-3)',
                  }}
                >
                  {cat.items.length} Skills
                </span>
              </div>

              {/* Skills Interactive List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {cat.items.map((s: SkillItem, idx: number) => {
                  const isActive = activeItemName === s.name;
                  return (
                    <div
                      key={idx}
                      onMouseEnter={() => setActiveItemName(s.name)}
                      onMouseLeave={() => setActiveItemName(null)}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '12px',
                        padding: '10px 14px',
                        borderRadius: 'var(--r-sm)',
                        background: isActive ? 'rgba(255,255,255,0.98)' : 'rgba(255,255,255,0.5)',
                        border: isActive
                          ? `1px solid ${cat.accentColor || 'var(--primary)'}`
                          : '1px solid rgba(24,21,42,0.04)',
                        boxShadow: isActive ? '0 4px 16px rgba(24,21,42,0.06)' : 'none',
                        transform: isActive ? 'translateX(4px)' : 'none',
                        transition: 'all 0.25s var(--ease)',
                        cursor: 'default',
                      }}
                    >
                      <div
                        style={{
                          marginTop: '2px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '26px',
                          height: '26px',
                          borderRadius: '6px',
                          background: 'rgba(255,255,255,0.9)',
                          flexShrink: 0,
                          boxShadow: '0 1px 4px rgba(24,21,42,0.08)',
                        }}
                      >
                        <TechIcon name={s.name} />
                      </div>

                      <div style={{ flex: 1 }}>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                          }}
                        >
                          <span
                            style={{
                              fontFamily: "'Space Grotesk', sans-serif",
                              fontSize: '14px',
                              fontWeight: 700,
                              color: 'var(--ink)',
                            }}
                          >
                            {s.name}
                          </span>
                        </div>
                        <p
                          style={{
                            fontSize: '12px',
                            color: 'var(--ink-3)',
                            margin: '2px 0 0 0',
                            lineHeight: 1.4,
                          }}
                        >
                          {s.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Category Highlights Tag Bar */}
            <div
              style={{
                marginTop: '18px',
                paddingTop: '12px',
                borderTop: '1px dashed rgba(24,21,42,0.08)',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '6px',
              }}
            >
              {cat.items.map((s, idx) => (
                <span
                  key={idx}
                  style={{
                    fontSize: '11px',
                    fontWeight: 600,
                    padding: '3px 8px',
                    borderRadius: '6px',
                    background: cat.color,
                    color: cat.accentColor || 'var(--ink-2)',
                  }}
                >
                  #{s.name.replace(/\s+/g, '')}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
