document.addEventListener("DOMContentLoaded", () => {
    const nodes = document.querySelectorAll(".node");
    const modal = document.getElementById("detailsModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalDesc = document.getElementById("modalDesc");
    const closeBtn = document.querySelector(".close-btn");

    // Menangani Klik pada Kotak Organigram
    nodes.forEach(node => {
        node.addEventListener("click", () => {
            const role = node.getAttribute("data-role");
            const desc = node.getAttribute("data-desc");

            modalTitle.innerText = role;
            modalDesc.innerText = desc;
            modal.style.display = "block";
        });
    });

    // Menutup Modal saat tombol 'X' diklik
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Menutup Modal saat klik di luar area modal content
    window.addEventListener("click", (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});
