const Pages = {

home() {
  return `<div class="page-enter">
    <section class="hero" id="home">
      <div class="hero-bg">
        <div class="hero-blob hero-blob-1"></div>
        <div class="hero-blob hero-blob-2"></div>
        <div class="hero-blob hero-blob-3"></div>
        <div class="hero-line"></div>
        <div class="hero-line"></div>
        <div class="hero-deco">
          <div class="hero-deco-shape s1"></div>
          <div class="hero-deco-shape s2"></div>
          <div class="hero-deco-shape s3"></div>
          <div class="hero-deco-shape s4"></div>
          <div class="hero-deco-shape s5"></div>
          <div class="hero-deco-shape s6"></div>
          <div class="hero-deco-shape s7"></div>
          <div class="hero-deco-bracket b1">{</div>
          <div class="hero-deco-bracket b2">}</div>
          <div class="hero-deco-dots d1"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>
          <div class="hero-deco-dots d2"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>
          <div class="hero-deco-ring r1"></div>
          <div class="hero-deco-ring r2"></div>
          <div class="hero-deco-line l1"></div>
          <div class="hero-deco-line l2"></div>
        </div>
      </div>
      <div class="hero-grid">
        <div class="hero-content">
          <h1 class="hero-h1">
            <span class="hero-hello reveal reveal-d1">Hello! I'm</span>
            <span class="grad reveal reveal-d2">SAHIL JAIN</span>
          </h1>
          <p class="hero-tagline reveal reveal-d2">Building Intelligent Digital Experiences.</p>
          <div class="hero-typing reveal reveal-d3">
            <span>&</span>
            <span class="typed" id="typed-role"></span>
            <span class="blink"></span>
          </div>
          <p class="hero-desc reveal reveal-d4">
            Passionate about transforming ideas into meaningful digital products, I build modern web applications with clean architecture, seamless user experiences, and a strong focus on performance, innovation & real-world impact.
          </p>
          <div class="hero-btns reveal reveal-d4">
            <a href="#projects" class="btn btn-p" data-magnetic>Explore My Work <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
            <a href="#contact" class="btn btn-s" data-magnetic>Get in Touch</a>
          </div>
        </div>
        <div class="hero-visual reveal">
          <div class="hero-img-wrap" id="hero-img">
            <div class="hero-img-glow"></div>
            <div class="hero-img-frame">
              <div class="hero-img-inner"><img src="assets/SAHIL PROFILE.jpg" alt="Sahil Jain" class="hero-avatar-img" /></div>
            </div>
            <div class="hero-float f1">
              <div class="hero-float-icon" style="background:var(--primary-50);color:var(--primary);">⚡</div>
              <div><div style="font-size:10px;color:var(--ink-4);">Speciality</div><div>Full Stack & AI</div></div>
            </div>
            <div class="hero-float f2">
              <div class="hero-float-icon" style="background:var(--cyan-50);color:var(--sky);">🐍</div>
              <div><div style="font-size:10px;color:var(--ink-4);">Primary</div><div>Python Developer</div></div>
            </div>
            <div class="hero-float f3">
              <div class="hero-float-icon" style="background:var(--soft-green-50);color:var(--emerald);">🟢</div>
              <div><div style="font-size:10px;color:var(--ink-4);">Status</div><div>Open to Work</div></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="marquee">
      <div class="marquee-track">
        ${[
          { name:'Python', icon:'<svg viewBox="0 0 24 24" width="16" height="16"><path fill="#3776AB" d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.007 2.752h5.814v.828H3.9S0 5.789 0 11.969c0 6.18 3.394 5.98 3.394 5.98h2.01v-2.866s-.108-3.394 3.34-3.394h5.766s3.234.052 3.234-3.128V3.254S18.13 0 11.914 0z"/><path fill="#FFD43B" d="M12.086 24c6.094 0 5.714-2.656 5.714-2.656l-.007-2.752h-5.814v-.828h8.121S24 18.211 24 12.031c0-6.18-3.394-5.98-3.394-5.98h-2.01v2.866s.108 3.394-3.34 3.394h-5.766s-3.234-.052-3.234 3.128v5.334S5.87 24 12.086 24z"/></svg>' },
          { name:'Django', icon:'<svg viewBox="0 0 24 24" width="16" height="16" fill="#0C4B33"><path d="M7.794 0c-.432 0-.83.216-1.08.576L.144 17.136h4.752l1.08-3.024h7.488l1.08 3.024h5.256L13.554.576C13.302.216 12.906 0 12.474 0H7.794zm-.144 4.608l2.448 6.912H5.202l2.448-6.912z"/></svg>' },
          { name:'REST APIs', icon:'<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#FF6B35" stroke-width="2" stroke-linecap="round"><path d="M4 6h16M4 12h10M4 18h14"/><circle cx="20" cy="12" r="2"/><circle cx="16" cy="18" r="2"/></svg>' },
          { name:'JavaScript', icon:'<svg viewBox="0 0 24 24" width="16" height="16"><rect width="24" height="24" rx="2" fill="#F7DF1E"/><path fill="#323330" d="M6.29 20.14l1.94-1.15c.4.7.93 1.3 1.6 1.8.66.48 1.38.72 2.16.72.82 0 1.46-.25 1.93-.74.47-.5.7-1.16.7-2 0-.52-.13-.96-.39-1.33-.26-.37-.62-.68-1.08-.93l-.37-.18c-.27-.13-.46-.26-.56-.38-.11-.13-.16-.27-.16-.42 0-.15.06-.28.17-.39.11-.11.26-.17.45-.17.27 0 .5.09.68.27l.78 1c.38.5.86.89 1.44 1.17.58.28 1.2.42 1.86.42 1.06 0 1.89-.31 2.48-.94.6-.63.89-1.47.89-2.53 0-.75-.21-1.39-.64-1.91-.42-.52-1-.95-1.7-1.28l-.42-.2c-.28-.13-.5-.26-.66-.38-.16-.13-.24-.27-.24-.42 0-.16.07-.3.2-.42.14-.12.32-.18.54-.18.4 0 .73.12 1 .36l.68.84c.52.65 1.15 1.16 1.9 1.53.74.37 1.54.56 2.39.56 1.12 0 2-.31 2.63-.92.63-.62.94-1.46.94-2.54 0-.76-.21-1.42-.63-1.97-.42-.55-1-.99-1.68-1.33-.68-.34-1.44-.51-2.28-.51-1.08 0-2.04.31-2.88.93-.84.62-1.34 1.4-1.5 2.34l-1.96-.34c.28-1.4 1.06-2.55 2.34-3.44 1.28-.89 2.76-1.34 4.44-1.34 1.22 0 2.34.22 3.35.65 1.01.44 1.83 1.04 2.46 1.82.63.78.95 1.68.95 2.72 0 .78-.2 1.48-.6 2.1-.4.62-.94 1.15-1.62 1.59-.68.44-1.46.76-2.33.96-.87.2-1.76.3-2.68.3-1.1 0-2.12-.18-3.06-.53-.94-.35-1.74-.87-2.4-1.56l-1.72 1.02z"/></svg>' },
          { name:'AI Integration', icon:'<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#7C3AED" stroke-width="2" stroke-linecap="round"><path d="M12 2a4 4 0 014 4v2a4 4 0 01-8 0V6a4 4 0 014-4z"/><path d="M6 10h12l1 10H5L6 10z"/><path d="M9 22h6"/><path d="M12 14v4"/></svg>' },
          { name:'Full Stack', icon:'<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#0EA5E9" stroke-width="2" stroke-linecap="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/><path d="M7 8l3 3-3 3"/><path d="M13 14h4"/></svg>' },
          { name:'Git', icon:'<svg viewBox="0 0 24 24" width="16" height="16" fill="#F05032"><path d="M23.546 10.93L13.067.452a1.55 1.55 0 00-2.186 0L8.708 2.627l2.76 2.76a1.838 1.838 0 012.327 2.341l2.645 2.645a1.838 1.838 0 11-1.18 1.088l-2.47-2.47v6.51a1.838 1.838 0 11-1.532-.065V9.36a1.838 1.838 0 01-1.002-2.41L7.6 4.227-.164 11.99a1.55 1.55 0 000 2.186l10.48 10.48a1.55 1.55 0 002.186 0l10.04-10.04a1.55 1.55 0 000-2.186z"/></svg>' },
          { name:'Problem Solving', icon:'<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#FFB8A7" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><circle cx="12" cy="17" r=".5"/></svg>' },
          { name:'Clean Code', icon:'<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#B8ADFF" stroke-width="2" stroke-linecap="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>' },
          { name:'Responsive Design', icon:'<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#059669" stroke-width="2" stroke-linecap="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/></svg>' },
        ].concat([
          { name:'Python', icon:'<svg viewBox="0 0 24 24" width="16" height="16"><path fill="#3776AB" d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.007 2.752h5.814v.828H3.9S0 5.789 0 11.969c0 6.18 3.394 5.98 3.394 5.98h2.01v-2.866s-.108-3.394 3.34-3.394h5.766s3.234.052 3.234-3.128V3.254S18.13 0 11.914 0z"/><path fill="#FFD43B" d="M12.086 24c6.094 0 5.714-2.656 5.714-2.656l-.007-2.752h-5.814v-.828h8.121S24 18.211 24 12.031c0-6.18-3.394-5.98-3.394-5.98h-2.01v2.866s.108 3.394-3.34 3.394h-5.766s-3.234-.052-3.234 3.128v5.334S5.87 24 12.086 24z"/></svg>' },
          { name:'Django', icon:'<svg viewBox="0 0 24 24" width="16" height="16" fill="#0C4B33"><path d="M7.794 0c-.432 0-.83.216-1.08.576L.144 17.136h4.752l1.08-3.024h7.488l1.08 3.024h5.256L13.554.576C13.302.216 12.906 0 12.474 0H7.794zm-.144 4.608l2.448 6.912H5.202l2.448-6.912z"/></svg>' },
          { name:'REST APIs', icon:'<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#FF6B35" stroke-width="2" stroke-linecap="round"><path d="M4 6h16M4 12h10M4 18h14"/><circle cx="20" cy="12" r="2"/><circle cx="16" cy="18" r="2"/></svg>' },
          { name:'JavaScript', icon:'<svg viewBox="0 0 24 24" width="16" height="16"><rect width="24" height="24" rx="2" fill="#F7DF1E"/><path fill="#323330" d="M6.29 20.14l1.94-1.15c.4.7.93 1.3 1.6 1.8.66.48 1.38.72 2.16.72.82 0 1.46-.25 1.93-.74.47-.5.7-1.16.7-2 0-.52-.13-.96-.39-1.33-.26-.37-.62-.68-1.08-.93l-.37-.18c-.27-.13-.46-.26-.56-.38-.11-.13-.16-.27-.16-.42 0-.15.06-.28.17-.39.11-.11.26-.17.45-.17.27 0 .5.09.68.27l.78 1c.38.5.86.89 1.44 1.17.58.28 1.2.42 1.86.42 1.06 0 1.89-.31 2.48-.94.6-.63.89-1.47.89-2.53 0-.75-.21-1.39-.64-1.91-.42-.52-1-.95-1.7-1.28l-.42-.2c-.28-.13-.5-.26-.66-.38-.16-.13-.24-.27-.24-.42 0-.16.07-.3.2-.42.14-.12.32-.18.54-.18.4 0 .73.12 1 .36l.68.84c.52.65 1.15 1.16 1.9 1.53.74.37 1.54.56 2.39.56 1.12 0 2-.31 2.63-.92.63-.62.94-1.46.94-2.54 0-.76-.21-1.42-.63-1.97-.42-.55-1-.99-1.68-1.33-.68-.34-1.44-.51-2.28-.51-1.08 0-2.04.31-2.88.93-.84.62-1.34 1.4-1.5 2.34l-1.96-.34c.28-1.4 1.06-2.55 2.34-3.44 1.28-.89 2.76-1.34 4.44-1.34 1.22 0 2.34.22 3.35.65 1.01.44 1.83 1.04 2.46 1.82.63.78.95 1.68.95 2.72 0 .78-.2 1.48-.6 2.1-.4.62-.94 1.15-1.62 1.59-.68.44-1.46.76-2.33.96-.87.2-1.76.3-2.68.3-1.1 0-2.12-.18-3.06-.53-.94-.35-1.74-.87-2.4-1.56l-1.72 1.02z"/></svg>' },
          { name:'AI Integration', icon:'<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#7C3AED" stroke-width="2" stroke-linecap="round"><path d="M12 2a4 4 0 014 4v2a4 4 0 01-8 0V6a4 4 0 014-4z"/><path d="M6 10h12l1 10H5L6 10z"/><path d="M9 22h6"/><path d="M12 14v4"/></svg>' },
          { name:'Full Stack', icon:'<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#0EA5E9" stroke-width="2" stroke-linecap="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/><path d="M7 8l3 3-3 3"/><path d="M13 14h4"/></svg>' },
          { name:'Git', icon:'<svg viewBox="0 0 24 24" width="16" height="16" fill="#F05032"><path d="M23.546 10.93L13.067.452a1.55 1.55 0 00-2.186 0L8.708 2.627l2.76 2.76a1.838 1.838 0 012.327 2.341l2.645 2.645a1.838 1.838 0 11-1.18 1.088l-2.47-2.47v6.51a1.838 1.838 0 11-1.532-.065V9.36a1.838 1.838 0 01-1.002-2.41L7.6 4.227-.164 11.99a1.55 1.55 0 000 2.186l10.48 10.48a1.55 1.55 0 002.186 0l10.04-10.04a1.55 1.55 0 000-2.186z"/></svg>' },
          { name:'Problem Solving', icon:'<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#FFB8A7" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><circle cx="12" cy="17" r=".5"/></svg>' },
          { name:'Clean Code', icon:'<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#B8ADFF" stroke-width="2" stroke-linecap="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>' },
          { name:'Responsive Design', icon:'<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#059669" stroke-width="2" stroke-linecap="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/></svg>' },
        ]).map((t,i) => `<div class="marquee-item"><span class="marquee-icon">${t.icon}</span>${t.name}</div>`).join('')}
      </div>
    </section>

    <section class="sec" id="about" style="padding-top:50px;">
      <div class="sec-deco sec-deco-ring" style="width:180px;height:180px;top:60px;right:-80px;opacity:0.4;"></div>
      <div class="sec-deco sec-deco-glow" style="width:200px;height:200px;top:40%;left:-60px;background:rgba(242,140,90,0.08);"></div>
      <div class="sec-label reveal">About</div>
      <h2 class="sec-title reveal reveal-d1">The Journey Behind<br/><span style="background:var(--grad);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">the Code</span></h2>
      <p class="sec-desc reveal reveal-d2">Every developer has a story. Here's mine — from first curiosity to building real products.</p>
      <div class="about-grid reveal reveal-d3">
        <div class="about-card about-main">
          <h3>What Drives Me</h3>
          <p>
            I believe technology is at its best when it solves real problems and creates meaningful experiences. Every project I take on is driven by curiosity, creativity, and a commitment to continuous improvement.
          </p>
          <p>
            I enjoy exploring new technologies, refining my skills, and turning ambitious ideas into practical digital solutions. My focus is not just on writing clean code, but on building products that are reliable, intuitive, and built to make a lasting impact. Every challenge is an opportunity to learn, innovate, and grow as a developer.
          </p>
        </div>
        <div class="about-stats">
          ${SITE.stats.map(s => `<div class="stat"><div class="stat-num" data-count="${s.number}">0${s.suffix}</div><div class="stat-label">${s.label}</div></div>`).join('')}
        </div>
        <div class="about-card about-edu">
          <h3>Education</h3>
          <div style="display:flex;flex-direction:column;gap:6px;">
            <div style="font-family:'Space Grotesk',sans-serif;font-size:16px;font-weight:600;">Bachelor of Computer Applications (BCA)</div>
            <div style="font-size:14px;color:var(--ink-3);">Agurchand Manmull Jain College</div>
            <div style="font-size:13px;color:var(--primary);font-weight:600;">2024 – 2027</div>
          </div>
        </div>
        <div class="about-timeline">
          <div style="position:relative;padding-left:36px;">
            <div style="position:absolute;left:7px;top:0;bottom:0;width:2px;background:var(--grad);border-radius:2px;"></div>
            ${SITE.timeline.map((t,i) => `
              <div class="reveal reveal-d${Math.min(i%4+1,4)}" style="position:relative;padding-bottom:30px;">
                <div style="position:absolute;left:-36px;top:4px;width:16px;height:16px;border-radius:50%;background:rgba(255,255,255,0.04);border:3px solid var(--primary);z-index:2;transition:all .35s var(--ease);"></div>
                <div style="font-size:11px;font-weight:700;color:var(--primary);text-transform:uppercase;letter-spacing:.1em;margin-bottom:4px;">${t.year}</div>
                <div style="font-family:'Space Grotesk',sans-serif;font-size:17px;font-weight:600;margin-bottom:4px;">${t.title}</div>
                <div style="font-size:14px;color:var(--ink-3);line-height:1.65;">${t.desc}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </section>

    <section class="sec" id="skills" style="padding-top:50px;">
      <div class="sec-deco sec-deco-dots" style="grid-template-columns:repeat(4,3px);gap:7px;top:80px;right:40px;opacity:0.5;">
        <span></span><span></span><span></span><span></span><span></span><span></span>
        <span></span><span></span><span></span><span></span><span></span><span></span>
      </div>
      <div class="sec-deco sec-deco-glow" style="width:160px;height:160px;bottom:20%;right:-40px;background:rgba(79,110,247,0.07);"></div>
      <div class="sec-label reveal">Skills</div>
      <h2 class="sec-title reveal reveal-d1">Technical <span style="background:var(--grad);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">Toolkit</span></h2>
      <p class="sec-desc reveal reveal-d2">The technologies I use to turn ideas into working software.</p>
      <div class="skills-grid" style="margin-top:48px;">
        ${SITE.skills.map((cat,i) => `
          <div class="skill-cat reveal reveal-d${Math.min(i%4+1,4)}">
            <div class="skill-cat-head">
              <div class="skill-cat-icon" style="background:${cat.color};">${cat.icon}</div>
              <div class="skill-cat-title">${cat.title}</div>
            </div>
            <div class="skill-tags">
              ${cat.items.map(s => `<div class="skill-tag" title="${s.desc}">${s.name}</div>`).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    </section>

    <section class="sec" id="projects" style="padding-top:50px;">
      <div class="sec-deco sec-deco-ring" style="width:220px;height:220px;top:-40px;left:-100px;opacity:0.3;"></div>
      <div class="sec-deco sec-deco-glow" style="width:180px;height:180px;bottom:10%;right:-60px;background:rgba(124,92,252,0.07);"></div>
      <div class="sec-label reveal">Projects</div>
      <h2 class="sec-title reveal reveal-d1">Things I've <span style="background:var(--grad);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">Built</span></h2>
      <p class="sec-desc reveal reveal-d2">Each project is a problem solved, a skill sharpened, and a step forward.</p>
      <div class="projects-list" style="margin-top:48px;">
        ${SITE.projects.map((p,i) => projCard(p,i)).join('')}
      </div>
    </section>

    <section class="sec" id="certifications" style="padding-top:50px;">
      <div class="sec-deco sec-deco-dots" style="grid-template-columns:repeat(3,3px);gap:6px;top:70px;left:30px;opacity:0.4;">
        <span></span><span></span><span></span><span></span><span></span><span></span>
        <span></span><span></span><span></span>
      </div>
      <div class="sec-deco sec-deco-glow" style="width:150px;height:150px;top:30%;right:-50px;background:rgba(236,72,153,0.07);"></div>
      <div class="sec-label reveal">Certifications</div>
      <h2 class="sec-title reveal reveal-d1">Credentials & <span style="background:var(--grad-warm);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">Training</span></h2>
      <p class="sec-desc reveal reveal-d2">Continuous learning is the foundation of growth.</p>
      <div class="cert-scroll reveal reveal-d3" style="margin-top:48px;">
        ${SITE.certifications.map((c,i) => `
          <div class="cert" onclick="openCert(${i})">
            ${c.image ? `<img src="${c.image}" alt="" class="cert-bg-img" />` : ''}
            <div class="cert-overlay">
              <div class="cert-title">${c.title}</div>
              <div class="cert-org-name">${c.org}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </section>

    <section class="sec" id="achievements" style="padding-top:50px;">
      <div class="sec-deco sec-deco-ring" style="width:160px;height:160px;top:40px;right:-60px;opacity:0.35;"></div>
      <div class="sec-deco sec-deco-glow" style="width:140px;height:140px;bottom:15%;left:-40px;background:rgba(16,185,129,0.07);"></div>
      <div class="sec-label reveal">Achievements</div>
      <h2 class="sec-title reveal reveal-d1">Milestones & <span style="background:var(--grad-cool);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">Wins</span></h2>
      <p class="sec-desc reveal reveal-d2">Every achievement marks a challenge overcome and a lesson learned.</p>
      <div class="achieve-grid" style="margin-top:48px;">
        ${SITE.achievements.map((a,i) => `
          <div class="achieve reveal reveal-d${Math.min(i%4+1,4)}">
            <div class="achieve-icon">${a.icon}</div>
            <div class="achieve-title">${a.title}</div>
            <div class="achieve-desc">${a.desc}</div>
          </div>
        `).join('')}
      </div>
    </section>

    <section class="sec" id="resume" style="padding-top:50px;">
      <div class="sec-deco sec-deco-dots" style="grid-template-columns:repeat(3,3px);gap:6px;top:60px;right:50px;opacity:0.4;">
        <span></span><span></span><span></span><span></span><span></span><span></span>
        <span></span><span></span><span></span>
      </div>
      <div class="sec-deco sec-deco-glow" style="width:160px;height:160px;top:35%;left:-50px;background:rgba(245,158,11,0.07);"></div>
      <div class="sec-label reveal">Resume</div>
      <h2 class="sec-title reveal reveal-d1">My <span style="background:var(--grad-warm);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">Resume</span></h2>
      <p class="sec-desc reveal reveal-d2">A concise overview of my projects, technical expertise, experience, and achievements.</p>
      <div class="resume-card reveal reveal-d3">
        <div class="resume-card-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
        </div>
        <div class="resume-card-content">
          <div class="resume-card-top">
            <h3 class="resume-card-name">Sahil Jain</h3>
            <span class="resume-card-badge">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              Last Updated: July 2026
            </span>
          </div>
          <div class="resume-card-actions">
            <a href="assets/SAHIL RESUME.jpg" download="Sahil_Jain_Resume.jpg" class="resume-btn resume-btn-primary" data-magnetic>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Download PDF
            </a>
            <button class="resume-btn resume-btn-secondary" data-magnetic onclick="openResumePreview()">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
              Preview Resume
            </button>
          </div>
        </div>
      </div>
    </section>

    <section class="sec" style="text-align:center;padding-top:50px;">
      <div class="sec-label reveal" style="justify-content:center;">Let's Connect</div>
      <h2 class="sec-title reveal reveal-d1" style="text-align:center;">Have a <span style="background:var(--grad);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">project</span> in mind?</h2>
      <p class="sec-desc reveal reveal-d2" style="margin:14px auto 0;text-align:center;">I'm always open to discussing new projects, creative ideas, or opportunities to collaborate.</p>
      <div class="reveal reveal-d3" style="margin-top:32px;">
        <a href="#contact" class="btn btn-p" data-magnetic>Start a Conversation <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
      </div>
    </section>

    <section class="sec" id="contact" style="padding-top:50px;">
      <div class="sec-deco sec-deco-ring" style="width:200px;height:200px;top:-30px;left:-80px;opacity:0.3;"></div>
      <div class="sec-deco sec-deco-glow" style="width:170px;height:170px;bottom:20%;right:-50px;background:rgba(79,110,247,0.07);"></div>
      <div class="sec-label reveal">Contact</div>
      <h2 class="sec-title reveal reveal-d1">Let's Build <span style="background:var(--grad);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">Something</span><br/>Together</h2>
      <p class="sec-desc reveal reveal-d2">Have a project in mind, looking for an intern, or just want to say hello? I'd love to hear from you.</p>
      <div class="contact-grid" style="margin-top:48px;">
        <div class="contact-form reveal">
          <form action="https://formspree.io/f/maqrylov" method="POST" onsubmit="handleSubmit(event)">
            <input type="hidden" name="_captcha" value="false" />
            <div class="form-group">
              <label class="form-label">Name</label>
              <input type="text" name="name" class="form-input" placeholder="Your name" required />
            </div>
            <div class="form-group">
              <label class="form-label">Email</label>
              <input type="email" name="email" class="form-input" placeholder="you@example.com" required />
            </div>
            <div class="form-group">
              <label class="form-label">Subject</label>
              <input type="text" name="subject" class="form-input" placeholder="What's this about?" />
            </div>
            <div class="form-group">
              <label class="form-label">Message</label>
              <textarea name="message" class="form-textarea" placeholder="Tell me about your project or just say hi..." required></textarea>
            </div>
            <button type="submit" class="form-submit" data-magnetic>Send Message</button>
          </form>
        </div>
        <div class="contact-items reveal reveal-d1">
          <a href="mailto:${SITE.email}" class="contact-item" style="cursor:pointer;text-decoration:none;">
            <div class="contact-item-icon" style="background:var(--primary-50);color:var(--primary);"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg></div>
            <div><div class="contact-item-label">Email</div><div class="contact-item-val">${SITE.email}</div></div>
          </a>
          <a href="tel:${SITE.phone.replace(/\s/g,'')}" class="contact-item" style="cursor:pointer;text-decoration:none;">
            <div class="contact-item-icon" style="background:var(--soft-green-50);color:var(--emerald);"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.58 2.81.7A2 2 0 0 1 22 16.92z"/></svg></div>
            <div><div class="contact-item-label">Phone</div><div class="contact-item-val">${SITE.phone}</div></div>
          </a>
          <div class="contact-item">
            <div class="contact-item-icon" style="background:var(--pink-50);color:var(--rose);"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg></div>
            <div><div class="contact-item-label">Location</div><div class="contact-item-val">${SITE.location}</div></div>
          </div>
          <a href="${SITE.linkedin}" target="_blank" rel="noopener" class="contact-item" style="cursor:pointer;text-decoration:none;">
            <div class="contact-item-icon" style="background:var(--cyan-50);color:var(--sky);"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></div>
            <div><div class="contact-item-label">LinkedIn</div><div class="contact-item-val">linkedin.com/in/sahiljain0006</div></div>
          </a>
          <a href="https://github.com/sahiljain006" target="_blank" rel="noopener" class="contact-item" style="cursor:pointer;text-decoration:none;">
            <div class="contact-item-icon" style="background:var(--highlight-50);color:var(--highlight);"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></div>
            <div><div class="contact-item-label">GitHub</div><div class="contact-item-val">github.com/sahiljain006</div></div>
          </a>
          <a href="https://instagram.com/sahil.jain006" target="_blank" rel="noopener" class="contact-item" style="cursor:pointer;text-decoration:none;">
            <div class="contact-item-icon" style="background:linear-gradient(135deg,rgba(225,48,108,0.08),rgba(131,58,180,0.08));color:#E1306C;"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg></div>
            <div><div class="contact-item-label">Instagram</div><div class="contact-item-val">@sahil.jain006</div></div>
          </a>
        </div>
      </div>
    </section>
  </div>`;
},

/* ---- Project Card Helper ---- */
};

function projCard(p, i) {
  return `
    <div class="proj reveal reveal-d${Math.min(i%2+1,2)}">
      <div class="proj-grid">
        <div class="proj-visual" style="background:${p.mockGrad};">
          <span class="proj-badge ${p.badge}">${p.badge === 'ai' ? 'AI' : p.badge === 'fs' ? 'Full Stack' : 'Web'}</span>
          ${p.image ? `<img src="${p.image}" alt="${p.title}" class="proj-screenshot" />` : `
          <div class="proj-mockup">
            <div class="proj-mockup-bar"><span class="proj-mockup-dot"></span><span class="proj-mockup-dot"></span><span class="proj-mockup-dot"></span></div>
            <div class="proj-mockup-body">
              <div style="height:7px;border-radius:4px;background:rgba(255,255,255,0.06);width:70%;"></div>
              <div style="height:7px;border-radius:4px;background:rgba(255,255,255,0.06);width:100%;"></div>
              <div style="height:52px;border-radius:var(--r-sm);background:linear-gradient(135deg,rgba(184,173,255,0.12),rgba(253,164,175,0.08),rgba(153,246,228,0.06));"></div>
              <div style="height:7px;border-radius:4px;background:rgba(255,255,255,0.06);width:50%;"></div>
              <div style="height:7px;border-radius:4px;background:rgba(255,255,255,0.06);width:85%;"></div>
            </div>
          </div>`}
        </div>
        <div class="proj-info">
          <h3 class="proj-title">${p.title}</h3>
          <div class="proj-sub">${p.sub}</div>
          <p class="proj-desc">${p.desc}</p>
          <div class="proj-stack">${p.stack.map(s => `<span>${s}</span>`).join('')}</div>
          <div class="proj-btns">
            ${p.github ? `<a href="${p.github}" target="_blank" rel="noopener" class="proj-btn primary" data-magnetic>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              Code
            </a>` : ''}
            <a href="#" class="proj-btn secondary" data-magnetic onclick="return false;">Live Demo →</a>
          </div>
        </div>
      </div>
    </div>`;
}

/* ---- Resume Preview Modal ---- */
function openResumePreview() {
  const lb = document.getElementById('lightbox');
  const content = document.getElementById('lightbox-content');
  content.innerHTML = `
    <img src="assets/SAHIL RESUME.jpg" alt="Sahil Jain Resume" style="width:100%;max-height:85vh;object-fit:contain;display:block;border-radius:var(--r-lg);" />
    <div style="margin-top:20px;text-align:center;">
      <a href="assets/SAHIL RESUME.jpg" download="Sahil_Jain_Resume.jpg" class="btn btn-p" data-magnetic>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
        Download Resume
      </a>
    </div>`;
  lb.classList.add('active');
  document.body.style.overflow = 'hidden';
}

/* ---- Certificate Modal ---- */
function openCert(i) {
  const c = SITE.certifications[i];
  const lb = document.getElementById('lightbox');
  const content = document.getElementById('lightbox-content');
  content.innerHTML = c.image
    ? `<img src="${c.image}" alt="${c.title}" style="width:100%;display:block;border-radius:var(--r-xl);object-fit:contain;max-height:88vh;" />`
    : `<div style="padding:32px;text-align:center;"><h2 style="font-family:'Space Grotesk',sans-serif;font-size:22px;font-weight:700;margin-bottom:8px;">${c.title}</h2><p style="color:var(--ink-3);font-size:15px;">${c.desc}</p></div>`;
  lb.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('active');
  document.body.style.overflow = '';
}

function handleSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const btn = form.querySelector('.form-submit');
  btn.textContent = 'Sending...';
  btn.disabled = true;
  fetch(form.action, {
    method: 'POST',
    body: new FormData(form),
    headers: { 'Accept': 'application/json' }
  }).then(() => {
    btn.textContent = 'Message Sent!';
    btn.style.background = 'var(--emerald)';
    form.reset();
    setTimeout(() => { btn.textContent = 'Send Message'; btn.style.background = ''; btn.disabled = false; }, 3000);
  }).catch(() => {
    btn.textContent = 'Error — Try Again';
    btn.style.background = 'var(--rose)';
    setTimeout(() => { btn.textContent = 'Send Message'; btn.style.background = ''; btn.disabled = false; }, 3000);
  });
}
