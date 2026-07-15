const App = {
  container: null, lenis: null,

  init() {
    this.container = document.getElementById('page-container');
    this.renderPage();
    this.initLenis();
    this.initPreloader();
    this.initNavbar();
    ScrollProgress.init();
    Cursor.init();

    window.addEventListener('resize', () => {
      if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
    });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });
    document.addEventListener('click', e => { if (e.target.id === 'lightbox') closeLightbox(); });
    document.getElementById('lightbox-close').addEventListener('click', closeLightbox);

    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
          if (App.lenis) {
            App.lenis.scrollTo(target, { offset: -80, duration: 1.8 });
          } else {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      });
    });

    document.querySelectorAll('.nav-cta').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
          if (App.lenis) {
            App.lenis.scrollTo(target, { offset: -80, duration: 1.8 });
          } else {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      });
    });
  },

  renderPage() {
    this.container.innerHTML = Pages.home();
    document.title = 'Sahil Jain — Software Developer';
  },

  initLenis() {
    if (window.innerWidth <= 768 || ('ontouchstart' in window && window.innerWidth <= 1024)) {
      document.documentElement.classList.add('lenis-mobile');
      return;
    }
    this.lenis = new Lenis({
      duration: 1.4,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.9,
    });
    this.lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(time => this.lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
  },

  initPreloader() {
    const preloader = document.getElementById('preloader');
    const fillEl = document.getElementById('preloader-fill');
    let count = 0;
    const counter = setInterval(() => {
      count += Math.floor(Math.random() * 10) + 5;
      if (count >= 100) { count = 100; clearInterval(counter); }
      fillEl.style.width = count + '%';
    }, 25);
    setTimeout(() => {
      preloader.classList.add('hidden');
      setTimeout(() => {
        Animations.init();
        TypeWriter.init();
        if (window.innerWidth > 768) CardTilt.init();
        this.initSectionObserver();
      }, 300);
    }, 2000);
  },

  initNavbar() {
    const nav = document.getElementById('navbar');
    const goTop = document.getElementById('go-top');
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 50);
      if (goTop) goTop.classList.toggle('visible', window.scrollY > 400);
    });
    if (goTop) {
      goTop.addEventListener('click', () => {
        if (App.lenis) {
          App.lenis.scrollTo(0, { duration: 1.2 });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
    }
  },

  initSectionObserver() {
    const sections = document.querySelectorAll('#home, #about, #skills, #projects, #certifications, #achievements, #resume, #contact');
    const navLinks = document.querySelectorAll('.nav-link');

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          navLinks.forEach(link => {
            const isActive = link.dataset.section === sectionId;
            link.classList.toggle('active', isActive);
            if (isActive) {
              link.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
  },
};

document.addEventListener('DOMContentLoaded', () => App.init());
