document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-year]").forEach(el => el.textContent = new Date().getFullYear());

  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const opened = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(opened));
      toggle.textContent = opened ? "✕" : "☰";
    });
  }

  const search = document.querySelector("#product-search");
  const cards = [...document.querySelectorAll(".product-card")];
  const noResults = document.querySelector("#no-results");
  if (search && cards.length) {
    search.addEventListener("input", () => {
      const term = search.value.trim().toLowerCase();
      let visible = 0;
      cards.forEach(card => {
        const match = (card.dataset.name || "").toLowerCase().includes(term);
        card.hidden = !match;
        if (match) visible++;
      });
      if (noResults) noResults.hidden = visible !== 0;
    });
  }

  const form = document.querySelector("#contact-form");
  if (form) {
    form.addEventListener("submit", event => {
      event.preventDefault();
      const feedback = document.querySelector("#form-feedback");
      if (form.reportValidity()) {
        feedback.textContent = "Contoh formulir berhasil diperiksa di browser. Pesan belum dikirim karena backend belum terhubung.";
        form.reset();
      }
    });
  }
});