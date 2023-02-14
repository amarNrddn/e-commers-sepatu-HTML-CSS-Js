//  slide navbar
const wrapper = document.querySelector(".slider__wepper")
const menuItems = document.querySelectorAll(".menu__item")

//  slide product
const products = [
    {
      id: 1,
      title: "Air Force",
      price: 119,
      colors: [
        {
          code: "black",
          img: "assets/img/air.png",
        },
        {
          code: "darkblue",
          img: "assets/img/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 149,
      colors: [
        {
          code: "lightgray",
          img: "assets/img/jordan.png",
        },
        {
          code: "green",
          img: "assets/img/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 109,
      colors: [
        {
          code: "lightgray",
          img: "assets/img/blazer.png",
        },
        {
          code: "green",
          img: "assets/img/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 129,
      colors: [
        {
          code: "black",
          img: "assets/img/crater.png",
        },
        {
          code: "lightgray",
          img: "assets/img/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 99,
      colors: [
        {
          code: "gray",
          img: "assets/img/hippie.png",
        },
        {
          code: "black",
          img: "assets/img/hippie2.png",
        },
      ],
    },
  ];


// product menu iteem
let shoesProduct = products[0]
const currenProductImg = document.querySelector(".product-img"),
      currenProductTitle = document.querySelector(".product__title"),
      currenProductprice = document.querySelector(".product__price"),
      currenProductSubtitle = document.querySelector(".product__subtitle"),
      currenProductSize = document.querySelectorAll(".size"),
      currenProductColor = document.querySelectorAll(".color")

menuItems.forEach((item, index) =>{
    item.addEventListener("click", () =>{
        // slide navbar
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        // product
        shoesProduct = products[index]

        // text title produt and nav
        currenProductTitle.textContent = shoesProduct.title
        currenProductprice.textContent = "$" + shoesProduct.price
        currenProductImg.src = shoesProduct.colors[0].img

        // new color
        currenProductColor.forEach ((color, index) =>{
            color.style.backgroundColor = shoesProduct.colors[index].code
        })
    })
})

// product color
currenProductColor.forEach ((color, index) => {
    color.addEventListener("click", () =>{
        currenProductImg.src = shoesProduct.colors[index].img
    })
})

//size
currenProductSize.forEach((size, index) =>{
    size.addEventListener("click", () =>{
        currenProductSize.forEach((size) =>{
            size.style.backgroundColor = "white"
            size.style.color = "black"
        })
        size.style.backgroundColor = "black"
        size.style.color = "white"
    })
})

// product color
const productBtn = document.querySelector(".product__button"),
      payment = document.querySelector(".payment"),
      close = document.querySelector(".close")

productBtn.addEventListener ("click", () => {
    payment.style.display = "flex"
})

close.addEventListener("click", () => {
    payment.style.display = "none"
})

  