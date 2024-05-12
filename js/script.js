

// Define Product variables
let productDom = document.querySelector(".products")
let cartProductMenu = document.querySelector(".carts-products ")
let cartProductDivDom = document.querySelector(".carts-products div")
let badgeDom = document.querySelector(".badge")
let shoppingCartIcon = document.querySelector(".shoppingCart")



// ProductsUI
function drawProductUi (){
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
                    <button class="add-to-cart" onclick= "addedToCart(${item.id})">Add To Cart</button>
                    <i class="fa-solid fa-heart"></i>
                </div>
            </div>
        `
    });
    productDom.innerHTML = productsUI
}
drawProductUi()

// Add products to cart



let addedItem = localStorage.getItem("productInCart") ? JSON.parse(localStorage.getItem("productInCart")) : [];

if(addedItem){
    addedItem.map((item) => {
        cartProductDivDom.innerHTML += `  <p>${item.title}</p> `
    });
    badgeDom.style.display = "block";
    badgeDom.innerHTML = addedItem.length;
}

function addedToCart(id){
    if(localStorage.getItem("username")){
        let choosenItem = products.find((item)=>item.id === id);
        cartProductDivDom.innerHTML +=`
             <p>${choosenItem.title}</p>
        `;

        addedItem = [...addedItem , choosenItem];
        localStorage.setItem("productInCart", JSON.stringify(addedItem));

        let cartProductItems = document.querySelectorAll(".carts-products div p")
        badgeDom.style.display = "block";
        badgeDom.innerHTML = cartProductItems.length;
    }else{
        window.location = "login.html"
    }   
}



// open and close shopping cart Icon 
function openCartMenu(){
    if(cartProductDivDom.innerHTML != ""){
        if(cartProductMenu.style.display== "block"){
            cartProductMenu.style.display= "none"
        }else{
            cartProductMenu.style.display= "block";
        }        
    }   
}

shoppingCartIcon.addEventListener("click", openCartMenu)
