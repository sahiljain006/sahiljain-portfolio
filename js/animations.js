const Animations = {
  isMobile: window.innerWidth <= 768 || ('ontouchstart' in window && window.innerWidth <= 1024),

  init() {
    gsap.registerPlugin(ScrollTrigger);
    this.revealElements();
    this.animateCounters();

    if (this.isMobile) {
      this.mobileReveal();
      return;
    }

    this.initMeshCanvas();
    this.parallax();
    this.heroAnimations();
    this.initAmbientParticles();
    this.sectionParallax();
    this.auroraParallax();
    this.initCardGlow();
    this.initSectionDecoParallax();
  },
  revealElements() {
    document.querySelectorAll('.reveal').forEach(el => {
      ScrollTrigger.create({
        trigger: el, start: 'top 96%', once: true,
        onEnter: () => {
          gsap.to(el, {
            opacity: 1, y: 0, duration: 0.65, ease: 'power2.out',
            delay: parseFloat(el.dataset.delay || 0),
          });
          el.classList.add('visible');
        }
      });
    });
  },
  mobileReveal() {
    const els = document.querySelectorAll('.reveal');
    if (!els.length) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          gsap.fromTo(el,
            { opacity: 0, y: 18 },
            {
              opacity: 1, y: 0,
              duration: 0.45,
              ease: 'power2.out',
              delay: parseFloat(el.dataset.delay || 0),
            }
          );
          el.classList.add('visible');
          io.unobserve(el);
        }
      });
    }, { rootMargin: '0px 0px -40px 0px', threshold: 0.08 });
    els.forEach(el => io.observe(el));
  },
  animateCounters() {
    document.querySelectorAll('[data-count]').forEach(el => {
      const target = parseInt(el.dataset.count);
      const suffix = el.textContent.replace(/[0-9]/g, '');
      ScrollTrigger.create({
        trigger: el, start: 'top 85%', once: true,
        onEnter: () => {
          gsap.to({ val: 0 }, {
            val: target, duration: 2.2, ease: 'power2.out',
            onUpdate() { el.textContent = Math.round(this.targets()[0].val) + suffix; },
          });
        },
      });
    });
  },
  parallax() {
    document.querySelectorAll('.hero-blob').forEach((blob, i) => {
      gsap.to(blob, {
        y: 80 + i * 25,
        scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 2 }
      });
    });
    document.querySelectorAll('.hero-float').forEach((card, i) => {
      gsap.to(card, {
        y: -25 - i * 12,
        scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 2.5 }
      });
    });
  },
  sectionParallax() {
    document.querySelectorAll('.sec[id]').forEach(section => {
      gsap.to(section, {
        backgroundPositionY: '20%',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 3,
        }
      });
    });

    document.querySelectorAll('.proj').forEach((card, i) => {
      const visual = card.querySelector('.proj-visual');
      if (visual) {
        gsap.fromTo(visual,
          { backgroundPositionY: '30%' },
          {
            backgroundPositionY: '70%',
            scrollTrigger: { trigger: card, start: 'top bottom', end: 'bottom top', scrub: 2 }
          }
        );
      }
    });

    document.querySelectorAll('.stat').forEach((stat, i) => {
      gsap.fromTo(stat,
        { y: 20 + (i % 4) * 5 },
        {
          y: -10 - (i % 4) * 8,
          scrollTrigger: { trigger: stat, start: 'top bottom', end: 'bottom top', scrub: 2 }
        }
      );
    });
  },
  auroraParallax() {
    const blobs = document.querySelectorAll('.aurora-blob');
    blobs.forEach((blob, i) => {
      gsap.to(blob, {
        y: (i % 2 === 0 ? 120 : -100) + i * 20,
        x: (i % 3 === 0 ? 60 : i % 3 === 1 ? -40 : 30),
        scrollTrigger: {
          trigger: 'body',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 4 + i * 0.5,
        }
      });
    });

    document.querySelectorAll('.hero-img-wrap').forEach(wrap => {
      gsap.to(wrap, {
        y: -40,
        scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 3 }
      });
    });

    document.querySelectorAll('.hero-eyebrow, .hero-h1, .hero-typing, .hero-desc, .hero-btns, .hero-stats').forEach((el, i) => {
      gsap.fromTo(el,
        { opacity: 0, y: 20 + i * 4 },
        {
          opacity: 1, y: 0, duration: 0.7, ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 97%', once: true },
          delay: i * 0.06,
        }
      );
    });
  },
  heroAnimations() {
    const heroImg = document.getElementById('hero-img');
    if (!heroImg || this.isMobile) return;

    document.addEventListener('mousemove', (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 16;
      const y = (e.clientY / window.innerHeight - 0.5) * 16;
      gsap.to(heroImg, {
        rotateY: x * 0.4,
        rotateX: -y * 0.4,
        duration: 0.8,
        ease: 'power2.out',
        transformPerspective: 1200,
      });
    });

    document.querySelectorAll('.hero-deco-shape').forEach((shape, i) => {
      gsap.to(shape, {
        y: (i % 2 === 0 ? -20 : 15),
        x: (i % 3 === 0 ? 10 : i % 3 === 1 ? -8 : 5),
        scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 2 + i * 0.3 }
      });
    });

    document.querySelectorAll('.hero-deco-bracket').forEach((bracket, i) => {
      gsap.to(bracket, {
        y: -30 - i * 10,
        rotation: i % 2 === 0 ? 15 : -15,
        scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 3 }
      });
    });
  },
  initAmbientParticles() {
    const container = document.getElementById('ambient-particles');
    if (!container) return;
    const particles = [
      { color: 'rgba(79,110,247,0.5)', glow: 'rgba(79,110,247,0.25)' },
      { color: 'rgba(124,92,252,0.45)', glow: 'rgba(124,92,252,0.22)' },
      { color: 'rgba(236,72,153,0.4)', glow: 'rgba(236,72,153,0.2)' },
      { color: 'rgba(16,185,129,0.4)', glow: 'rgba(16,185,129,0.2)' },
      { color: 'rgba(242,140,90,0.4)', glow: 'rgba(242,140,90,0.2)' },
      { color: 'rgba(14,165,233,0.4)', glow: 'rgba(14,165,233,0.2)' },
      { color: 'rgba(245,158,11,0.35)', glow: 'rgba(245,158,11,0.18)' },
    ];
    for (let i = 0; i < 35; i++) {
      const p = document.createElement('div');
      p.className = 'ambient-particle';
      const size = Math.random() * 5 + 1.5;
      const chosen = particles[Math.floor(Math.random() * particles.length)];
      const hasGlow = Math.random() > 0.45;
      p.style.cssText = `
        width: ${size}px; height: ${size}px;
        left: ${Math.random() * 100}%;
        background: ${chosen.color};
        box-shadow: ${hasGlow ? `0 0 ${size * 4}px ${chosen.glow}, 0 0 ${size * 8}px ${chosen.glow}` : `0 0 ${size * 2}px ${chosen.glow}`};
        animation-duration: ${Math.random() * 20 + 14}s;
        animation-delay: ${Math.random() * 20}s;
      `;
      container.appendChild(p);
    }
  },
  initCardGlow() {
    document.querySelectorAll('.proj, .stat, .skill-cat, .achieve, .cert, .about-main, .contact-form').forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const r = card.getBoundingClientRect();
        const x = ((e.clientX - r.left) / r.width) * 100;
        const y = ((e.clientY - r.top) / r.height) * 100;
        card.style.setProperty('--mouse-x', x + '%');
        card.style.setProperty('--mouse-y', y + '%');
      });
    });
  },
  initSectionDecoParallax() {
    document.querySelectorAll('.sec-deco-ring').forEach((ring, i) => {
      gsap.to(ring, {
        rotation: 360,
        scrollTrigger: {
          trigger: ring.closest('.sec'),
          start: 'top bottom',
          end: 'bottom top',
          scrub: 5 + i,
        }
      });
    });

    document.querySelectorAll('.sec-deco-glow').forEach((glow, i) => {
      gsap.to(glow, {
        y: (i % 2 === 0 ? -40 : 30),
        x: (i % 3 === 0 ? 20 : i % 3 === 1 ? -15 : 10),
        scale: 1.3,
        scrollTrigger: {
          trigger: glow.closest('.sec'),
          start: 'top bottom',
          end: 'bottom top',
          scrub: 3 + i,
        }
      });
    });

    document.querySelectorAll('.sec-deco-dots').forEach((dots, i) => {
      gsap.to(dots, {
        y: -25 - i * 5,
        x: 10,
        scrollTrigger: {
          trigger: dots.closest('.sec'),
          start: 'top bottom',
          end: 'bottom top',
          scrub: 2.5,
        }
      });
    });
  },
  initMeshCanvas() {
    const canvas = document.getElementById('mesh-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w, h, mx = 0.5, my = 0.5, scrollY = 0;

    const blobs = [
      { x: 0.2, y: 0.3, r: 280, color: [79,110,247], vx: 0.0003, vy: 0.0002, phase: 0 },
      { x: 0.75, y: 0.2, r: 240, color: [242,140,90], vx: -0.00025, vy: 0.0003, phase: 1.5 },
      { x: 0.5, y: 0.65, r: 260, color: [124,92,252], vx: 0.0002, vy: -0.00025, phase: 3 },
      { x: 0.85, y: 0.7, r: 200, color: [16,185,129], vx: -0.0003, vy: 0.0002, phase: 4.5 },
      { x: 0.15, y: 0.8, r: 220, color: [236,72,153], vx: 0.00025, vy: -0.0003, phase: 2 },
      { x: 0.6, y: 0.15, r: 180, color: [14,165,233], vx: 0.0002, vy: 0.00025, phase: 5 },
    ];

    function resize() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);
    document.addEventListener('mousemove', e => { mx = e.clientX / w; my = e.clientY / h; });
    window.addEventListener('scroll', () => { scrollY = window.scrollY; });

    let t = 0;
    function draw() {
      t += 0.008;
      ctx.clearRect(0, 0, w, h);

      blobs.forEach(b => {
        const px = (b.x + Math.sin(t + b.phase) * 0.08 + (mx - 0.5) * 0.04) * w;
        const py = (b.y + Math.cos(t * 0.7 + b.phase) * 0.06 + (my - 0.5) * 0.03) * h - scrollY * 0.02;
        const grad = ctx.createRadialGradient(px, py, 0, px, py, b.r);
        grad.addColorStop(0, `rgba(${b.color[0]},${b.color[1]},${b.color[2]},0.12)`);
        grad.addColorStop(0.4, `rgba(${b.color[0]},${b.color[1]},${b.color[2]},0.06)`);
        grad.addColorStop(1, `rgba(${b.color[0]},${b.color[1]},${b.color[2]},0)`);
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, w, h);
      });

      requestAnimationFrame(draw);
    }
    draw();
  },
  kill() { ScrollTrigger.getAll().forEach(t => t.kill()); },
};

const TypeWriter = {
  el: null, roles: [], idx: 0, char: 0, deleting: false, timer: null,
  init() {
    this.el = document.getElementById('typed-role');
    if (!this.el) return;
    this.roles = SITE.roles; this.idx = 0; this.char = 0; this.deleting = false;
    this.tick();
  },
  tick() {
    const role = this.roles[this.idx];
    this.char += this.deleting ? -1 : 1;
    this.el.textContent = role.substring(0, this.char);
    let speed = this.deleting ? 28 : 60;
    if (!this.deleting && this.char === role.length) { speed = 2200; this.deleting = true; }
    else if (this.deleting && this.char === 0) { this.deleting = false; this.idx = (this.idx + 1) % this.roles.length; speed = 350; }
    this.timer = setTimeout(() => this.tick(), speed);
  },
  stop() { clearTimeout(this.timer); },
};
