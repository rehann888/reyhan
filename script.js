const navbarNav = document.querySelector(".navbar-nav");
const menuLinks = navbarNav.querySelectorAll("a"); // Ambil semua tautan menu

// Ketika tautan menu di klik
menuLinks.forEach(link => {
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
