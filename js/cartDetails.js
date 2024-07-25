let products =JSON.parse(localStorage.getItem("products"));
let productId = localStorage.getItem("productId");
let itemDom = document.querySelector(".item-details");

let productDetails = products.find((item) => {
    if(item.id == productId){
        return item
    }
});
itemDom.innerHTML = `
    <img src="${productDetails.image}" alt="">
    <h2>${productDetails.title}</h2>
    <p>${productDetails.desc}</p>
    <span>Price: ${productDetails.price}</span> <br>
    <span>Quantity: ${productDetails.quantity}</span>
`   