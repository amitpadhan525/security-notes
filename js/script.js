/* =====================================================
   SecNotes — Main JavaScript
   Fixes: smooth page transitions, theme persistence,
   mobile sidebar, copy-code button
   ===================================================== */

/* ── PAGE TRANSITION ───────────────────────────────── */
// Inject the transition style once (no FOUC flash version needed — CSS handles it)
(function () {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes _pageIn {
            from { opacity: 0; transform: translateY(10px); }
            to   { opacity: 1; transform: translateY(0); }
        }
        body { animation: _pageIn 0.22s ease-out both; }
    `;
    document.head.appendChild(style);
})();

// Smooth exit before navigating to another page
document.addEventListener('click', function (e) {
    const link = e.target.closest('a');
    if (
        !link ||
        link.target === '_blank' ||
        link.href.startsWith('javascript:') ||
        link.href.startsWith('mailto:') ||
        link.href.startsWith('#') ||
        link.origin !== location.origin
    ) return;

    e.preventDefault();
    const dest = link.href;

    document.body.style.transition = 'opacity 0.14s ease, transform 0.14s ease';
    document.body.style.opacity = '0';
    document.body.style.transform = 'translateY(-6px)';

    setTimeout(() => { location.href = dest; }, 145);
}, true);

/* ── MOBILE SIDEBAR ────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
    const mobileToggle = document.getElementById('mobile-toggle');
    const sidebar = document.getElementById('sidebar');

    if (mobileToggle && sidebar) {
        mobileToggle.addEventListener('click', () => {
            sidebar.classList.toggle('open');
            const icon = mobileToggle.querySelector('i');
            if (sidebar.classList.contains('open')) {
                icon.classList.replace('ph-list', 'ph-x');
            } else {
                icon.classList.replace('ph-x', 'ph-list');
            }
        });
    }

    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768 && sidebar && sidebar.classList.contains('open')) {
            if (!sidebar.contains(e.target) && !mobileToggle.contains(e.target)) {
                sidebar.classList.remove('open');
                const icon = mobileToggle.querySelector('i');
                icon.classList.replace('ph-x', 'ph-list');
            }
        }
    });
});

/* ── COPY CODE BUTTON ──────────────────────────────── */
window.copyCode = function (button) {
    const pre = button.parentElement.nextElementSibling;
    const code = pre ? pre.querySelector('code') : null;
    if (!code) return;

    navigator.clipboard.writeText(code.innerText).then(() => {
        const original = button.innerHTML;
        button.innerHTML = '<i class="ph-check"></i> Copied!';
        button.style.color = 'var(--accent-secondary)';
        button.style.borderColor = 'var(--accent-secondary)';
        setTimeout(() => {
            button.innerHTML = original;
            button.style.color = '';
            button.style.borderColor = '';
        }, 2000);
    }).catch(() => {
        button.innerHTML = '<i class="ph-warning"></i> Error';
        setTimeout(() => { button.innerHTML = '<i class="ph-copy"></i> Copy'; }, 2000);
    });
};

/* ── THEME TOGGLE ──────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');

    // Sync UI with stored preference
    if (localStorage.getItem('theme') === 'light-mode') {
        document.body.classList.add('light-mode');
        document.documentElement.classList.add('light-mode');
        if (themeToggleBtn) themeToggleBtn.innerHTML = '<i class="ph-moon"></i> Dark Mode';
    } else {
        document.body.classList.remove('light-mode');
        document.documentElement.classList.remove('light-mode');
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            if (document.body.classList.contains('light-mode')) {
                document.body.classList.remove('light-mode');
                document.documentElement.classList.remove('light-mode');
                localStorage.setItem('theme', 'dark-mode');
                themeToggleBtn.innerHTML = '<i class="ph-sun"></i> Light Mode';
            } else {
                document.body.classList.add('light-mode');
                document.documentElement.classList.add('light-mode');
                localStorage.setItem('theme', 'light-mode');
                themeToggleBtn.innerHTML = '<i class="ph-moon"></i> Dark Mode';
            }
        });
    }
});
