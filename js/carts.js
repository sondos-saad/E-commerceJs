let productInCart = localStorage.getItem("productInCart");
let productDom = document.querySelector(".products");

if(productInCart){
    let items = JSON.parse(productInCart)
    drawCartProductUi(items)
}

function drawCartProductUi (products){
    let productsUI = products.map((item) => {
        return `
            <div class="product-item">
                <img src="${item.image}" alt="" class="product_item_image">
                <div class="product_item_desc">
                    <h2>${item.title}</h2>
                    <p>${item.desc}</p>
                    <span>Price: ${item.price}</span>
                </div>
                <div class="product_item_actions">
                    <button class="add-to-cart" onclick= "removeFromCart(${item.id})">Remove</button>
                </div>
            </div>
        `
    });
    productDom.innerHTML = productsUI
}

// remove item from cart
function removeFromCart (id) {
    if(productInCart){
        let items = JSON.parse(productInCart);
       let filteredItems = items.filter((item) => item.id !== id );
       drawCartProductUi(filteredItems)
        localStorage.setItem("productInCart" , JSON.stringify(filteredItems))
    }
}