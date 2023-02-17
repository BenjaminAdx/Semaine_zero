let randomnumber = Math.floor(Math.random() * 100) + 1;
console.log(randomnumber);
let guesses = document.querySelector('.guesses');
let lastResult = document.querySelector('.lastResult');
let lowOrHi = document.querySelector('.lowOrHi');

let guessSubmit = document.querySelector('.guessSubmit');
let guessField = document.querySelector('.guessField');

let guessCount = 1;
/* fonction principale guessthenumber */
function submitNumber() {
    if (guessCount <= 10) {
        guesses.textContent += guessField.value + " ";
        if (guessField.value < randomnumber) {
            lowOrHi.textContent = "Trop petit";
            lastResult.style.color = "red";
            lastResult.textContent = "Essaie encore";
            guessCount++;
        }
        else if (guessField.value > randomnumber) {
            lowOrHi.textContent = "Trop grand";
            lastResult.style.color = "red";
            lastResult.textContent = "Essaie encore";
            guessCount++;
        }
        else {
            lastResult.style.color = "green";
            lastResult.textContent = "Bravo";
            guessCount++;
            gameover();
            resetall();
        }
    }
    else {
        lastResult.textContent = "Game Over";
        gameover();
        resetall();
    }
    guessField.value = "";
    guessField.focus();
};
/* fonction game over à appeler*/
function gameover() {
    guessSubmit.disabled = true;
    lowOrHi.innerHTML = "<button class='reset'>Reset</button>";

}
/* fonction reset à appeler */
function resetall() {
    let resetButton = document.querySelector(".reset");
    function resetgame() {
        guesses.textContent = "";
        lastResult.textContent = "";
        lowOrHi.innerHTML = "";
        guessSubmit.disabled = false;
        guessCount = 1;
        randomnumber = Math.floor(Math.random() * 100) + 1;
        console.log(randomnumber);
    };
    resetButton.addEventListener("click", resetgame);
}
/* écoute click submit */
guessSubmit.addEventListener("click", submitNumber);




