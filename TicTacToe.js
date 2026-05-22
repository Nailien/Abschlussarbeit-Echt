var board;
var player0 = "O";
var playerX = "X";
var momentan = player0;
var Fertig = false;

window.onload = function () {
    setGame();
}

function setGame() {
    board = [
        [``, ``, ``],
        [``, ``, ``],
        [``, ``, ``]
    ];

    for (let i = 0; i < 3; i++) {
        for (let c = 0; c < 3; c++) {

            let tile = document.createElement("div");
            tile.id = i.toString() + "-" + c.toString();
            tile.classList.add("tile");

            if (i == 0 || i == 1) {
                tile.classList.add("horizontalelinien");
            }

            if (c == 0 || c == 1) {
                tile.classList.add("verticalelinien");
            }

            tile.addEventListener("click", setTile);
            document.getElementById("brett").appendChild(tile);
        }
    }
}

function setTile() {

    if (Fertig) {
        return;
    }

    let coords = this.id.split("-");
    let i = parseInt(coords[0]);
    let c = parseInt(coords[1]);

    if (board[i][c] != ``) {
        return;
    }

    board[i][c] = momentan;
    this.innerText = momentan;

    if (momentan == player0) {
        momentan = playerX;
    } else {
        momentan = player0;
    }

    checkWinner();
}

function checkWinner() {

    for (let i = 0; i < 3; i++) {

        if (board[i][0] == board[i][1] &&
            board[i][1] == board[i][2] &&
            board[i][0] != ``) {

            for (let r = 0; r < 3; r++) {
                let tile = document.getElementById(i.toString() + "-" + r.toString());
                tile.classList.add("Gewinner");
            }

            Fertig = true;
            return;
        }
    }

    for (let c = 0; c < 3; c++) {

        if (board[0][c] == board[1][c] &&
            board[1][c] == board[2][c] &&
            board[0][c] != ``) {

            for (let r = 0; r < 3; r++) {
                let tile = document.getElementById(r.toString() + "-" + c.toString());
                tile.classList.add("Gewinner");
            }

            Fertig = true;
            return;
        }
    }

    if (board[0][0] == board[1][1] &&
        board[1][1] == board[2][2] &&
        board[0][0] != ``) {

        for (let r = 0; r < 3; r++) {
            let tile = document.getElementById(r.toString() + "-" + r.toString());
            tile.classList.add("Gewinner");
        }

        Fertig = true;
        return;
    }

    if (board[0][2] == board[1][1] &&
        board[1][1] == board[2][0] &&
        board[0][2] != ``) {

        document.getElementById("0-2").classList.add("Gewinner");
        document.getElementById("1-1").classList.add("Gewinner");
        document.getElementById("2-0").classList.add("Gewinner");

        Fertig = true;
        return;
    }
}
function resetGame(){

    document.getElementById("brett").innerHTML = "";

    momentan = player0;
    Fertig = false;

    setGame();
}