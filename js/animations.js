/**
 * FLUVIA — animations.js
 * Neural network particles, magnetic cursor, scroll reveal
 */

/* ── NEURAL NETWORK CANVAS ─────────────────────────────────────── */
(function initParticles() {
  const canvas = document.getElementById('canvas-particles');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, nodes = [], animId;

  const CONFIG = {
    count:         72,
    maxDist:       160,
    nodeRadius:    1.8,
    speed:         0.28,
    lineOpacity:   0.13,
    nodeOpacity:   0.5,
    colorCyan:     '0, 212, 255',
    colorViolet:   '123, 47, 255',
  };

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }

  function randomNode() {
    return {
      x:  Math.random() * W,
      y:  Math.random() * H,
      vx: (Math.random() - 0.5) * CONFIG.speed,
      vy: (Math.random() - 0.5) * CONFIG.speed,
      r:  CONFIG.nodeRadius + Math.random() * 1.2,
      hue: Math.random() > 0.6 ? CONFIG.colorViolet : CONFIG.colorCyan,
    };
  }

  function init() {
    resize();
    nodes = Array.from({ length: CONFIG.count }, randomNode);
  }

  let mouseX = -999, mouseY = -999;
  canvas.addEventListener('mousemove', e => {
    const r = canvas.getBoundingClientRect();
    mouseX = e.clientX - r.left;
    mouseY = e.clientY - r.top;
  });
  canvas.addEventListener('mouseleave', () => { mouseX = -999; mouseY = -999; });

  function draw() {
    ctx.clearRect(0, 0, W, H);

    // Draw connections
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const d  = Math.sqrt(dx * dx + dy * dy);
        if (d < CONFIG.maxDist) {
          const alpha = CONFIG.lineOpacity * (1 - d / CONFIG.maxDist);
          ctx.beginPath();
          ctx.strokeStyle = `rgba(${nodes[i].hue}, ${alpha})`;
          ctx.lineWidth   = 0.7;
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.stroke();
        }
      }
    }

    // Mouse repulsion + extra lines
    const MOUSE_R = 120;
    nodes.forEach(n => {
      const dx = n.x - mouseX;
      const dy = n.y - mouseY;
      const d  = Math.sqrt(dx * dx + dy * dy);
      if (d < MOUSE_R) {
        const force = (MOUSE_R - d) / MOUSE_R * 0.015;
        n.vx += (dx / d) * force;
        n.vy += (dy / d) * force;
        // Draw extra bright line to cursor
        ctx.beginPath();
        ctx.strokeStyle = `rgba(${n.hue}, ${0.35 * (1 - d / MOUSE_R)})`;
        ctx.lineWidth   = 1.2;
        ctx.moveTo(n.x, n.y);
        ctx.lineTo(mouseX, mouseY);
        ctx.stroke();
      }
    });

    // Draw nodes
    nodes.forEach(n => {
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${n.hue}, ${CONFIG.nodeOpacity})`;
      ctx.fill();

      // Update position
      n.x += n.vx;
      n.y += n.vy;

      // Speed damping
      n.vx *= 0.999;
      n.vy *= 0.999;

      // Boundary bounce
      if (n.x < 0 || n.x > W) n.vx *= -1;
      if (n.y < 0 || n.y > H) n.vy *= -1;
    });

    animId = requestAnimationFrame(draw);
  }

  window.addEventListener('resize', () => { resize(); });
  init();
  draw();
})();


/* ── MAGNETIC CURSOR ───────────────────────────────────────────── */
(function initCursor() {
  const dot  = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  if (!dot || !ring) return;

  let mx = 0, my = 0;
  let rx = 0, ry = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx + 'px';
    dot.style.top  = my + 'px';
  });

  // Smooth ring follow
  (function animate() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(animate);
  })();

  // Hover state on interactive elements
  const HOVER_SEL = 'a, button, .btn, .member-card-container, .service-card, .project-card, .stack-item, .gallery-item';
  document.querySelectorAll(HOVER_SEL).forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });

  // Hide cursor when leaving window
  document.addEventListener('mouseleave', () => {
    dot.style.opacity  = '0';
    ring.style.opacity = '0';
  });
  document.addEventListener('mouseenter', () => {
    dot.style.opacity  = '1';
    ring.style.opacity = '1';
  });
})();


/* ── SCROLL REVEAL ─────────────────────────────────────────────── */
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  // Reintento: Esperamos 300ms para que main.js termine de renderizar los datos
  setTimeout(() => {
    const targets = document.querySelectorAll('.reveal');
    console.log(`Animaciones: Se encontraron ${targets.length} elementos para animar.`);
    targets.forEach(el => observer.observe(el));
  }, 300);
}
initReveal();


/* ── CARD 3D TILT ──────────────────────────────────────────────── */
(function initTilt() {
  const TILT_MAX = 8; // degrees

  function applyTilt(card) {
    card.addEventListener('mousemove', e => {
      const rect   = card.getBoundingClientRect();
      const cx     = rect.left + rect.width  / 2;
      const cy     = rect.top  + rect.height / 2;
      const dx     = (e.clientX - cx) / (rect.width  / 2);
      const dy     = (e.clientY - cy) / (rect.height / 2);
      const rotX   = -dy * TILT_MAX;
      const rotY   =  dx * TILT_MAX;
      card.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-6px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  }

  document.querySelectorAll('.project-card, .member-card-container').forEach(applyTilt);
})();


/* ── ACTIVE NAV HIGHLIGHT ──────────────────────────────────────── */
(function initNavHighlight() {
  const sections  = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav-links a');
  const nav       = document.getElementById('nav');

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(a => {
          a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id);
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(s => io.observe(s));

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
})();


/* ── MOBILE NAV ────────────────────────────────────────────────── */
(function initMobileNav() {
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');
  if (!hamburger || !mobileNav) return;

  hamburger.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  mobileNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      hamburger.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
})();
