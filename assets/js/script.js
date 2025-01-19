function mainMenu() {
  const menu = document.querySelector(".main-menu ul");
  const menuIcon = document.querySelector(".toggle-menu");
  const menuItems = document.querySelectorAll(".main-menu ul li");
  const openIcon = document.querySelector(".open-icon");
  const closeIcon = document.querySelector(".close-icon");

  menuIcon.addEventListener("click", () => {
      if (menu.classList.contains("active")) {
          menuItems.forEach((item, index) => {
              setTimeout(() => {
                  item.classList.remove("visible");
              }, index * 100); 
          });

          setTimeout(() => {
              menu.classList.remove("active");
              openIcon.style.display = "inline-block";
              closeIcon.style.display = "none";
          }, menuItems.length * 100);
      } else {
          menu.classList.add("active");
          openIcon.style.display = "none";
          closeIcon.style.display = "inline-block";

          menuItems.forEach((item, index) => {
              setTimeout(() => {
                  item.classList.add("visible");
              }, index * 100); 
          });
      }
  });
}
mainMenu();
