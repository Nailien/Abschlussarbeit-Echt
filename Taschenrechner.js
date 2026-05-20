const anzeige = document.getElementById("anzeige")

function rechne(input){

    anzeige.value += input

}

function reset(){

    anzeige.value = ""; 

}

function gleich(){

       try{ 
    anzeige.value = eval(anzeige.value)
}
catch(error){
    anzeige.value = "Error"
}

}