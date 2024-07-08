// Data Products
let productsDB = [
    {
        id : 1,
        title:"HeadPhone",
        desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        price: "25$",
        image:"./image/headphone1.jpg",
        quantity : 1
    },
    {
        id : 2,
        title:"HeadPhone",
        desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        price: "35$",
        image:"./image/Black-headphones.jpg",
        quantity : 1
    },
    {
        id : 3,
        title:"EarPhone",
        desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        price: "30$",
        image:"./image/earphones.jpg",
        quantity : 1
    },
    {
        id : 4,
        title:"Keyboard",
        desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        price: "50$",
        image:"./image/keyboard.jpg",
        quantity : 1
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
        image:"./image/phone.jpg",
        quantity : 1
    },
    {
        id : 8,
        title:"Phone",
        desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        price: "170$",
        image:"./image/smartphone.jpg",
        quantity : 1
    },
    {
        id : 9,
        title:"HeadPhone",
        desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        price: "20$",
        image:"./image/white-headphones.jpg",
        quantity : 1
    },
    {
        id : 10,
        title:"Mouse",
        desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        price: "40$",
        image:"./image/white-mouse.jpg",
        quantity : 1
    },
];
localStorage.setItem("products" , JSON.stringify(productsDB));