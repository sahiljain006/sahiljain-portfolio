const Cursor = {
  outer: null, inner: null, glow: null, mx: 0, my: 0, isTouch: false,
  init() {
    this.isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (this.isTouch) return;
    this.outer = document.getElementById('cursor-outer');
    this.inner = document.getElementById('cursor-inner');
    this.glow = document.getElementById('cursor-glow');
    if (!this.outer) return;
    document.addEventListener('mousemove', e => { this.mx = e.clientX; this.my = e.clientY; });
    this.loop();
    this.hover();
    this.magnetic();
  },
  loop() {
    gsap.set(this.outer, { x: this.mx, y: this.my });
    gsap.set(this.inner, { x: this.mx, y: this.my });
    gsap.set(this.glow, { x: this.mx, y: this.my });
    const tick = () => {
      gsap.to(this.outer, { x: this.mx, y: this.my, duration: 0.4, ease: 'power2.out' });
      gsap.to(this.glow, { x: this.mx, y: this.my, duration: 0.7, ease: 'power2.out' });
      requestAnimationFrame(tick);
    };
    tick();
  },
  hover() {
    const sel = 'a, button, .proj, .cert, .achieve, .skill-tag, .stat, .nav-link, .gallery-item';
    document.addEventListener('mouseover', e => {
      if (e.target.closest(sel)) {
        document.body.classList.add('cursor-hover');
        gsap.to(Cursor.glow, { width: 160, height: 160, duration: 0.5, ease: 'power2.out' });
      }
    });
    document.addEventListener('mouseout', e => {
      if (e.target.closest(sel)) {
        document.body.classList.remove('cursor-hover');
        gsap.to(Cursor.glow, { width: 120, height: 120, duration: 0.5, ease: 'power2.out' });
      }
    });
    document.addEventListener('mouseover', e => { if (e.target.matches('input,textarea')) document.body.classList.add('cursor-text'); });
    document.addEventListener('mouseout', e => { if (e.target.matches('input,textarea')) document.body.classList.remove('cursor-text'); });
  },
  magnetic() {
    document.querySelectorAll('[data-magnetic]').forEach(el => {
      el.addEventListener('mousemove', e => {
        const r = el.getBoundingClientRect();
        gsap.to(el, { x: (e.clientX - r.left - r.width/2) * 0.2, y: (e.clientY - r.top - r.height/2) * 0.2, duration: 0.3, ease: 'power2.out' });
      });
      el.addEventListener('mouseleave', () => {
        gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1,0.4)' });
      });
    });
  },
};

const ScrollProgress = {
  bar: null,
  init() { this.bar = document.getElementById('scroll-progress'); window.addEventListener('scroll', () => this.update()); },
  update() {
    if (!this.bar) return;
    const p = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
    this.bar.style.transform = `scaleX(${p || 0})`;
  },
};

const CardTilt = {
  init() {
    document.querySelectorAll('.proj, .stat, .skill-cat, .achieve').forEach(card => {
      card.addEventListener('mousemove', e => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width;
        const y = (e.clientY - r.top) / r.height;
        gsap.to(card, {
          rotateX: (0.5 - y) * 8,
          rotateY: (x - 0.5) * 8,
          transformPerspective: 900,
          duration: 0.35,
          ease: 'power2.out',
          boxShadow: `0 20px 60px rgba(24,21,42,0.12), 0 0 40px rgba(79,110,247,0.06)`,
        });
      });
      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          rotateX: 0, rotateY: 0,
          boxShadow: '',
          duration: 0.6, ease: 'power2.out'
        });
      });
    });
  },
};
