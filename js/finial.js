const finial_ham = document.querySelector(".mobile_nav");
const full_ham = document.querySelector(".header");

const toggleNavbar = () => {
  full_ham.classList.toggle("active");
}

finial_ham.addEventListener("click", () => toggleNavbar());