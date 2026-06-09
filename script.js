document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("detailsModal");
    const modalBadge = document.getElementById("modalBadge");
    const modalTitle = document.getElementById("modalTitle");
    const modalDesc = document.getElementById("modalDesc");
    const closeBtn = document.querySelector(".close-btn");

    // 1. KLIK PADA KOTAK JABATAN (NODE)
    const nodes = document.querySelectorAll(".node");
    nodes.forEach(node => {
        node.addEventListener("click", () => {
            const role = node.getAttribute("data-role");
            const desc = node.getAttribute("data-desc");

            modalBadge.innerText = "Jabatan / Struktur";
            modalBadge.style.backgroundColor = "#e1f5fe";
            modalBadge.style.color = "#0288d1";
            
            modalTitle.innerText = role;
            modalDesc.innerText = desc;
            modal.style.display = "block";
        });
    });

    // 2. KLIK PADA GARIS HUBUNGAN (SVG PATH)
    const lines = document.querySelectorAll(".line");
    lines.forEach(line => {
        line.addEventListener("click", (e) => {
            // Mencegah bentrokan event
            e.stopPropagation(); 
            
            const type = line.getAttribute("data-type");
            const info = line.getAttribute("data-info");

            modalBadge.innerText = "Hubungan Organisasi";
            modalBadge.style.backgroundColor = "#ffe8e8";
            modalBadge.style.color = "#c0392b";

            modalTitle.innerText = type;
            modalDesc.innerText = info;
            modal.style.display = "block";
        });
    });

    // Fungsi Penutup Modal
    closeBtn.addEventListener("click", () => { modal.style.display = "none"; });
    window.addEventListener("click", (e) => {
        if (e.target == modal) { modal.style.display = "none"; }
    });
});
