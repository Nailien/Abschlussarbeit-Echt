const submit = document.getElementById("submit")
const hello = document.getElementById("hello")
let answer = document.getElementById("answer")
const reset = document.getElementById("reset");

let max = 100
let min = 1
let randomnum = Math.floor(Math.random() * max) + min;
let guess = 0;

hello.textContent = `Guess a Number between ${min} - ${max}`

submit.onclick = function() {
guess++
    let input = Number(document.getElementById("input").value);

    if (isNaN(input)) {
        answer.textContent = `Not a Number! Guess between ${min} - ${max}`;
    } else if (input > max || input < min) {
        answer.textContent = `Out of range! Pls guess between ${min} - ${max}`;
    } else if (input === randomnum) {
        answer.textContent = `Correct! The Number was ${randomnum} you guessed ${guess}`;
    } else if (input > randomnum) {
        answer.textContent = `Lower`;
    } else {
        answer.textContent = `Higher`;
    }

}
reset.onclick = function() {
    randomnum = Math.floor(Math.random() * max) + min; // neue Zahl
    guess = 0; // Versuche zurücksetzen

    document.getElementById("input").value = ""; // Input leeren
    answer.textContent = "Neues Spiel gestartet!";
}