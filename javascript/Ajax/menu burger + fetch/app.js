let divSpan = document.querySelector(".menu")
let topEl = document.querySelector(".top")
let middle = document.querySelector(".middle")
let bottom = document.querySelector(".bottom")
let linksEl = document.querySelector(".links")


function menuburger() {
    topEl.classList.toggle("span1on");
    middle.classList.toggle("span2on");
    bottom.classList.toggle("span3on");
    linksEl.classList.toggle("linksposition");
}
divSpan.addEventListener("click", menuburger)