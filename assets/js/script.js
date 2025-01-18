const menu = document.querySelector(".main-menu ul");
const menuIcon = document.querySelector(".toggle-menu");
const openIcon = document.querySelector(".open-icon");
const closeIcon = document.querySelector(".close-icon");

menuIcon.addEventListener("click", () => {
  menu.classList.toggle("active"); // Превключва класа active на UL
  openIcon.style.display = menu.classList.contains("active")
    ? "none"
    : "inline-block";
  closeIcon.style.display = menu.classList.contains("active")
    ? "inline-block"
    : "none";
});


function highlightActiveLink() {
  const currentPage = window.location.pathname;

  const menuLinks = document.querySelectorAll(".main-menu ul li a");

  menuLinks.forEach((link) => link.classList.remove("active"));

  menuLinks.forEach((link) => {
    if (link.getAttribute("href") === currentPage.split("/").pop()) {
      link.classList.add("active");
    }
  });

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuLinks.forEach((l) => l.classList.remove("active"));
      link.classList.add("active");
    });
  });
}

highlightActiveLink();
