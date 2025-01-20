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

        // Добавяне на "active" към текущия линк
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
  video.setAttribute('src', 'http://localhost:5500/assets/video/video.mp4');
  video.setAttribute('autoplay', true);
  video.setAttribute('loop', true);
  video.setAttribute('muted', true);
  video.setAttribute('playsinline', true);

  hero.appendChild(video);

  // Опит за стартиране на видеото
  video.play().catch(error => {
      console.error('Видеото не можа да стартира автоматично:', error);
  });
}

addVideoToHero();
