// ============================================================
// ROUTER
// ============================================================
let currentRoute = '/';

function navigate(path) {
    if (path === currentRoute) return;
    // Loading overlay
    const loading = document.createElement('div');
    loading.style.cssText = `
        position:fixed;inset:0;z-index:9998;
        background:rgba(255,255,255,0.7);backdrop-filter:blur(8px);
        display:flex;align-items:center;justify-content:center;
        flex-direction:column;gap:16px;
        animation:fadeIn 0.3s ease;
    `;
    loading.innerHTML = `
        <div class="loader-ring" style="width:50px;height:50px;border-width:3px;"></div>
        <p style="color:#666;font-weight:500;">Đang tải...</p>
    `;
    document.body.appendChild(loading);

    setTimeout(() => {
        // Hide all pages
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        // Show target
        const targetId = path === '/' ? 'page-home' : 'page-' + path.slice(1);
        const target = document.getElementById(targetId);
        if (target) target.classList.add('active');

        // Update nav
        document.querySelectorAll('nav a').forEach(a => {
            a.classList.toggle('active', a.dataset.route === path);
        });

        currentRoute = path;
        history.pushState({ route: path }, '', path);

        // Close mobile menu
        const nav = document.getElementById('mainNav');
        if (nav) nav.classList.remove('open');

        // Remove loading
        loading.remove();

        // Scroll reveal
        document.querySelectorAll('.reveal').forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 80) el.classList.add('visible');
        });
    }, 400);
}

// Nav click
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('nav a[data-route]').forEach(a => {
        a.addEventListener('click', (e) => {
            e.preventDefault();
            navigate(a.dataset.route);
        });
    });

    // Back/forward
    window.addEventListener('popstate', (e) => {
        if (e.state && e.state.route) navigate(e.state.route);
    });

    // Mobile menu toggle
    const toggle = document.getElementById('menuToggle');
    if (toggle) {
        toggle.addEventListener('click', function() {
            document.getElementById('mainNav').classList.toggle('open');
        });
    }
});

// ============================================================
// WATER RIPPLE EFFECT on all buttons
// ============================================================
document.addEventListener('click', function(e) {
    const btn = e.target.closest('.btn-ripple');
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 1.2;
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 700);
});
