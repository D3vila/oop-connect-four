import Game from "./game.js";
let game = undefined;

function updateUI() {
  if (game === undefined) {
    boardHolder.classList.add("is-invisible");
  } else {
    boardHolder.classList.remove("is-invisible");
    gameName.innerHTML = game.getName();
    // console.log(gameName.innerText.value);
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
});

// export default connect-four.js
