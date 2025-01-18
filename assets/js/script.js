// Вземане на елементите
const menu = document.querySelector(".main-menu ul");
const menuIcon = document.querySelector(".toggle-menu");
const openIcon = document.querySelector(".open-icon");
const closeIcon = document.querySelector(".close-icon");

// Добавяне на събитие за клик
menuIcon.addEventListener("click", () => {
  menu.classList.toggle("active"); // Превключва класа active на UL
  openIcon.style.display = menu.classList.contains("active")
    ? "none"
    : "inline-block";
  closeIcon.style.display = menu.classList.contains("active")
    ? "inline-block"
    : "none";
});

document.querySelector(".toggle-menu").addEventListener("click", async () => {
    const menu = document.querySelector(".main-menu ul");
    const links = Array.from(document.querySelectorAll(".main-menu ul li"));
    const delayPerLink = 100; // Закъснение за всяка връзка (ms)
    const animationDuration = 300; // Време за анимация на всяка връзка (ms)
  
    if (menu.classList.contains("open")) {
      await closeMenu(menu, links, delayPerLink, animationDuration);
    } else {
      openMenu(menu, links, delayPerLink);
    }
  });
  
  function openMenu(menu, links, delayPerLink) {
    menu.style.maxHeight = "500px"; // Фиксирана височина
    menu.classList.add("open");
    links.forEach((link, index) => {
      setTimeout(() => {
        link.style.opacity = "1";
        link.style.transform = "translateY(0)";
      }, index * delayPerLink);
    });
  }
  
  function closeMenu(menu, links, delayPerLink, animationDuration) {
    return new Promise((resolve) => {
      // Скриваме връзките последователно
      links.forEach((link, index) => {
        setTimeout(() => {
          link.style.opacity = "0";
          link.style.transform = "translateY(-20px)";
        }, index * delayPerLink);
      });
  
      // Изчакваме последната връзка да приключи
      const totalDelay = (links.length - 1) * delayPerLink + animationDuration;
      setTimeout(() => {
        menu.style.maxHeight = "0"; // Скриваме менюто
        menu.classList.remove("open");
        resolve();
      }, totalDelay);
    });
  }    

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
