const navbarEmail = document.querySelector('.navbar-email');
const navbarMobileMenuIcon = document.querySelector('.menu');
const navbarCartIcon = document.querySelector('.navbar-shopping-cart');
const closeProductImage = document.querySelector('.close-container');

const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCart = document.querySelector('.order-container');
const productInfoContainer = document.querySelector('#product-container-box');
const productModalBoxContainer = document.querySelector('.product-container-modal-box');


navbarEmail.addEventListener('click', toggleDesktopMenu);
navbarMobileMenuIcon.addEventListener('click', toggleMobileMenu);
navbarCartIcon.addEventListener('click', toggleShoppingCart);
closeProductImage.addEventListener('click', hiddenProductInfoContainer);

function toggleDesktopMenu() {
    hiddenHtmlElement(shoppingCart);
    hiddenProductInfoContainer();
    toggleHtmlElement(desktopMenu);
}

function toggleMobileMenu() {
    hiddenHtmlElement(shoppingCart);
    hiddenProductInfoContainer();
    toggleHtmlElement(mobileMenu);
}

function toggleShoppingCart() {
    hiddenHtmlElement(desktopMenu);
    hiddenHtmlElement(mobileMenu);
    hiddenProductInfoContainer();
    toggleHtmlElement(shoppingCart);
}

function showProductInfoContainer(event) {
    hiddenHtmlElement(desktopMenu);
    hiddenHtmlElement(mobileMenu);
    hiddenHtmlElement(shoppingCart);
    const parentElement = event.target.parentElement;

    const imgSrc = parentElement.querySelector('#product-img').getAttribute('src');
    const productImageElement = document.querySelector('.product-image');
    productImageElement.setAttribute('src', imgSrc);

    const priceStr = parentElement.querySelector('#product-price').innerText;
    const productPPrice = document.querySelector('#product-info-price');
    productPPrice.innerText = priceStr;

    const nameStr = parentElement.querySelector('#product-name').innerText;
    const productPName = document.querySelector('#product-info-name');
    productPName.innerText = nameStr;

    productInfoContainer.scrollTop = 0;

    showHtmlElement(productInfoContainer);

    showHtmlElement(productModalBoxContainer);
}

function hiddenProductInfoContainer() {
    hiddenHtmlElement(productInfoContainer);
    hiddenHtmlElement(productModalBoxContainer)
}

function toggleHtmlElement(element) {
    element.classList.toggle('inactive');
}

function hiddenHtmlElement(element) {
    element.classList.add('inactive');
}
function showHtmlElement(element) {
    element.classList.remove('inactive');
}


function getProducts() {
    const productList = [];
    // Load product for sources  
    let indexImage = 0;
    const images = [
        "https://images.pexels.com/photos/1863621/pexels-photo-1863621.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/9130800/pexels-photo-9130800.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/6231758/pexels-photo-6231758.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/9130820/pexels-photo-9130820.jpeg?auto=compress&cs=tinysrgb&w=1600"
    ]
    for (let i = 0; i <= 25; i++) {
        productList.push({
            name: `Succulent ${i}`,
            price: 5 + i,
            image: images[indexImage],
        })
        indexImage++;
        if (indexImage >= 4) {
            indexImage = 0;
        }
    }
    return productList;
}

function loadProducts() {
    const productList = getProducts();

    //Add productos
    const divContainer = document.querySelector('.cards-container');
    for (product of productList) {
        const imgProduct = document.createElement('img');
        imgProduct.id = 'product-img';
        imgProduct.setAttribute('src', product.image);
        imgProduct.setAttribute('alt', product.name);
        imgProduct.classList.add('product-img');
        imgProduct.addEventListener('click', showProductInfoContainer);

        const divProductInfo = document.createElement('div');
        divProductInfo.classList.add('product-info');

        const divInfo = document.createElement('div');
        const pPrice = document.createElement('p');
        pPrice.innerText = `$${product.price}`;
        pPrice.id = 'product-price';
        const pName = document.createElement('p');
        pName.id = 'product-name';
        pName.innerText = product.name;
        divInfo.append(pPrice, pName);

        const figure = document.createElement('figure');
        const imgIconCart = document.createElement('img');
        imgIconCart.setAttribute('src', './icons/bt_add_to_cart.svg');
        figure.appendChild(imgIconCart);
        divProductInfo.append(divInfo, figure);

        const divProduct = document.createElement('div');
        divProduct.classList.add('product-card');
        divProduct.append(imgProduct, divProductInfo);

        divContainer.append(divProduct);
    }
}

function loadProductsV2() {
    const productList = getProducts();

    //Add productos
    const divContainer = document.querySelector('.cards-container');
    for (product of productList) {
        let htmlStr = `<div class="product-card"> <img src="${product.image}" alt="" class="product-img"> <div class="product-info"> <div> <p>$${product.price}</p> <p>${product.name}</p> </div> <figure> <img src="./icons/bt_add_to_cart.svg" alt=""> </figure> </div> </div>`;
        let divProduct = document.createElement('div');
        divProduct.innerHTML = htmlStr;
        divContainer.append(divProduct);
    }
}
loadProducts();