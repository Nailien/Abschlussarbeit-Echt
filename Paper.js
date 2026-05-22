const choice = ["rock","paper","scissors"]

const Spieler = document.getElementById("Spieler")
const Computer = document.getElementById("Computer")
const resultat = document.getElementById("resultat")

function playgame(Playerchoice){

    const Computerchoice = choice[Math.floor(Math.random() * 3)]

    let result = ""

    if(Playerchoice === Computerchoice){
        result = "Unentschieden"
    } else {
        switch(Playerchoice) {
            case "rock":
                result = (Computerchoice === "scissors") ? "Du hast gewonnen" : "Du hast verloren";
                break;

            case "paper":
                result = (Computerchoice === "rock") ? "Du hast gewonnen" : "Du hast verloren"
                break;

            case "scissors":
                result = (Computerchoice === "paper") ? "Du hast gewonnen" : "Du hast verloren"
                break;
        }
    }

    resultat.classList.remove("green","red")

    Spieler.textContent = `Spieler : ${Playerchoice}`
    Computer.textContent = `Computer : ${Computerchoice}`
    resultat.textContent = result;

        switch(result){
            case "Du hast gewonnen":
            resultat.classList.add("green")
            break
            case "Du hast verloren":
            resultat.classList.add("red")
            break
        } 

}