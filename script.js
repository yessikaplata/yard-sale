const navbarEmail = document.querySelector('.navbar-email');
const navbarMobileMenuIcon = document.querySelector('.menu');
const navbarCartIcon = document.querySelector('.navbar-shopping-cart');

navbarEmail.addEventListener('click', toggleDesktopMenu);
navbarMobileMenuIcon.addEventListener('click', toggleMobileMenu);
navbarCartIcon.addEventListener('click', toggleShoppingCart);


const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCart= document.querySelector('.order-container');

function toggleDesktopMenu() {
    hiddenHtmlElement(shoppingCart);
    toggleHtmlElement(desktopMenu);
}

function toggleMobileMenu() {
    hiddenHtmlElement(shoppingCart);
    toggleHtmlElement(mobileMenu);
}

function toggleShoppingCart() {
    hiddenHtmlElement(desktopMenu);
    hiddenHtmlElement(mobileMenu);
    toggleHtmlElement(shoppingCart);
}


function toggleHtmlElement(element) {
    element.classList.toggle('inactive');
}

function hiddenHtmlElement(element) {
    element.classList.add('inactive');
}