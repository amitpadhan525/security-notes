document.addEventListener("DOMContentLoaded", () => {
  // Mobile Toggle
  const mobileToggle = document.getElementById("mobile-toggle");
  const sidebar = document.getElementById("sidebar");
  if (mobileToggle && sidebar) {
    mobileToggle.addEventListener("click", () => {
      sidebar.classList.toggle("open");
    });
  }

  // Search Logic
  const searchInput = document.getElementById("sidebar-search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const term = e.target.value.toLowerCase().trim();
      const items = document.querySelectorAll(".nav-item");
      const sections = document.querySelectorAll(".nav-section");

      if (!term) {
        items.forEach(i => i.style.display = "");
        sections.forEach(s => s.style.display = "");
        document.querySelectorAll(".section-title").forEach(t => t.style.opacity = "1");
        return;
      }

      sections.forEach(section => {
        let hasMatch = false;
        section.querySelectorAll(".nav-item").forEach(item => {
          const match = item.textContent.toLowerCase().includes(term);
          item.style.display = match ? "" : "none";
          if (match) hasMatch = true;
        });
        const title = section.querySelector(".section-title");
        if (title) title.style.opacity = hasMatch ? "1" : "0.2";
      });
    });
  }

  // Tabs Logic
  window.switchTab = function(tab) {
    document.querySelectorAll(".qr-tab").forEach(t => t.classList.remove("active"));
    document.querySelectorAll(".qr-panel").forEach(p => p.classList.remove("active"));
    const selectedTab = document.getElementById("tab-" + tab);
    const selectedPanel = document.getElementById("panel-" + tab);
    if (selectedTab) selectedTab.classList.add("active");
    if (selectedPanel) selectedPanel.classList.add("active");
  };

  // Theme Toggle
  const themeToggle = document.getElementById("theme-toggle");
  const currentTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", currentTheme);
  if (themeToggle) {
    themeToggle.textContent = currentTheme === "light" ? "Switch to Dark" : "Switch to Light";
    themeToggle.addEventListener("click", () => {
      const newTheme = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
      themeToggle.textContent = newTheme === "light" ? "Switch to Dark" : "Switch to Light";
    });
  }

  // Copy Code
  window.copyCode = function(btn) {
    const code = btn.closest(".code-wrapper").querySelector("code").innerText;
    navigator.clipboard.writeText(code).then(() => {
      const originalText = btn.textContent;
      btn.textContent = "Copied!";
      setTimeout(() => btn.textContent = originalText, 2000);
    });
  };
});