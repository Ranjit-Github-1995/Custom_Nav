const mobile_Nav = document.querySelector(".mobile_nav");
const mobileFull = document.querySelector(".header");

const toggleNavbar = () => {
  mobileFull.classList.toggle("active");
}

mobile_Nav.addEventListener("click", () => toggleNavbar());

