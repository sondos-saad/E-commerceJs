
let productDom = document.querySelector(".products");
let noProductsDom = document.querySelector(".no-products");

function drawFavoriteProductUi (allProducts = []){
    if( JSON.parse(localStorage.getItem("productFavorite")).length === 0)  
        noProductsDom.innerHTML = "No Products";

    let products = JSON.parse(localStorage.getItem("productFavorite")) || allProducts;
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
drawFavoriteProductUi()
//remove item from cart
function removeFromCart (id) {
    let productFavorite = localStorage.getItem("productFavorite");
    if(productFavorite){
        let items = JSON.parse(productFavorite);
       let filteredItems = items.filter((item) => item.id !== id );
        localStorage.setItem("productFavorite" , JSON.stringify(filteredItems))
        drawFavoriteProductUi(filteredItems)
    }
}