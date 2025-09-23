// scripts/loadComponent.js
function loadComponent(id, url, callback) {
  fetch(url)
    .then((res) => res.text())
    .then((data) => {
      document.getElementById(id).innerHTML = data;
      if (callback) callback(); // run after load
    });
}

// Load navbar + run theme setup
loadComponent("navbar", "/components/navbarComp.html", () => {
  initThemeSwitcher();
});
loadComponent("hero", "/components/heroComp.html");
loadComponent("services", "/components/servicesComp.html");
loadComponent("about", "/components/aboutComp.html");

loadComponent("contact", "/components/contactComp.html");
loadComponent("footer", "/components/footerComp.html");
