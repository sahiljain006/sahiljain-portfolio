import React from 'react';
import { SITE, AchievementItem } from '../data/portfolioData';

export const AchievementsSection: React.FC = () => {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const r = card.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * 100;
    const y = ((e.clientY - r.top) / r.height) * 100;
    card.style.setProperty('--mouse-x', `${x}%`);
    card.style.setProperty('--mouse-y', `${y}%`);
  };

  return (
    <section className="sec" id="achievements" style={{ paddingTop: '50px' }}>
      <div
        className="sec-deco sec-deco-ring"
        style={{ width: '160px', height: '160px', top: '40px', right: '-60px', opacity: 0.35 }}
      />
      <div
        className="sec-deco sec-deco-glow"
        style={{
          width: '140px',
          height: '140px',
          bottom: '15%',
          left: '-40px',
          background: 'rgba(16,185,129,0.07)',
        }}
      />

      <div className="sec-label reveal visible">Achievements</div>
      <h2 className="sec-title reveal visible reveal-d1">
        Milestones &amp;{' '}
        <span
          style={{
            background: 'var(--grad-cool)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Wins
        </span>
      </h2>
      <p className="sec-desc reveal visible reveal-d2">
        Every achievement marks a challenge overcome and a lesson learned.
      </p>

      <div className="achieve-grid" style={{ marginTop: '48px' }}>
        {SITE.achievements.map((a: AchievementItem, i: number) => (
          <div
            key={i}
            className={`achieve reveal visible reveal-d${Math.min((i % 4) + 1, 4)}`}
            onMouseMove={handleMouseMove}
          >
            <div className="achieve-icon">{a.icon}</div>
            <div className="achieve-title">{a.title}</div>
            <div className="achieve-desc">{a.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
