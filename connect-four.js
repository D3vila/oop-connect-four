import Game from "./game.js";
import Column from "./column.js";

let game = undefined;

function updateUI() {
    if (game === undefined) {
        boardHolder.classList.add("is-invisible");
    } else {
        boardHolder.classList.remove("is-invisible");
        gameName.innerHTML = game.getName();
        // console.log(gameName.innerText.value);
    }
    let clickTargets = document.getElementById('click-targets')
    if (game.currPlayer === 1) {
        clickTargets.classList.add('red')
        clickTargets.classList.remove('black')
    } else {
        clickTargets.classList.add('black')
        clickTargets.classList.remove('red')
    }
}

const gameName = document.getElementById("game-name");
const boardHolder = document.getElementById("board-holder");
const player1Input = document.getElementById("player-1-name");
const player2Input = document.getElementById("player-2-name");
const newgamebttn = document.getElementById("new-game");

window.addEventListener("DOMContentLoaded", () => {
    player1Input.addEventListener("keyup", (event) => {
        if (player1Input.value !== "" && player2Input.value !== "") {
            newgamebttn.disabled = false;
        } else {
            newgamebttn.disabled = true;
        }
    });

    player2Input.addEventListener("keyup", (event) => {
        if (player1Input.value !== "" && player2Input.value !== "") {
            newgamebttn.disabled = false;
        } else {
            newgamebttn.disabled = true;
        }
    });

    newgamebttn.addEventListener("click", (event) => {
        game = new Game(player1Input.value, player2Input.value);
        player1Input.value = "";
        player2Input.value = "";
        newgamebttn.disabled = true;
        updateUI();
    });

    document.getElementById('click-targets').addEventListener('click', event => {
        game.playInColumn()
        updateUI()
    })
});

// export default connect-four.js
