export const renderCart = list => {
    const produktList = list.map(item => renderProduct(item))   // каждый обьект массива с карточками передаем в функцию отрисовки
    console.log(produktList)
    document.querySelector(".produckts__list").innerHTML = produktList.join("")
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

