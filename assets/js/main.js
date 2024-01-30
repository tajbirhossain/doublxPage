const bars = document.querySelector(".fa-bars")
const overlay = document.querySelector(".overlay")
const menu = document.querySelector(".mainLeft")


bars.addEventListener("click", () => {
    overlay.classList.add("active")
    menu.classList.add("active")
})
overlay.addEventListener("click", () => {
    overlay.classList.remove("active")
    menu.classList.remove("active")
})