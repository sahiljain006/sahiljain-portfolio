import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [smoothOuter, setSmoothOuter] = useState({ x: -100, y: -100 });
  const [smoothGlow, setSmoothGlow] = useState({ x: -100, y: -100 });
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouch(true);
      return;
    }

    let targetX = -100;
    let targetY = -100;
    let outerX = -100;
    let outerY = -100;
    let glowX = -100;
    let glowY = -100;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      setPos({ x: targetX, y: targetY });
    };

    let animId: number;
    const loop = () => {
      outerX += (targetX - outerX) * 0.25;
      outerY += (targetY - outerY) * 0.25;
      glowX += (targetX - glowX) * 0.15;
      glowY += (targetY - glowY) * 0.15;
      setSmoothOuter({ x: outerX, y: outerY });
      setSmoothGlow({ x: glowX, y: glowY });
      animId = requestAnimationFrame(loop);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;
      if (target.closest('a, button, .proj, .cert, .achieve, .skill-tag, .stat, .nav-link, .gallery-item')) {
        document.body.classList.add('cursor-hover');
      }
      if (target.matches('input, textarea')) {
        document.body.classList.add('cursor-text');
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;
      if (target.closest('a, button, .proj, .cert, .achieve, .skill-tag, .stat, .nav-link, .gallery-item')) {
        document.body.classList.remove('cursor-hover');
      }
      if (target.matches('input, textarea')) {
        document.body.classList.remove('cursor-text');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    animId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      cancelAnimationFrame(animId);
      document.body.classList.remove('cursor-hover', 'cursor-text');
    };
  }, []);

  if (isTouch) return null;

  return (
    <>
      <div
        id="cursor-outer"
        className="cursor-ring"
        style={{
          transform: `translate(${smoothOuter.x - 20}px, ${smoothOuter.y - 20}px)`,
        }}
      />
      <div
        id="cursor-inner"
        className="cursor-dot"
        style={{
          transform: `translate(${pos.x - 3}px, ${pos.y - 3}px)`,
        }}
      />
      <div
        id="cursor-glow"
        className="cursor-glow"
        style={{
          transform: `translate(${smoothGlow.x - 80}px, ${smoothGlow.y - 80}px)`,
        }}
      />
    </>
  );
};
