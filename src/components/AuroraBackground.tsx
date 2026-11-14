import React, { useEffect, useRef } from 'react';

export const AuroraBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    let mx = 0.5;
    let my = 0.5;
    let scrollY = window.scrollY;

    const blobs = [
      { x: 0.2, y: 0.3, r: 280, color: [79, 110, 247], vx: 0.0003, vy: 0.0002, phase: 0 },
      { x: 0.75, y: 0.2, r: 240, color: [242, 140, 90], vx: -0.00025, vy: 0.0003, phase: 1.5 },
      { x: 0.5, y: 0.65, r: 260, color: [124, 92, 252], vx: 0.0002, vy: -0.00025, phase: 3 },
      { x: 0.85, y: 0.7, r: 200, color: [16, 185, 129], vx: -0.0003, vy: 0.0002, phase: 4.5 },
      { x: 0.15, y: 0.8, r: 220, color: [236, 72, 153], vx: 0.00025, vy: -0.0003, phase: 2 },
      { x: 0.6, y: 0.15, r: 180, color: [14, 165, 233], vx: 0.0002, vy: 0.00025, phase: 5 },
    ];

    const handleResize = () => {
      if (!canvas) return;
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mx = e.clientX / (w || 1);
      my = e.clientY / (h || 1);
    };

    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });

    let t = 0;
    const draw = () => {
      t += 0.008;
      ctx.clearRect(0, 0, w, h);

      blobs.forEach((b) => {
        const px = (b.x + Math.sin(t + b.phase) * 0.08 + (mx - 0.5) * 0.04) * w;
        const py = (b.y + Math.cos(t * 0.7 + b.phase) * 0.06 + (my - 0.5) * 0.03) * h - scrollY * 0.02;
        const grad = ctx.createRadialGradient(px, py, 0, px, py, b.r);
        grad.addColorStop(0, `rgba(${b.color[0]},${b.color[1]},${b.color[2]},0.12)`);
        grad.addColorStop(0.4, `rgba(${b.color[0]},${b.color[1]},${b.color[2]},0.06)`);
        grad.addColorStop(1, `rgba(${b.color[0]},${b.color[1]},${b.color[2]},0)`);
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, w, h);
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Ambient particles
  const particles = [
    { left: '8%', size: 3.5, color: 'rgba(79,110,247,0.5)', glow: 'rgba(79,110,247,0.25)', dur: '18s', delay: '1s' },
    { left: '22%', size: 2.5, color: 'rgba(124,92,252,0.45)', glow: 'rgba(124,92,252,0.22)', dur: '24s', delay: '4s' },
    { left: '35%', size: 4.0, color: 'rgba(236,72,153,0.4)', glow: 'rgba(236,72,153,0.2)', dur: '16s', delay: '7s' },
    { left: '48%', size: 3.0, color: 'rgba(16,185,129,0.4)', glow: 'rgba(16,185,129,0.2)', dur: '22s', delay: '2s' },
    { left: '62%', size: 4.5, color: 'rgba(242,140,90,0.4)', glow: 'rgba(242,140,90,0.2)', dur: '20s', delay: '9s' },
    { left: '74%', size: 2.0, color: 'rgba(14,165,233,0.4)', glow: 'rgba(14,165,233,0.2)', dur: '26s', delay: '5s' },
    { left: '88%', size: 3.8, color: 'rgba(245,158,11,0.35)', glow: 'rgba(245,158,11,0.18)', dur: '19s', delay: '11s' },
    { left: '15%', size: 2.2, color: 'rgba(79,110,247,0.4)', glow: 'rgba(79,110,247,0.2)', dur: '25s', delay: '13s' },
    { left: '55%', size: 3.2, color: 'rgba(124,92,252,0.4)', glow: 'rgba(124,92,252,0.2)', dur: '21s', delay: '15s' },
    { left: '82%', size: 2.8, color: 'rgba(16,185,129,0.35)', glow: 'rgba(16,185,129,0.18)', dur: '27s', delay: '8s' },
  ];

  return (
    <>
      {/* Aurora Background with Drifting Blobs */}
      <div className="aurora-bg" aria-hidden="true">
        <div className="aurora-blob aurora-blob-1" />
        <div className="aurora-blob aurora-blob-2" />
        <div className="aurora-blob aurora-blob-3" />
        <div className="aurora-blob aurora-blob-4" />
        <div className="aurora-blob aurora-blob-5" />
        <div className="aurora-blob aurora-blob-6" />
        <div className="aurora-blob aurora-blob-7" />
      </div>

      {/* Dynamic Canvas Mesh */}
      <canvas ref={canvasRef} className="mesh-canvas" aria-hidden="true" />

      {/* Floating Ambient Particles */}
      <div className="ambient-particles" aria-hidden="true">
        {particles.map((p, idx) => (
          <div
            key={idx}
            className="ambient-particle"
            style={{
              width: `${p.size}px`,
              height: `${p.size}px`,
              left: p.left,
              background: p.color,
              boxShadow: `0 0 ${p.size * 3}px ${p.glow}, 0 0 ${p.size * 6}px ${p.glow}`,
              animationDuration: p.dur,
              animationDelay: p.delay,
            }}
          />
        ))}
      </div>

      {/* Noise Grain Overlay */}
      <div className="noise" aria-hidden="true" />

      {/* Light Streaks */}
      <div className="light-streaks" aria-hidden="true">
        <div className="light-streak" />
        <div className="light-streak" />
        <div className="light-streak" />
        <div className="light-streak" />
        <div className="light-streak" />
      </div>
    </>
  );
};
