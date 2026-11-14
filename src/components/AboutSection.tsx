import React, { useEffect, useRef, useState } from 'react';
import { SITE, StatItem } from '../data/portfolioData';

interface StatCounterProps {
  stat: StatItem;
}

const StatCounter: React.FC<StatCounterProps> = ({ stat }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            let start = 0;
            const end = stat.number;
            const duration = 1800;
            const stepTime = Math.max(Math.floor(duration / end), 20);
            const timer = setInterval(() => {
              start += 1;
              setCount(start);
              if (start >= end) clearInterval(timer);
            }, stepTime);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [hasAnimated, stat.number]);

  return (
    <div className="stat" ref={elementRef}>
      <div className="stat-num" data-count={stat.number}>
        {count}
        {stat.suffix}
      </div>
      <div className="stat-label">{stat.label}</div>
    </div>
  );
};

export const AboutSection: React.FC = () => {
  return (
    <section className="sec" id="about" style={{ paddingTop: '50px' }}>
      <div
        className="sec-deco sec-deco-ring"
        style={{ width: '180px', height: '180px', top: '60px', right: '-80px', opacity: 0.4 }}
      />
      <div
        className="sec-deco sec-deco-glow"
        style={{
          width: '200px',
          height: '200px',
          top: '40%',
          left: '-60px',
          background: 'rgba(242,140,90,0.08)',
        }}
      />

      <div className="sec-label reveal visible">About</div>
      <h2 className="sec-title reveal visible reveal-d1">
        The Journey Behind
        <br />
        <span
          style={{
            background: 'var(--grad)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          the Code
        </span>
      </h2>
      <p className="sec-desc reveal visible reveal-d2">
        Every developer has a story. Here's mine — from first curiosity to building real products.
      </p>

      <div className="about-grid reveal visible reveal-d3">
        <div className="about-card about-main">
          <h3>What Drives Me</h3>
          <p>
            I believe technology is at its best when it solves real problems and creates meaningful experiences. Every project I take on is driven by curiosity, creativity, and a commitment to continuous improvement.
          </p>
          <p>
            I enjoy exploring new technologies, refining my skills, and turning ambitious ideas into practical digital solutions. My focus is not just on writing clean code, but on building products that are reliable, intuitive, and built to make a lasting impact. Every challenge is an opportunity to learn, innovate, and grow as a developer.
          </p>
        </div>

        <div className="about-stats">
          {SITE.stats.map((s, idx) => (
            <StatCounter key={idx} stat={s} />
          ))}
        </div>

        <div className="about-card about-edu">
          <h3>Education</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '16px', fontWeight: 600 }}>
              Bachelor of Computer Applications (BCA)
            </div>
            <div style={{ fontSize: '14px', color: 'var(--ink-3)' }}>
              Agurchand Manmull Jain College
            </div>
            <div style={{ fontSize: '13px', color: 'var(--primary)', fontWeight: 600 }}>
              2024 – 2027
            </div>
          </div>
        </div>

        <div className="about-timeline">
          <div style={{ position: 'relative', paddingLeft: '36px' }}>
            <div
              style={{
                position: 'absolute',
                left: '7px',
                top: 0,
                bottom: 0,
                width: '2px',
                background: 'var(--grad)',
                borderRadius: '2px',
              }}
            />
            {SITE.timeline.map((t, i) => (
              <div
                key={i}
                className={`reveal visible reveal-d${Math.min((i % 4) + 1, 4)}`}
                style={{ position: 'relative', paddingBottom: '30px' }}
              >
                <div
                  style={{
                    position: 'absolute',
                    left: '-36px',
                    top: '4px',
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.04)',
                    border: '3px solid var(--primary)',
                    zIndex: 2,
                    transition: 'all .35s var(--ease)',
                  }}
                />
                <div
                  style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    color: 'var(--primary)',
                    textTransform: 'uppercase',
                    letterSpacing: '.1em',
                    marginBottom: '4px',
                  }}
                >
                  {t.year}
                </div>
                <div
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '17px',
                    fontWeight: 600,
                    marginBottom: '4px',
                  }}
                >
                  {t.title}
                </div>
                <div style={{ fontSize: '14px', color: 'var(--ink-3)', lineHeight: '1.65' }}>
                  {t.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
