/**
 * FLUVIA — main.js
 * Renderiza todo el contenido dinámico desde data.js
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ── WHATSAPP BUBBLE ─────────────────────────────────────────── */
  const waBubble = document.getElementById('wa-bubble');
  if (waBubble && DATA.team.whatsapp) {
    const waURL = `https://wa.me/${DATA.team.whatsapp}?text=${encodeURIComponent(DATA.team.whatsappMsg)}`;
    waBubble.innerHTML = `
      <div class="wa-tooltip">¡Hablemos de tu proyecto!</div>
      <a href="${waURL}" target="_blank" rel="noopener" class="wa-btn" aria-label="WhatsApp">
        <div class="wa-pulse"></div>
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    `;
  }

  /* ── MEMBERS ─────────────────────────────────────────────────── */
  const membersGrid = document.getElementById('members-grid');
  if (membersGrid) {
    membersGrid.innerHTML = DATA.members.map((m, i) => `
      <div class="member-card reveal reveal-delay-${i + 1}">
        <div class="member-photo-wrap">
          ${m.photo
            ? `<img src="${m.photo}" alt="${m.name}" onerror="this.parentElement.innerHTML='<span style=\\"font-size:2rem\\">${m.emoji}</span>'">`
            : `<span style="font-size:2rem">${m.emoji}</span>`
          }
        </div>
        <div class="member-role">${m.role}</div>
        <div class="member-name">${m.name}</div>
        <p class="member-bio">${m.bio}</p>
        <div class="member-tags">
          ${m.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
        <div class="member-links">
          ${m.linkedin ? `<a href="${m.linkedin}" target="_blank" rel="noopener" class="member-link">↗ LinkedIn</a>` : ''}
          ${m.github   ? `<a href="${m.github}"   target="_blank" rel="noopener" class="member-link">⌥ GitHub</a>`   : ''}
        </div>
      </div>
    `).join('');
  }

  /* ── SERVICES ────────────────────────────────────────────────── */
  const servicesGrid = document.getElementById('services-grid');
  if (servicesGrid) {
    servicesGrid.innerHTML = DATA.services.map((s, i) => `
      <div class="service-card${s.highlight ? ' highlight' : ''} reveal reveal-delay-${(i % 3) + 1}">
        <span class="service-icon">${s.icon}</span>
        <div class="service-title">${s.title}</div>
        <p class="service-desc">${s.desc}</p>
      </div>
    `).join('');
  }

  /* ── PROJECTS ────────────────────────────────────────────────── */
  const projectsGrid = document.getElementById('projects-grid');
  if (projectsGrid) {
    projectsGrid.innerHTML = DATA.projects.map((p, i) => `
      <div class="project-card reveal reveal-delay-${(i % 2) + 1}">
        <div class="project-media">
          ${p.media
            ? (p.mediaType === 'video'
                ? `<video src="${p.media}" muted loop playsinline preload="metadata"></video>`
                : `<img src="${p.media}" alt="${p.title}" loading="lazy">`)
            : `<div class="project-media-placeholder">
                 <span class="pm-icon">${projectIcon(p.category)}</span>
                 <span>${p.category}</span>
               </div>`
          }
        </div>
        <div class="project-body">
          <div class="project-meta">
            <span class="project-category">${p.category}</span>
            <span class="project-author">por ${p.author}</span>
          </div>
          <div class="project-title">${p.title}</div>
          <p class="project-desc">${p.desc}</p>
          <div class="project-footer">
            <div class="project-tags">
              ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
            </div>
            <div class="project-links">
              ${p.repo  ? `<a href="${p.repo}"  target="_blank" rel="noopener" class="icon-btn" title="GitHub">⌥</a>`  : ''}
              ${p.demo  ? `<a href="${p.demo}"  target="_blank" rel="noopener" class="icon-btn" title="Demo">↗</a>`    : ''}
            </div>
          </div>
        </div>
      </div>
    `).join('');

    // Auto-play videos on hover
    document.querySelectorAll('.project-card video').forEach(v => {
      v.closest('.project-card').addEventListener('mouseenter', () => v.play().catch(() => {}));
      v.closest('.project-card').addEventListener('mouseleave', () => { v.pause(); v.currentTime = 0; });
    });
  }

  /* ── STACK ───────────────────────────────────────────────────── */
  const stackGrid = document.getElementById('stack-grid');
  if (stackGrid) {
    stackGrid.innerHTML = DATA.stack.map((s, i) => `
      <div class="stack-item reveal" style="transition-delay:${(i * 0.04).toFixed(2)}s">
        <span class="si-icon">${s.icon}</span>
        <span>${s.name}</span>
      </div>
    `).join('');
  }

  /* ── GALLERY ─────────────────────────────────────────────────── */
  const galleryGrid = document.getElementById('gallery-grid');
  if (galleryGrid) {
    galleryGrid.innerHTML = DATA.events.map((e, i) => `
      <div class="gallery-item reveal reveal-delay-${(i % 3) + 1}">
        ${e.photo
          ? `<img src="${e.photo}" alt="${e.title}" loading="lazy">`
          : `<div class="gallery-placeholder"><span class="gp-icon">📷</span><span>Próximas fotos</span></div>`
        }
        <div class="gallery-overlay">
          <div>
            <div class="gallery-info-title">${e.title}</div>
            <div class="gallery-info-sub">${e.place} · ${e.date}</div>
          </div>
        </div>
      </div>
    `).join('');
  }

  /* ── FOOTER LINKS ────────────────────────────────────────────── */
  const ftLinks = document.getElementById('ft-member-links');
  if (ftLinks) {
    ftLinks.innerHTML = DATA.members.map(m => `
      ${m.github   ? `<a href="${m.github}"   target="_blank" rel="noopener">GitHub · ${m.name.split(' ')[0]}</a>`   : ''}
      ${m.linkedin ? `<a href="${m.linkedin}" target="_blank" rel="noopener">LinkedIn · ${m.name.split(' ')[0]}</a>` : ''}
    `).join('');
  }

  // Contact email
  const ftEmail = document.getElementById('ft-email');
  if (ftEmail) ftEmail.textContent = DATA.team.email;
  const ctEmail  = document.getElementById('ct-email');
  if (ctEmail) ctEmail.textContent = DATA.team.email;
  const ctWaLink = document.getElementById('ct-wa-link');
  if (ctWaLink) ctWaLink.href = `https://wa.me/${DATA.team.whatsapp}?text=${encodeURIComponent(DATA.team.whatsappMsg)}`;

  /* ── HELPERS ─────────────────────────────────────────────────── */
  function projectIcon(cat) {
    const map = {
      'Web App': '🌐', 'Web': '🌐', 'IA Generativa': '🤖',
      'Data Engineering': '📊', 'Mobile': '📱', 'API': '⚙️', 'Other': '💡'
    };
    return map[cat] || '💡';
  }

});
