// Menu mobile
document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Année universitaire en cours, calculée automatiquement (rentrée en septembre)
  var yearEl = document.querySelector("[data-academic-year]");
  if (yearEl) {
    var now = new Date();
    var month = now.getMonth(); // 0 = janvier
    var year = now.getFullYear();
    var startYear = month >= 7 ? year : year - 1; // à partir d'août on considère la nouvelle année universitaire
    yearEl.textContent = startYear + "–" + (startYear + 1);
  }

  // Thème clair / sombre
  var themeToggle = document.querySelector(".theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      var current = document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
      var next = current === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
      themeToggle.setAttribute("aria-label", next === "light" ? "Activer le thème sombre" : "Activer le thème clair");
    });
  }
});
