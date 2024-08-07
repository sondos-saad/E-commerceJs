
let productDom = document.querySelector(".products");
let noProductsDom = document.querySelector(".no-products");

if(localStorage.getItem("productInCart")){
    let items = JSON.parse(localStorage.getItem("productInCart"))
    drawCartProductUi(items)
}

function drawCartProductUi (allProducts = []){
    if( JSON.parse(localStorage.getItem("productInCart")).length === 0)  
        noProductsDom.innerHTML = "No Products";

    let products = JSON.parse(localStorage.getItem("productInCart")) || allProducts;
    let productsUI = products.map((item) => {
        return `
            <div class="product-item">
                <img src="${item.image}" alt="" class="product_item_image">
                <div class="product_item_desc">
                    <h2>${item.title}</h2>
                    <p>${item.desc}</p>
                    <span>Quantity: ${item.quantity}</span> <br>
                    <span>Price: ${item.price}</span>
                </div>
                <div class="product_item_actions">
                    <button class="add-to-cart" onclick= "removeFromCart(${item.id})">Remove</button>
                </div>
            </div>
        `
    });
    productDom.innerHTML = productsUI.join("");
}
drawCartProductUi()
// remove item from cart
function removeFromCart (id) {
    let productInCart = localStorage.getItem("productInCart");
    if(productInCart){
        let items = JSON.parse(productInCart);
       let filteredItems = items.filter((item) => item.id !== id );
        localStorage.setItem("productInCart" , JSON.stringify(filteredItems))
        drawCartProductUi(filteredItems)
    }
}