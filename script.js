const navbarEmail = document.querySelector('.navbar-email')
navbarEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
    const desktopMenu = document.querySelector('.desktop-menu');
    desktopMenu.classList.toggle('inactive');
    
}