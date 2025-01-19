function mainMenu() {
  const menu = document.querySelector(".main-menu ul");
  const menuIcon = document.querySelector(".toggle-menu");
  const openIcon = document.querySelector(".open-icon");
  const closeIcon = document.querySelector(".close-icon");
  const menuItems = document.querySelectorAll(".main-menu ul li");

  menuIcon.addEventListener("click", () => {
    if (menu.classList.contains("active")) {
      menuItems.forEach((item, index) => {
        setTimeout(() => {
          item.classList.remove("visible");
        }, index * 100);
      });

      setTimeout(() => {
        menu.style.maxHeight = "0";
        setTimeout(() => menu.classList.remove("active"), 300);
        openIcon.style.display = "inline-block";
        closeIcon.style.display = "none";
      }, menuItems.length * 100);
    } else {
      menu.classList.add("active");
      menu.style.maxHeight = menu.scrollHeight + "px";

      menuItems.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add("visible");
        }, index * 100);
      });

      openIcon.style.display = "none";
      closeIcon.style.display = "inline-block";
    }
    document.body.style.overflow = menu.classList.contains("active") ? "hidden" : "auto";
  });
}
mainMenu();

function highlightActiveLink() {
  const menuLinks = document.querySelectorAll('.main-menu ul li a');
  const currentPath = window.location.pathname.replace(/\/$/, "").toLowerCase();

  menuLinks.forEach(link => {
      let linkPath = link.getAttribute('href').replace(/\/$/, "").toLowerCase();

      if (!linkPath.startsWith("/")) {
          linkPath = "/" + linkPath;
      }

      if (linkPath === currentPath) {
          link.classList.add('active');
      }
  });
}
highlightActiveLink();


function removeInlineStylesOnDesktop() {
  const menu = document.querySelector(".main-menu ul");
  const menuIcon = document.querySelector(".toggle-menu");
  const viewportWidth = window.innerWidth;

  if (viewportWidth > 1200 && menu) {
      menu.style.maxHeight = "";
      menu.classList.remove("active");
      if (menuIcon) {
          const openIcon = document.querySelector(".open-icon");
          const closeIcon = document.querySelector(".close-icon");
          if (openIcon && closeIcon) {
              openIcon.style.display = "inline-block";
              closeIcon.style.display = "none";
          }
      }
      document.body.style.overflow = "auto";
  }
}
removeInlineStylesOnDesktop();
window.addEventListener("resize", removeInlineStylesOnDesktop);
