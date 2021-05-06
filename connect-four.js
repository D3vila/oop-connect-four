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
    for (let rows = 0; rows <= 5; rows++) {

        for(let columns = 0; columns <= 6; columns++) {

            const square = document.getElementById(`square-${rows}-${columns}`)
            const tokenMethod = game.getTokenAt(rows, columns)
            square.innerHTML = ''
            if (tokenMethod === 2) {
                const actualToken = document.createElement('div');
                actualToken.classList.add('token','black')
                square.appendChild(actualToken)
            }
            if (tokenMethod === 1) {
                const actualToken = document.createElement('div');
                actualToken.classList.add('token','red')
                square.appendChild(actualToken)
            }

        }
    }
    for (let columns = 0; columns <= 6; columns ++) {
        const currColumn = document.getElementById(`column-${columns}`)
        if (game.isColumnFull(columns)) {
            currColumn.classList.add('full')
        } else {
            currColumn.classList.remove('full')
        }
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
        let targetId = event.target.id
        let columnIndex;
        if (targetId.startsWith('column-')) {
            columnIndex = Number.parseInt(targetId[targetId.length - 1])
        }
        //let targetNum = Number.parseInt(targetId)
        //console.log(columnIndex)
        game.playInColumn(columnIndex)
        updateUI()
    })
});

// export default connect-four.js
