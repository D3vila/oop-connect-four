import Column from "./column.js";

const columns = [];
for (let i = 0; i < 7; i += 1) {
  columns.push(new Column());
}


class Game {
    constructor(playerOneName, playerTwoName, currPlayer = 1, columns) {
        this.name1 = playerOneName
        this.name2 = playerTwoName
        this.currPlayer = currPlayer
        this.columns = columns
    }
    getName() {
        return `${this.name1} vs. ${this.name2}`
    }
    playInColumn() {


        if (this.currPlayer === 1) {
            this.currPlayer = 2
        } else {
            this.currPlayer = 1
        }
    }
}





export default Game
