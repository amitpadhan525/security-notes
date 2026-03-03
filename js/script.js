/* =====================================================
   SecNotes — Main JavaScript
   Features: page transitions, theme persistence,
   mobile sidebar, copy-code, sidebar search,
   animated stat counters
   ===================================================== */

/* ── PAGE TRANSITION ───────────────────────────────── */
(function () {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes _pageIn {
            from { opacity: 0; transform: translateY(12px); }
            to   { opacity: 1; transform: translateY(0); }
        }
        body { animation: _pageIn 0.3s cubic-bezier(0.4, 0, 0.2, 1) both; }
    `;
    document.head.appendChild(style);
})();

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

    document.body.style.transition = 'opacity 0.15s ease, transform 0.15s ease';
    document.body.style.opacity = '0';
    document.body.style.transform = 'translateY(-8px)';

    setTimeout(() => { location.href = dest; }, 160);
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

        document.addEventListener('click', (e) => {
            if (window.innerWidth <= 768 && sidebar.classList.contains('open')) {
                if (!sidebar.contains(e.target) && !mobileToggle.contains(e.target)) {
                    sidebar.classList.remove('open');
                    const icon = mobileToggle.querySelector('i');
                    icon.classList.replace('ph-x', 'ph-list');
                }
            }
        });
    }

    /* ── SIDEBAR SEARCH ──────────────────────────────── */
    const searchInput = document.getElementById('sidebar-search-input');
    if (searchInput) {
        searchInput.addEventListener('input', () => {
            const query = searchInput.value.toLowerCase().trim();
            const navItems = document.querySelectorAll('.nav-item');
            const sections = document.querySelectorAll('.nav-section');

            if (!query) {
                navItems.forEach(item => item.style.display = '');
                sections.forEach(section => section.style.display = '');
                return;
            }

            sections.forEach(section => {
                let hasVisible = false;
                section.querySelectorAll('.nav-item').forEach(item => {
                    const text = item.textContent.toLowerCase();
                    const match = text.includes(query);
                    item.style.display = match ? '' : 'none';
                    if (match) hasVisible = true;
                });
                // Keep the section header visible if any item matches
                const sectionTitle = section.querySelector('.section-title');
                if (sectionTitle) sectionTitle.style.opacity = hasVisible ? '1' : '0.3';
            });
        });
    }

    /* ── ANIMATED STAT COUNTERS ──────────────────────── */
    const statNumbers = document.querySelectorAll('.stat-number');

    if (statNumbers.length > 0) {
        const countUp = (el) => {
            const text = el.textContent;
            const num = parseInt(text);
            const suffix = text.replace(/[0-9]/g, '');
            if (isNaN(num)) return;

            const duration = 900;
            const startTime = performance.now();

            const animate = (currentTime) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                // Ease-out cubic
                const eased = 1 - Math.pow(1 - progress, 3);
                el.textContent = Math.round(eased * num) + suffix;
                if (progress < 1) requestAnimationFrame(animate);
            };

            requestAnimationFrame(animate);
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    countUp(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        statNumbers.forEach(el => observer.observe(el));
    }

    /* ── THEME TOGGLE ────────────────────────────────── */
    const themeToggleBtn = document.getElementById('theme-toggle');

    if (localStorage.getItem('theme') === 'light-mode') {
        document.body.classList.add('light-mode');
        document.documentElement.classList.add('light-mode');
        if (themeToggleBtn) themeToggleBtn.innerHTML = '<i class="ph-moon"></i> Dark Mode';
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

/* ── COPY CODE BUTTON ──────────────────────────────── */
window.copyCode = function (button) {
    const pre = button.parentElement.nextElementSibling;
    const code = pre ? pre.querySelector('code') : null;
    if (!code) return;

    navigator.clipboard.writeText(code.innerText).then(() => {
        const original = button.innerHTML;
        button.innerHTML = '<i class="ph-check"></i> Copied!';
        button.style.color = '#34d399';
        button.style.borderColor = 'rgba(52,211,153,0.4)';
        button.style.background = 'rgba(52,211,153,0.08)';
        setTimeout(() => {
            button.innerHTML = original;
            button.style.color = '';
            button.style.borderColor = '';
            button.style.background = '';
        }, 2000);
    }).catch(() => {
        button.innerHTML = '<i class="ph-warning"></i> Error';
        setTimeout(() => { button.innerHTML = '<i class="ph-copy"></i> Copy'; }, 2000);
    });
};
