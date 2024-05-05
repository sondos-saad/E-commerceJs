// variables
let userInfo = document.querySelector("#user_info");
let userDom = document.querySelector("#user");
let links = document.querySelector("#links");
let logoutBtn = document.querySelector("#logout");

let username = localStorage.getItem("username")
if(username){
    links.remove();
    userInfo.style.display = "flex ";
    userDom.innerHTML = username;
}

logoutBtn.addEventListener("click" , function(){
    localStorage.clear();
    setTimeout(() =>{
      window.location = "register.html"  
    }, 1500)
})

// Define Product variables
let productDom = document.querySelector(".products")
let cartProductMenu = document.querySelector(".carts-products ")
let cartProductDivDom = document.querySelector(".carts-products div")
let badgeDom = document.querySelector(".badge")
let shoppingCartIcon = document.querySelector(".shoppingCart")

// Data Products
let products = [
    {
        id : 1,
        title:"HeadPhone",
        desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        price: "25$",
        image:"./image/headphone1.jpg"
    },
    {
        id : 2,
        title:"HeadPhone",
        desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        price: "35$",
        image:"./image/Black-headphones.jpg"
    },
    {
        id : 3,
        title:"EarPhone",
        desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        price: "30$",
        image:"./image/earphones.jpg"
    },
    {
        id : 4,
        title:"Keyboard",
        desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        price: "50$",
        image:"./image/keyboard.jpg"
    },
    {
        id : 5,
        title:"Laptop",
        desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        price: "250$",
        image:"./image/laptop.jpg"
    },
    {
        id : 6,
        title:"Laptop",
        desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        price: "350$",
        image:"./image/laptop2.jpg"
    },
    {
        id : 7,
        title:"Phone",
        desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        price: "150$",
        image:"./image/phone.jpg"
    },
    {
        id : 8,
        title:"Phone",
        desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        price: "170$",
        image:"./image/smartphone.jpg"
    },
    {
        id : 9,
        title:"HeadPhone",
        desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        price: "20$",
        image:"./image/white-headphones.jpg"
    },
    {
        id : 10,
        title:"Mouse",
        desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        price: "40$",
        image:"./image/white-mouse.jpg"
    },
];

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
function addedToCart(id){
    let choosenItem = products.find((item)=>item.id === id);
    cartProductDivDom.innerHTML +=`
         <p>${choosenItem.title}</p>
    `;
    let cartProductItems = document.querySelectorAll(".carts-products div p")
    badgeDom.style.display = "block";
    badgeDom.innerHTML = cartProductItems.length;
}

// shopping cartList page 
function checkLogedUser(){
    if(localStorage.getItem("username")){
            window.location ="cartProducts.html"     
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
