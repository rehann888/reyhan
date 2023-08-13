const navbarNav = document.querySelector(".navbar-nav");
const menuLink = document.getElementById("menu");

// Ketika tautan menu di klik
menuLink.onclick = (event) => {
  event.preventDefault(); // Mencegah tautan mengarahkan ke halaman lain
  navbarNav.classList.toggle("active");
};

// Event listener untuk mengklik di luar menu
document.addEventListener("click", (event) => {
  if (!navbarNav.contains(event.target) && !menuLink.contains(event.target)) {
    navbarNav.classList.remove("active");
  }
});

