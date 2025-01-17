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
