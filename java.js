// ===============================
// JAVASCRIPT COMPLETO PARA A PÁGINA
// ===============================

document.addEventListener("DOMContentLoaded", () => {

  // ===============================
  // ZOOM EM QUALQUER IMAGEM
  // ===============================
  const zoomModalEl = document.getElementById("zoomModal");
  const zoomImg = document.getElementById("zoomedImg");
  const zoomText = document.getElementById("zoomedText");

  if (!zoomModalEl || !zoomImg || !zoomText) {
    console.error("❌ Erro: Elementos do zoom não encontrados no HTML.");
  } else {
    const zoomModal = new bootstrap.Modal(zoomModalEl);

    document.querySelectorAll(".zoomable").forEach(img => {
      img.addEventListener("click", () => {
        // Usa data-text se existir, senão alt
        zoomText.innerText = img.dataset.text || img.alt || "";
        zoomImg.src = img.src;
        zoomModal.show();
      });
    });
  }

  // ===============================
  // MUDAR COR DO TEMA PELAS BOLINHAS
  // ===============================
  document.querySelectorAll(".color-dot").forEach(dot => {
    dot.addEventListener("click", () => {
      // Muda a cor de fundo do body
      document.body.style.backgroundColor = dot.dataset.bg;

      // Remove a classe active de todas as bolinhas
      document.querySelectorAll(".color-dot").forEach(d => d.classList.remove("active"));

      // Adiciona active na clicada
      dot.classList.add("active");
    });
  });

  // ===============================
  // DEBUG PARA CONFERIR QUE O JS CARREGOU
  // ===============================
  console.log("✅ java.js carregado com sucesso!");
});

