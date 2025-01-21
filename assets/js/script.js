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

function highlightActiveLink() {
    const menuLinks = document.querySelectorAll(".main-menu ul li a");
    const currentPath = window.location.pathname.replace(/\/$/, "").toLowerCase();

    menuLinks.forEach(link => {
        let linkPath = link.getAttribute("href").replace(/\/$/, "").toLowerCase();

        if (!linkPath.startsWith("/")) {
            linkPath = "/" + linkPath;
        }

        if (currentPath.includes(linkPath)) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
}
highlightActiveLink();

function addVideoToHero() {
  const hero = document.querySelector('.hero');

  if (!hero) {
      console.error('Елементът .hero не съществува!');
      return;
  }

  const video = document.createElement('video');
  video.src = 'assets/video/background-video.mp4'; 
  video.autoplay = true; 
  video.loop = true; 
  video.muted = true; 
  video.playsInline = true; 
  video.preload = 'auto'; 

  video.addEventListener('canplay', () => {
      video.play().catch(error => {
          console.error('Грешка при стартиране на видеото:', error);
      });
  });
  hero.appendChild(video);
}

addVideoToHero();