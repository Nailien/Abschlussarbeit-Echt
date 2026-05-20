const button = document.getElementById("button")
let input = document.getElementById("input")
let liste = document.getElementById("liste")

button.onclick = function(){
    liste.innerHTML += "<div> <input type='checkbox' >" + input.value + "</div>"
    input.value = " "
}