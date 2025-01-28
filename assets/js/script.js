function mainMenu() {
    const toggleMenu = document.querySelector(".toggle-menu");
    const menu = document.querySelector(".main-menu ul");
    const menuIcon = document.querySelector(".toggle-menu");
    const menuItems = document.querySelectorAll(".main-menu ul li");
    const openIcon = document.querySelector(".open-icon");
    const closeIcon = document.querySelector(".close-icon");

    toggleMenu.addEventListener("click", () => {
        const isMenuOpen = menu.classList.contains("active");

        if (isMenuOpen) {
            menu.classList.remove("active");
            closeIcon.style.display = "none";
            openIcon.style.display = "inline-block";
            menuItems.forEach((item) => item.classList.remove("visible"));
        } else {
            menu.classList.add("active");
            closeIcon.style.display = "inline-block";
            openIcon.style.display = "none";

            menuItems.forEach((item, index) => {
                setTimeout(() => item.classList.add("visible"), index * 100);
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
    video.src = 'assets/video/hero.mp4';
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