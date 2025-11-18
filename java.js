// java.js
document.addEventListener("DOMContentLoaded", function () {

    // -----------------------------
    // Zoom nas imagens e botões "Saiba mais"
    // -----------------------------
    const zoomModalEl = document.getElementById('zoomModal');
    const zoomedImg = document.getElementById('zoomedImg');
    const zoomedText = document.getElementById('zoomedText');
    const zoomModal = new bootstrap.Modal(zoomModalEl);

    document.querySelectorAll('.zoomable').forEach(el => {
        el.addEventListener('click', function () {

            // Se for uma imagem, mostra a imagem
            if (this.tagName === 'IMG') {
                zoomedImg.src = this.src;
                zoomedImg.style.display = 'block';
            } else { // se for botão "Saiba mais", esconde imagem
                zoomedImg.style.display = 'none';
                zoomedImg.src = '';
            }

            // Texto do modal
            zoomedText.textContent = this.dataset.text || '';

            // Mostra modal
            zoomModal.show();
        });
    });

    // Limpa modal quando fechado
    zoomModalEl.addEventListener('hidden.bs.modal', function () {
        zoomedImg.src = '';
        zoomedImg.style.display = 'block'; // default
        zoomedText.textContent = '';
    });

    // -----------------------------
    // Bolinhas de cor
    // -----------------------------
    document.querySelectorAll('.color-dot').forEach(dot => {
        dot.addEventListener('click', function () {
            document.querySelectorAll('.color-dot').forEach(d => d.classList.remove('active'));
            this.classList.add('active');
            document.body.style.background = this.getAttribute('data-bg');
        });
    });

});

// -----------------------------
// Função para gerar iframe de mapa
// -----------------------------
function gerarMapaIframe(endereco) {
    // Substitui espaços por +, remove vírgulas e traços
    let enderecoFormatado = endereco.trim()
        .replace(/,/g, '')
        .replace(/-/g, '')
        .replace(/\s+/g, '+');

    let iframe = `<iframe src="https://www.google.com/maps?q=${enderecoFormatado}&output=embed" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`;
    return iframe;
}
document.querySelectorAll('.btn[data-text]').forEach(btn => {
    btn.addEventListener('click', function () {
        document.getElementById('modalText').textContent = this.getAttribute('data-text');
        new bootstrap.Modal(document.getElementById('textModal')).show();
    });
});
// Abrir imagens no zoom
document.querySelectorAll(".zoomable").forEach(img => {
    img.addEventListener("click", function () {
        const zoomedImg = document.getElementById("zoomedImg");
        zoomedImg.src = this.src;
        zoomedImg.alt = this.alt;
        const zoomModal = new bootstrap.Modal(document.getElementById("zoomModal"));
        zoomModal.show();
    });
});

// Abrir textos no modal de texto
document.querySelectorAll(".text-trigger").forEach(btn => {
    btn.addEventListener("click", function () {
        const modalText = document.getElementById("modalText");
        modalText.textContent = this.getAttribute("data-text") || "Informação não disponível.";
        const textModal = new bootstrap.Modal(document.getElementById("textModal"));
        textModal.show();
    });
});
