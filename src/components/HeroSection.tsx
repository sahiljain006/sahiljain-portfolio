import React, { useEffect, useRef, useState } from 'react';
import { SITE } from '../data/portfolioData';

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const heroImgRef = useRef<HTMLDivElement>(null);

  // Typewriter effect
  useEffect(() => {
    const currentRole = SITE.roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && typedText.length < currentRole.length) {
      timeout = setTimeout(() => {
        setTypedText(currentRole.slice(0, typedText.length + 1));
      }, 70);
    } else if (!isDeleting && typedText.length === currentRole.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && typedText.length > 0) {
      timeout = setTimeout(() => {
        setTypedText(currentRole.slice(0, typedText.length - 1));
      }, 35);
    } else if (isDeleting && typedText.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % SITE.roles.length);
    }

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, roleIndex]);

  // Mouse tilt on hero avatar (clamped for smooth subtle parallax)
  useEffect(() => {
    const heroImg = heroImgRef.current;
    if (!heroImg) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = heroImg.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      if (Math.abs(e.clientY - centerY) > 520) {
        heroImg.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
        return;
      }
      const rawX = ((e.clientX - centerX) / rect.width) * 14;
      const rawY = ((e.clientY - centerY) / rect.height) * 14;
      const x = Math.max(-8, Math.min(8, rawX));
      const y = Math.max(-8, Math.min(8, rawY));
      heroImg.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg)`;
    };

    const handleMouseLeave = () => {
      heroImg.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
    };

    window.addEventListener('mousemove', handleMouseMove);
    heroImg.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      heroImg.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="hero-blob hero-blob-3" />
        <div className="hero-line" />
        <div className="hero-line" />
        <div className="hero-deco">
          <div className="hero-deco-shape s1" />
          <div className="hero-deco-shape s2" />
          <div className="hero-deco-shape s3" />
          <div className="hero-deco-shape s4" />
          <div className="hero-deco-shape s5" />
          <div className="hero-deco-shape s6" />
          <div className="hero-deco-shape s7" />
          <div className="hero-deco-bracket b1">&#123;</div>
          <div className="hero-deco-bracket b2">&#125;</div>
          <div className="hero-deco-dots d1">
            <span /><span /><span /><span /><span /><span /><span /><span /><span />
          </div>
          <div className="hero-deco-dots d2">
            <span /><span /><span /><span /><span /><span /><span /><span /><span />
          </div>
          <div className="hero-deco-ring r1" />
          <div className="hero-deco-ring r2" />
          <div className="hero-deco-line l1" />
          <div className="hero-deco-line l2" />
        </div>
      </div>

      <div className="hero-grid">
        <div className="hero-content">
          <h1 className="hero-h1">
            <span className="hero-hello reveal visible reveal-d1">Hello! I'm</span>
            <span className="grad reveal visible reveal-d2">SAHIL JAIN</span>
          </h1>

          <p className="hero-tagline reveal visible reveal-d2">
            Building Intelligent Digital Experiences.
          </p>

          <div className="hero-typing reveal visible reveal-d3">
            <span>&amp;</span>
            <span className="typed" id="typed-role">
              {typedText}
            </span>
            <span className="blink" />
          </div>

          <p className="hero-desc reveal visible reveal-d4">
            Passionate about transforming ideas into meaningful digital products, I build modern web applications with clean architecture, seamless user experiences, and a strong focus on performance, innovation &amp; real-world impact.
          </p>

          <div className="hero-btns reveal visible reveal-d4">
            <a
              href="#projects"
              className="btn btn-p"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('projects');
              }}
            >
              Explore My Work{' '}
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10m0 0L9 4m4 4L9 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href="#contact"
              className="btn btn-s"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('contact');
              }}
            >
              Get in Touch
            </a>
          </div>
        </div>

        <div className="hero-visual reveal visible">
          <div className="hero-img-wrap" id="hero-img" ref={heroImgRef}>
            <div className="hero-img-glow" />
            <div className="hero-img-frame">
              <div className="hero-img-inner">
                <img
                  src="/assets/SAHIL PROFILE.jpg"
                  alt="Sahil Jain"
                  className="hero-avatar-img"
                  loading="eager"
                />
              </div>
            </div>

            <div className="hero-floats">
              <div className="hero-float f1 hero-float-speciality">
                <div className="hero-float-icon" style={{ background: 'var(--primary-50)', color: 'var(--primary)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 2 7 12 12 22 7 12 2" />
                    <polyline points="2 17 12 22 22 17" />
                    <polyline points="2 12 12 17 22 12" />
                  </svg>
                </div>
                <div className="hero-float-text">
                  <span className="hero-float-label">Speciality</span>
                  <span className="hero-float-value">Full Stack &amp; AI</span>
                  <span className="hero-float-sub">Frontend · Backend Systems</span>
                </div>
              </div>

              <div className="hero-float f2">
                <div className="hero-float-icon" style={{ background: 'var(--cyan-50)', color: 'var(--sky)' }}>
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                </div>
                <div className="hero-float-text">
                  <span className="hero-float-label">Primary</span>
                  <span className="hero-float-value">Python Developer</span>
                </div>
              </div>

              <div className="hero-float f3">
                <div className="hero-float-icon" style={{ background: 'var(--soft-green-50)', color: 'var(--emerald)' }}>
                  <span className="hero-status-dot" />
                </div>
                <div className="hero-float-text">
                  <span className="hero-float-label">Status</span>
                  <span className="hero-float-value">Open to Work</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
