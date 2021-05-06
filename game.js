import Column from "./column.js";



class Game {
    constructor(playerOneName, playerTwoName, currPlayer = 1, winnerNumber = 0) {
        this.name1 = playerOneName
        this.name2 = playerTwoName
        this.currPlayer = currPlayer
        this.columns = [];
        for (let i = 0; i <= 6; i += 1) {
            this.columns.push(new Column());
        }
        this.winnerNumber = winnerNumber

    }

    getName() {
        return `${this.name1} vs. ${this.name2}`
    }

    checkForTie () {
        if (this.columns.length === 42) {
            this.winnerNumber = 3
            console.log('this is a Tie')
        }
    }

    playInColumn(index) {

        this.columns[index].add(this.currPlayer)

        if (this.currPlayer === 1) {
            this.currPlayer = 2
        } else {
            this.currPlayer = 1
        }

        checkForTie ()
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
