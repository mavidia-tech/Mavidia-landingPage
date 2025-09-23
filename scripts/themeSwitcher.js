// scripts/themeSwitcher.js
function initThemeSwitcher() {
  const toggleBtn = document.getElementById("theme-toggle");
  const html = document.documentElement;

  if (!toggleBtn) return; // safety check

  // Set initial theme
  if (!html.hasAttribute("data-theme")) {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      html.setAttribute("data-theme", "dark");
    } else {
      html.setAttribute("data-theme", "light");
    }
  }

  toggleBtn.addEventListener("click", () => {
    if (html.getAttribute("data-theme") === "dark") {
      html.setAttribute("data-theme", "light");
      toggleBtn.innerHTML = `<i class="bi bi-moon"></i>`;
    } else {
      html.setAttribute("data-theme", "dark");
      toggleBtn.innerHTML = `<i class="bi bi-sun"></i>`;
    }
  });
}
