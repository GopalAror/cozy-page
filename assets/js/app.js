let card1 = document.querySelector(".card1")
let card2 = document.querySelector(".card2")
let card3 = document.querySelector(".card3")
let card4 = document.querySelector(".card4")
let page1 = document.querySelector(".page1")
let page2 = document.querySelector(".page2")
let page3 = document.querySelector(".page3")
let page4 = document.querySelector(".page4")
let home = document.querySelector(".home")
let cross = document.querySelector(".cross")
let cross1 = document.querySelector(".cross1")
let cross2 = document.querySelector(".cross2")
let cross3 = document.querySelector(".cross3")

card1.addEventListener("click",function(){
    home.classList.add("d-none")
    page1.classList.remove("d-none")
})
card2.addEventListener("click",function(){
    home.classList.add("d-none")
    page2.classList.remove("d-none")
})
card3.addEventListener("click",function(){
    home.classList.add("d-none")
    page3.classList.remove("d-none")
})
card4.addEventListener("click",function(){
    home.classList.add("d-none")
    page4.classList.remove("d-none")
})
cross.addEventListener("click",function(){
    home.classList.toggle("d-none")
    page1.classList.toggle("d-none")
})
cross1.addEventListener("click",function(){
    home.classList.toggle("d-none")
    page2.classList.toggle("d-none")
})
cross2.addEventListener("click",function(){
    home.classList.toggle("d-none")
    page3.classList.toggle("d-none")
})
cross3.addEventListener("click",function(){
    home.classList.toggle("d-none")
    page4.classList.toggle("d-none")
})