document.addEventListener("DOMContentLoaded", function () {

  // ===== ZOOM GLOBAL =====
  const zoomModalEl = document.getElementById("zoomModal");
  const zoomImg = document.getElementById("zoomedImg");
  const zoomText = document.getElementById("zoomedText");

  if (zoomModalEl) {
    const zoomModal = new bootstrap.Modal(zoomModalEl);

    document.querySelectorAll(".zoomable").forEach(img => {
      img.addEventListener("click", () => {
        zoomImg.src = img.src;

        // pega nome do tratamento
        zoomText.textContent =
          img.dataset.text ||
          img.closest(".card")?.querySelector(".card-title")?.innerText ||
          img.alt ||
          "";

        zoomModal.show();
      });
    });
  }

  // ===== BOLINHAS DE COR =====
  document.querySelectorAll(".color-dot").forEach(dot => {
    dot.addEventListener("click", () => {
      document.body.style.backgroundColor = dot.dataset.bg;
      document.querySelectorAll(".color-dot").forEach(d => d.classList.remove("active"));
      dot.classList.add("active");
    });
  });

  console.log("✅ JS carregado corretamente");
});
