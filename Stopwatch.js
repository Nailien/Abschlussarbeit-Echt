const zahlen = document.getElementById("zahlen")
let timer = null
let startzeit = 0
let vergangenezeit = 0
let lauft = false

function start(){

    if(!lauft){
    startzeit = Date.now() - vergangenezeit
    timer = setInterval(update, 10)
    lauft = true

    }

}

function reset(){

    clearInterval(timer)
    startzeit = 0
    vergangenezeit = 0
    lauft = false
    zahlen.textContent = `00:00:00:00`

}

function stop(){

    if(lauft){

    clearInterval(timer)
    vergangenezeit = Date.now() - startzeit
    lauft = false

    }

}

function update(){

    const zeit = Date.now();
    vergangenezeit = zeit - startzeit;

    let stunden = Math.floor(vergangenezeit / (1000 * 60 * 60))
    let minuten = Math.floor(vergangenezeit / (1000 * 60 ) % 60)
    let sekunden = Math.floor(vergangenezeit / (1000) % 60)
    let milisekunden = Math.floor(vergangenezeit % 1000 / 10)

    stunden = String(stunden).padStart(2, "0")
    minuten = String(minuten).padStart(2, "0")
    sekunden = String(sekunden).padStart(2, "0")
    milisekunden = String(milisekunden).padStart(2, "0")

    zahlen.textContent = `${stunden}:${minuten}:${sekunden}:${milisekunden}`
}