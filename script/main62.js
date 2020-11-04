// Реализовать модуль корзины. Создать блок товаров и блок корзины. У каждого товара есть кнопка «Купить», при нажатии на которую происходит добавление имени и цены товара в блок корзины. Корзина должна уметь считать общую сумму заказа.

let catalog = document.querySelector('.catalog');

function renderCatalog() {
    counts_of_product = 5;// prompt('Введите необходимое количество товаров!');
    for (let i = 0; i < counts_of_product; i++) {
        catalog.appendChild(renderProduct());
    }
    return catalog;
}

function renderCart() {
    let cart = document.createElement('div');
    cart.className = 'cart-list';


    let cartIcon = document.querySelector('.cart-button');
    let addToCartBtn = document.querySelector('.product-btn');
    let product = renderProduct();
    let cartArr = [];
    addToCartBtn.addEventListener('click', (e) => {
        while (addToCartBtn.onclick) {
            cartArr.push(product);
        }
    });
    return cartArr;
}

function renderProduct() {
    let divProduct = document.createElement('div');
    let productImg = document.createElement('img');
    let productName = document.createElement('h1');
    let productPrice = document.createElement('div');
    let productBuyBtn = document.createElement('button');

    divProduct.className = 'product';
    productImg.className = 'product-img';
    productName.className = 'product-name';
    productPrice.className = 'product-price';
    productBuyBtn.className = 'product-btn';

    productImg.src = 'https://via.placeholder.com/200x150';
    productName.innerHTML = 'Product';
    productPrice.innerHTML = 199;
    productBuyBtn.innerHTML = 'Купить'

    divProduct.appendChild(productImg);
    divProduct.appendChild(productName);
    divProduct.appendChild(productPrice);
    divProduct.appendChild(productBuyBtn);

    // productBuyBtn.addEventListener('click', (e) => {
    //     // С помощью этой кнопки будет добавляться продукт в корзину
    // });

    return divProduct;
}

renderCatalog();
console.log(renderCart());