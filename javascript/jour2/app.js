
var clicker = document.getElementById("cliquer");
var chargement = document.getElementById("progress");
var onClick = function () {
    console.log(chargement.classList)
    if (chargement.classList != "greenlight") {
        chargement.className = "greenlight";
    }
    else { chargement.classList.remove("greenlight") }
}

clicker.addEventListener("click", onClick);

/* var chatEl = document.getElementById("chat");
var noneEl = document.getElementById("pop-up");
var popUp = function () {
    console.log(noneEl.style.display)
    if (noneEl.style.display != "flex") {
        noneEl.style.display = "flex";
    }
    else { noneEl.style.display = "none" }
}
chatEl.addEventListener("click", popUp) */

var chatEl = document.querySelector("#chat");
var noneEl = document.querySelector(".pop-up");
function closed() {
    noneEl.classList.toggle("apparaitre");
}
chatEl.addEventListener("click", closed);

