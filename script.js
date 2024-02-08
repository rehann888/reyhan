const navbarNav = document.querySelector(".navbar-nav");
const menuLinks = navbarNav.querySelectorAll("a"); // Ambil semua tautan menu

// Ketika tautan menu di klik
menuLinks.forEach((link) => {
  link.onclick = () => {
    navbarNav.classList.remove("active"); // Tutup menu hamburger
  };
});

// Event listener untuk mengklik di luar menu
document.addEventListener("click", (event) => {
  if (!navbarNav.contains(event.target)) {
    navbarNav.classList.remove("active");
  }
});

const menuLink = document.getElementById("menu");

// Ketika tautan menu di klik
menuLink.onclick = (event) => {
  event.preventDefault(); // Mencegah tautan mengarahkan ke halaman lain
  navbarNav.classList.toggle("active");
  event.stopPropagation(); // Mencegah penyebaran event ke atas (dokumen)
};

// Event listener khusus untuk mengklik di dalam menu (untuk mencegah penutupan)
navbarNav.addEventListener("click", (event) => {
  event.stopPropagation(); // Mencegah penyebaran event ke atas (dokumen)
});

function showTechStack() {
  document.getElementById("techStack").style.display = "block";
  document.getElementById("tools").style.display = "none";
  document.querySelector(".options .oke.active").classList.remove("active");
  document.querySelector(".options .oke:nth-child(1)").classList.add("active");
}

function showTools() {
  document.getElementById("techStack").style.display = "none";
  document.getElementById("tools").style.display = "block";
  document.querySelector(".options .oke.active").classList.remove("active");
  document.querySelector(".options .oke:nth-child(2)").classList.add("active");
}

// Menambahkan kelas active ke button Tech Stack saat halaman dimuat
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".options .oke:nth-child(1)").classList.add("active");
});

function showTechStack() {
  document.getElementById("techStack").style.display = "block";
  document.getElementById("tools").style.display = "none";

  // Menghapus kelas active dari button sebelumnya dan menambahkannya ke button Tech Stack
  document.querySelector(".options .oke.active").classList.remove("active");
  document.querySelector(".options .oke:nth-child(1)").classList.add("active");
}

function showTools() {
  document.getElementById("techStack").style.display = "none";
  document.getElementById("tools").style.display = "block";

  // Menghapus kelas active dari button sebelumnya dan menambahkannya ke button Tools
  document.querySelector(".options .oke.active").classList.remove("active");
  document.querySelector(".options .oke:nth-child(2)").classList.add("active");
}
