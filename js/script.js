

// Define Product variables
let productDom = document.querySelector(".products")
let cartProductMenu = document.querySelector(".carts-products ")
let cartProductDivDom = document.querySelector(".carts-products div")
let badgeDom = document.querySelector(".badge")
let shoppingCartIcon = document.querySelector(".shoppingCart")
let products = JSON.parse(localStorage.getItem("products"));


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
                    <i class="fa-solid fa-heart"></i>
                </div>
            </div>
        `
    });
    productDom.innerHTML = productsUI
})(JSON.parse(localStorage.getItem("products")));


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
        let choosenItem = products.find((item)=>item.id === id);
       let item = allItems.find((i) => i.id === choosenItem.id);
       if(item){   
        choosenItem.quantity += 1;
       }else{
        allItems.push(choosenItem);
       }

       cartProductDivDom.innerHTML = "";
       allItems.forEach((item) => { 
        cartProductDivDom.innerHTML += `  <p>${item.title} ${item.quantity}</p> `
    });

        addedItem = [...addedItem , choosenItem];

       let uniqueProducts = getUniqueArr(addedItem , "id");

        localStorage.setItem("productInCart", JSON.stringify(uniqueProducts));

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
