// Theme persistence and toggle
(function setupThemeToggle() {
  const root = document.documentElement;
  const toggleButton = document.getElementById('themeToggle');
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light' || savedTheme === 'dark') {
    root.setAttribute('data-theme', savedTheme);
    updateToggleIcon(savedTheme);
  } else {
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    const theme = prefersLight ? 'light' : 'dark';
    root.setAttribute('data-theme', theme);
    updateToggleIcon(theme);
  }

  toggleButton?.addEventListener('click', () => {
    const current = root.getAttribute('data-theme') || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    updateToggleIcon(next);
  });

  function updateToggleIcon(theme) {
    const iconEl = toggleButton?.querySelector('.icon');
    if (!iconEl) return;
    iconEl.textContent = theme === 'dark' ? '🌙' : '☀️';
    toggleButton.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
  }

  // Mobile menu
  menuToggle?.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });
  // Scrollspy for active nav link
  const anchors = Array.from(document.querySelectorAll('.nav-links a'));
  const sections = anchors
    .map(a => document.querySelector(a.getAttribute('href')))
    .filter(Boolean);
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const id = '#' + entry.target.id;
      const link = anchors.find(a => a.getAttribute('href') === id);
      if (!link) return;
      if (entry.isIntersecting) {
        anchors.forEach(a => a.classList.remove('active'));
        link.classList.add('active');
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px', threshold: 0.01 });
  sections.forEach(sec => observer.observe(sec));
})();

// Footer year
document.getElementById('year').textContent = String(new Date().getFullYear());

// Back to top button
(function toTopButton() {
  const btn = document.getElementById('toTop');
  if (!btn) return;
  const onScroll = () => {
    if (window.scrollY > 280) btn.hidden = false; else btn.hidden = true;
    // class toggle for fade
    if (window.scrollY > 280) btn.classList.add('show'); else btn.classList.remove('show');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
})();

// Stars-only cursor trail
(function cursorStars() {
  // Remove old aura element if present
  const oldAura = document.getElementById('cursorAura');
  if (oldAura) oldAura.remove();

  window.addEventListener('mousemove', (e) => {
    emitStars(e.clientX, e.clientY);
  });

  function emitStars(x, y) {
    const count = 7; // emit more stars per move
    for (let i = 0; i < count; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = '0px';
      star.style.top = '0px';
      star.style.setProperty('--x', x + 'px');
      star.style.setProperty('--y', y + 'px');
      const angle = Math.random() * Math.PI * 2;
      const distance = 12 + Math.random() * 44;
      star.style.setProperty('--dx', Math.cos(angle) * distance + 'px');
      star.style.setProperty('--dy', Math.sin(angle) * distance + 'px');
      // randomize size and lifetime slightly
      const size = 4 + Math.random() * 6;
      star.style.width = size + 'px';
      star.style.height = size + 'px';
      const life = 650 + Math.random() * 450;
      document.body.appendChild(star);
      setTimeout(() => star.remove(), life);
    }
  }
})();

// (Removed) ML demo code

// Blog loader (markdown files in /blogs with a simple index)
(function blogLoader() {
  const blogListEl = document.getElementById('blogList');
  const viewer = document.getElementById('blogViewer');
  const viewTitle = document.getElementById('blogViewTitle');
  const viewContent = document.getElementById('blogViewContent');
  const backBtn = document.getElementById('backToList');
  if (!blogListEl) return;

  const posts = [
    { slug: 'learning-sql-practical', title: 'Learning SQL the Practical Way', excerpt: 'Joins, indexes, and readable queries.', date: '2025-01-05' },
    { slug: 'tfjs-first-steps', title: 'First Steps with TensorFlow.js', excerpt: 'From tensors to training loops.', date: '2025-02-10' }
  ];

  function renderList() {
    viewer.hidden = true;
    blogListEl.innerHTML = '';
    for (const post of posts) {
      const art = document.createElement('article');
      art.className = 'note';
      const h3 = document.createElement('h3'); h3.className = 'note-title'; h3.textContent = post.title;
      const p = document.createElement('p'); p.className = 'note-excerpt'; p.textContent = post.excerpt;
      const a = document.createElement('a'); a.href = `#blog/${post.slug}`; a.className = 'note-link'; a.textContent = 'Read →';
      art.append(h3, p, a);
      blogListEl.appendChild(art);
    }
  }

  async function showPost(slug) {
    try {
      const res = await fetch(`blogs/${slug}.md`, { cache: 'no-store' });
      if (!res.ok) throw new Error('Not found');
      const md = await res.text();
      viewTitle.textContent = posts.find(p => p.slug === slug)?.title || '';
      viewContent.innerHTML = window.marked ? marked.parse(md) : `<pre>${md}</pre>`;
      viewer.hidden = false;
      viewer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } catch (e) {
      viewTitle.textContent = 'Post not found';
      viewContent.textContent = '';
      viewer.hidden = false;
    }
  }

  function handleHash() {
    const hash = location.hash;
    const match = hash.match(/^#blog\/(.+)$/);
    if (match) {
      showPost(match[1]);
    } else {
      renderList();
    }
  }

  backBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    location.hash = '#blog';
    renderList();
  });

  window.addEventListener('hashchange', handleHash);
  handleHash();
})();

// (AI Chat completely removed)


