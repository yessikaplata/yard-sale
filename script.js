const navbarEmail = document.querySelector('.navbar-email')
const navbarMobileMenuIcon = document.querySelector('.menu')

navbarEmail.addEventListener('click', toggleDesktopMenu);
navbarMobileMenuIcon.addEventListener('click', toggleMobileMenu);

function toggleDesktopMenu() {
    const desktopMenu = document.querySelector('.desktop-menu');
    toggleHtmlElement(desktopMenu);

}

function toggleMobileMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    toggleHtmlElement(mobileMenu);
}

function toggleHtmlElement(element) {
    element.classList.toggle('inactive');
}