document.querySelector('.taggle-main').addEventListener('click', () => {
    const menu = document.querySelector('.main-menu ul');
    const openIcon = document.querySelector('.open-icon');
    const closeIcon = document.querySelector('.close-icon');

    menu.classList.toggle('active');

    if (menu.classList.contains('active')) {
        openIcon.style.display = 'none';
        closeIcon.style.display = 'inline-block';
    } else {
        openIcon.style.display = 'inline-block';
        closeIcon.style.display = 'none';
    }
});

function highlightActiveLink() {
    // Вземане на текущия URL път
    const currentPage = window.location.pathname;

    // Избиране на всички линкове в менюто
    const menuLinks = document.querySelectorAll('.main-menu ul li a');

    // Премахване на класа active от всички линкове
    menuLinks.forEach(link => link.classList.remove('active'));

    // Добавяне на класа active на текущия линк
    menuLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

// Изпълнение на функцията при зареждане на страницата
highlightActiveLink();


