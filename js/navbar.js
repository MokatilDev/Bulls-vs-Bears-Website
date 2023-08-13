const nav_menu = document.querySelector(".nav_menu")
const ul = document.querySelector("nav ul")
const list_NavBar = document.querySelector(".list_NavBar")
const line1 = document.querySelector(".line1")
const line2 = document.querySelector(".line2")
const line3 = document.querySelector(".line3")
const navbar = document.querySelector("nav")

nav_menu.addEventListener("click",()=>{
    ul.classList.toggle("active")
    list_NavBar.classList.toggle("active")
    line1.classList.toggle("active")
    line2.classList.toggle("active")
    navbar.classList.toggle("active")
    line3.classList.toggle("active")
})

const linkNavbar = document.querySelectorAll("nav ul li a")


const arry = Array.from(linkNavbar)

function delet() {
    const listActive = arry.find(liste => {
        return liste.className == "active"
    })
    listActive.classList.remove("active")
}

arry.forEach(element => {
    element.addEventListener("click",()=> {
        delet()
        element.classList.add("active")
    })
})


