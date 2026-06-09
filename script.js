document.addEventListener("DOMContentLoaded", () => {
    const nodes = document.querySelectorAll(".node");
    const modal = document.getElementById("detailsModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalDesc = document.getElementById("modalDesc");
    const closeBtn = document.querySelector(".close-btn");

    // Tangkap aksi klik di setiap kotak jabatan
    nodes.forEach(node => {
        node.addEventListener("click", () => {
            const role = node.getAttribute("data-role");
            const desc = node.getAttribute("data-desc");

            modalTitle.innerText = role;
            modalDesc.innerText = desc;
            modal.style.display = "block";
        });
    });

    // Tutup modal saat menekan tombol silang (X)
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Tutup modal saat area luar diklik
    window.addEventListener("click", (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});
