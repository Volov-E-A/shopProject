/*
export const renderCart = list => {
    // const produktList = list.map(item => renderProduct(item))   // каждый обьект массива с карточками передаем в функцию отрисовки
    // console.log(produktList)
    document.querySelector(".produckts__list").innerHTML = list.map(item => renderProduct(item)).join("")
}

// function renderProduct (item) {
//     return `<div> ${item} </div>`
// } 
const renderProduct = (item =>                      //Отресовываем вид уврточки
    `<li class="produckts__items">            
        <img src= ${item.srcImg} alt="productPict-1" width="360" height="420">
        <div class="produckts__items_info">
            <p class="produckts__items_title">${item.itemTitle}</p>
            <p class="produckts__items_text">${item.itemText}</p>
            <p class="produckts__items_price">${item.itemPrice}</p>
        </div>
        <button class="produckts__item_button" type="button">add to cart</button>
    </li>`)
    
*/

const API = "https://raw.githubusercontent.com/Volov-E-A/shopProject/master/JSON"

export class ProductList {
    constructor(container='.produckts__list'){
        this.container = container
        this.goods =[]
        // this.fetchProducts()   //Метод наполняющий масив товарами
        this.fetchGoods() // Преобразуем json в обьект js
            .then(goods => {
                this.goods = goods
                this.render() //Метод формитрования блока с товарами
            })

         
    }

    // fetchProducts(){
    //     // this.goods = [
    //     //         {
    //     //             srcImg: "./img/product/productPict-1.jpg",
    //     //             itemTitle: "ellery x m'o capsule",
    //     //             itemText: "known for her sculptural takes on traditional tailoring, australian arbiter of cool kym ellery teams up with moda operandi.",
    //     //             itemPrice: "$52.00"
    //     //         },
    //     //         {
    //     //             srcImg: "./img/product/productPict-2.jpg",
    //     //             itemTitle: "ellery x m'o capsule",
    //     //             itemText: "known for her sculptural takes on traditional tailoring, australian arbiter of cool kym ellery teams up with moda operandi.",
    //     //             itemPrice: "$52.00"
    //     //         },
    //     //         {
    //     //             srcImg: "./img/product/productPict-3.jpg",
    //     //             itemTitle: "ellery x m'o capsule",
    //     //             itemText: "known for her sculptural takes on traditional tailoring, australian arbiter of cool kym ellery teams up with moda operandi.",
    //     //             itemPrice: "$52.00"
    //     //         },
    //     //         {
    //     //             srcImg: "./img/product/productPict-4.jpg",
    //     //             itemTitle: "ellery x m'o capsule",
    //     //             itemText: "known for her sculptural takes on traditional tailoring, australian arbiter of cool kym ellery teams up with moda operandi.",
    //     //             itemPrice: "$52.00"
    //     //         },
    //     //         {
    //     //             srcImg: "./img/product/productPict-5.jpg",
    //     //             itemTitle: "ellery x m'o capsule",
    //     //             itemText: "known for her sculptural takes on traditional tailoring, australian arbiter of cool kym ellery teams up with moda operandi.",
    //     //             itemPrice: "$52.00"
    //     //         },
    //     //         {
    //     //             srcImg: "./img/product/productPict-6.jpg",
    //     //             itemTitle: "ellery x m'o capsule",
    //     //             itemText: "known for her sculptural takes on traditional tailoring, australian arbiter of cool kym ellery teams up with moda operandi.",
    //     //             itemPrice: "$52.00"
    //     //         }
    //     //     ]
    // }

    fetchGoods(){
        return fetch(`${API}/goods.json`)
            .then(goods => goods.json())
    }

    render(){
        const block = document.querySelector(this.container)
        for(let product of this.goods){
            const item = new ProductItem(product)  // Создаем класс с методом отрисовки верстки для блока карточки товара
            block.insertAdjacentHTML("beforeend",item.render()) //Вставка верстки без перезагрузки страници
            // block.innerHTML += item.render() // С пперезагрузкой страницы
        }
    }
}

export class ProductItem {
    constructor(product){
        this.title = product.itemTitle
        this.price = product.itemPrice
        this.text = product.itemText
        this.img = product.srcImg
    }

    render(){
        return `<li class="produckts__items">            
                    <img src= ${this.img} alt="productPict-1" width="360" height="420">
                    <div class="produckts__items_info">
                        <p class="produckts__items_title">${this.title}</p>
                        <p class="produckts__items_text">${this.text}</p>
                        <p class="produckts__items_price">${this.price}</p>
                    </div>
                    <button class="produckts__item_button" type="button">add to cart</button>
                </li>`
    }
}


