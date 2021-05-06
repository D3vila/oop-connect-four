import Column from "./column.js";



class Game {
    constructor(playerOneName, playerTwoName, currPlayer = 1) {
        this.name1 = playerOneName
        this.name2 = playerTwoName
        this.currPlayer = currPlayer
        this.columns = [];
        for (let i = 0; i <= 6; i += 1) {
            this.columns.push(new Column());
        }
        this.winnerNumber = 0

    }
    checkForTie () {

        if (this.columns.every(el => el.isFull())) {
            this.winnerNumber = 3
        }

    }

    getName() {
        if (this.winnerNumber === 0) {
            return `${this.name1} vs. ${this.name2}`
        } else if (this.winnerNumber === 3) {
            return `${this.name1} ties with ${this.name2}`
        }
    }



    playInColumn(index) {

        this.columns[index].add(this.currPlayer)
        this.checkForTie ()

        if (this.currPlayer === 1) {
            this.currPlayer = 2
        } else {
            this.currPlayer = 1
        }


    }

    getTokenAt(rowIndex, columnIndex) {
        // this.tokens[5 - rowIndex]
        // this.columns[columnIndex]
        return this.columns[columnIndex].getTokenAt(rowIndex)
    }

    isColumnFull (columnIndex) {
        return this.columns[columnIndex].isFull()
    }


}





export default Game
