'use strict';
/**
 * @param {string} constructor Селектов в какой контейнер хотим вывести наши товары
 * @param {string} render Выводит товары на страницу
 * @param {string} Product Массив с нашими товарами
 * Класс списков товаров
 */
class ProductList {
    constructor(container = '.goods-list') {
        this.container = container;
        this.goods = [];
        this.Products();
        this.render();
    }

    /**
     * @param {string} title Название товара
     * @param {number} price Цена товара
     * @param {photo} img Картинка товара
     */
    Products() {
        this.goods = [
            { title: 'Shirt', price: 150, img: 'https://olimpstar.ru/upload/resize_cache/iblock/745/400_400_140cd750bba9870f18aada2478b24840a/V2EA7001-71.jpg' },
            { title: 'Socks', price: 50, img: 'https://d11ak7fd9ypfb7.cloudfront.net/styles400px/B2201BKG.jpg' },
            { title: 'Jacket', price: 350, img: 'https://i.pinimg.com/originals/0e/4d/66/0e4d661b8df96caff09ca4f66388f779.jpg' },
            { title: 'Shoes', price: 250, img: 'https://i.ebayimg.com/images/g/ZUsAAOSw6FpeVq48/s-l400.jpg' },
        ];
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const item = new ProductItem(product);
            block.insertAdjacentHTML('beforeend', item.render());
        }
    }
    /**
     * Сложение всех цен товаров в общую сумму
     */
    getAllSum() {
        let s = 0;
        this.goods.forEach(element => {
            s += element.price
        });
        alert(`Сумма всех товаров на сайте равна ${s}`);
    }
}
/**
 * Класс товаров
 */
class ProductItem {
    constructor(product) {
        this.title = product.title;
        this.price = product.price;
        this.img = product.img;
    }
    render() {
        return `<div class="product-item">
                <img src="${this.img}">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
}

let list = new ProductList();
list.getAllSum();

class Basket {
    removeElements() {

    }

    addElements() {

    }

    changeElements() {

    }

    searchElements() {

    }

    compareElements() {

    }
}