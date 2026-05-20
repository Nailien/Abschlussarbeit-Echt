const random1 = document.getElementById("random1")
const random2 = document.getElementById("random2")
const random3 = document.getElementById("random3")
const button1 = document.getElementById("button1")

let max = 6
let min = 1
let randim1;
let randim2;
let randim3;

button1.onclick = function(button1){
randim1 = Math.floor(Math.random()*max) + min;
random1.textContent = randim1

randim2 = Math.floor(Math.random()*max) + min;
random2.textContent = randim2

randim3 = Math.floor(Math.random()*max) + min;
random3.textContent = randim3

}