// import {API} from "./renderCard.js";     // Не работает 
import {ProductItem} from "./renderCard.js"
const API = "https://raw.githubusercontent.com/Volov-E-A/shopProject/7441bc29b81acabdffcdb1eeadd1965ce8d68886/JSON"

export class ProductBasket{
    constructor(container = '.header__basket'){
        this.container = container
        this.goods =[]
        this._clickBasket()
        this._getBackerItem()
            .then(data => {
                this.goods = [...data]
                this.render()
            })
    }

    render(){
        const block = document.querySelector(this.container)
        for(let product of this.goods){
            const item = new ProductItem(product)  // Создаем класс с методом отрисовки верстки для блока карточки товара
            block.insertAdjacentHTML("beforeend",item.render()) //Вставка верстки без перезагрузки страници
            // block.innerHTML += item.render() // С пперезагрузкой страницы
        }
    }

    _getBackerItem(){
        return fetch(`${API}/goods.json`)
        .then(result => result.json())
        .catch(error => {
            console.log(error);
        })
    }

    _clickBasket(){
        document.querySelector(".header__basketMini").addEventListener('click', () => {
            document.querySelector(this.container).classList.toggle("inviset")
        })
    }
}

