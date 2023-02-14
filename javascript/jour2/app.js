
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

