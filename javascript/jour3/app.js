let divSpan = document.querySelector(".menu")
let topEl = document.querySelector(".top")
let middle = document.querySelector(".middle")
let bottom = document.querySelector(".bottom")
let linksaEl = document.querySelectorAll("a")
let linksEl = document.querySelector(".links")


function menuburger() {
    topEl.classList.toggle("span1on");
    middle.classList.toggle("span2on");
    bottom.classList.toggle("span3on");
    for (let i = 0; i < linksaEl.length; i++) {
        linksaEl[i].classList.toggle("linkson");
    };
    linksEl.classList.toggle("linksposition");
}
divSpan.addEventListener("click", menuburger)