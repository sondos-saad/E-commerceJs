

// Define Product variables
let productDom = document.querySelector(".products")
let cartProductMenu = document.querySelector(".carts-products ")
let cartProductDivDom = document.querySelector(".carts-products div")
let badgeDom = document.querySelector(".badge")
let shoppingCartIcon = document.querySelector(".shoppingCart")
let products = productsDB;


// ProductsUI
let drawProductUi;
( drawProductUi = function (products = []) {
    let productsUI = products.map((item) => {
        return `
            <div class="product-item">
                <img src="${item.image}" alt="" class="product_item_image">
                <div class="product_item_desc">
                    <h2 onclick= "saveItemData(${item.id})">${item.title}</h2>
                    <p>${item.desc}</p>
                    <span>Price: ${item.price}</span>
                </div>
                <div class="product_item_actions">
                    <button class="add-to-cart" onclick= "addedToCart(${item.id})">Add To Cart</button>
                    <i class="fa-solid fa-heart" style="color: ${item.liked ? "red" : "black"}" onclick= "addToFavorite(${item.id})"></i>
                </div>
            </div>
        `
    });
    productDom.innerHTML = productsUI.join("");
})(JSON.parse(localStorage.getItem("products")) || products);


// Add products to cart



let addedItem = localStorage.getItem("productInCart") ? JSON.parse(localStorage.getItem("productInCart")) : [];

if(addedItem){
    addedItem.map((item) => {
        cartProductDivDom.innerHTML += `  <p>${item.title}</p> `
    });
    badgeDom.style.display = "block";
    badgeDom.innerHTML = addedItem.length;
}

let allItems = [];
function addedToCart(id){
    if(localStorage.getItem("username")){
        let product = products.find((item)=>item.id === id);
       let isProductInCart = allItems.some((i) => i.id === product.id);
       if(isProductInCart){  
        addedItem = addedItem.map((item) => {
            if(item.id === product.id){
                item.quantity += 1;
            }else{
                return item
            }
        }); 
       }else{
        addedItem.push(product);
       }
       cartProductDivDom.innerHTML = "";
       addedItem.forEach((item) => { 
        cartProductDivDom.innerHTML += `  <p>${item.title} ${item.quantity}</p> `
    });
        localStorage.setItem("productInCart", JSON.stringify(addedItem));

        let cartProductItems = document.querySelectorAll(".carts-products div p")
        badgeDom.style.display = "block";
        badgeDom.innerHTML = cartProductItems.length;
    }else{
        window.location = "login.html"
    }   
}

function getUniqueArr(arr , filterType){
    let unique = arr
    .map((item) => item[filterType])
    .map((item, i, final) => final.indexOf(item) === i && i)
    .filter((item) => arr[item])
    .map((item) => arr[item]);

    return unique;
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

shoppingCartIcon.addEventListener("click", openCartMenu);

function saveItemData(id){
    localStorage.setItem("productId", id);
    window.location = "cartDetails.html";
}

// search function
let input =document.getElementById("search");

input.addEventListener("keyup" , function(e){
        search(e.target.value , products);
    if(e.target.value.trim() == ""){
        drawProductUi(products)
    }
})

function search(title , myArray){
    let arr = myArray.filter((item) => item.title.indexOf(title) !== -1);
    drawProductUi(arr);
}

// add to favoret
// let favoriteItems = [];
let favoriteItems = localStorage.getItem("productFavorite") ? JSON.parse(localStorage.getItem("productFavorite")) : [];

function addToFavorite(id){
    if(localStorage.getItem("username")){
        let choosenItem = products.find((item)=>item.id === id);
        choosenItem.liked = true;
        favoriteItems = [...favoriteItems , choosenItem];
        let uniqueProducts = getUniqueArr(favoriteItems , "id");
        localStorage.setItem("productFavorite", JSON.stringify(uniqueProducts));
        products.map((item) => {
            if(item.id === choosenItem.id){
                item.liked = true;
            }
        });
        localStorage.setItem("products", JSON.stringify(products));
        drawProductUi(products);
    }else{
        window.location = "login.html"
    }   
}