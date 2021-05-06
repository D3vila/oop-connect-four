import Column from "./column.js";
import ColumnWinInspector from "./column-win-inspector.js";
import RowWinInspector from "./row-win-inspector.js"
import DiagonalWinInspector from "./diagonal-win-inspector.js"

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

    checkForDiagonalWin() {
        if (this.winnerNumber !== 0) return;

        for (let columnIndex = 0; columnIndex < 4; columnIndex += 1) {
            const columns = this.columns.slice(columnIndex, columnIndex + 4)
            const inspector = new DiagonalWinInspector(columns);
            const winnerNumber = inspector.inspect()


            if (winnerNumber === 1 || winnerNumber === 2) {
                this.winnerNumber = winnerNumber
                break;
            }
        }
    }

    checkForRowWin() {
        if (this.winnerNumber !== 0) return;

        for (let columnIndex = 0; columnIndex < 4; columnIndex += 1) {
            const columns = this.columns.slice(columnIndex, columnIndex + 4)
            const inspector = new RowWinInspector(columns);
            const winnerNumber = inspector.inspect()


            if (winnerNumber === 1 || winnerNumber === 2) {
                this.winnerNumber = winnerNumber
                break;
            }
        }

    }

    checkForColumnWin() {
        if (this.winnerNumber !== 0) {
            return
        }
        for (let columnIndex = 0; columnIndex < this.columns.length; columnIndex += 1) {
            const column = this.columns[columnIndex];
            const inspector = new ColumnWinInspector(column)
            const winnerNumber = inspector.inspect()

            if (winnerNumber === 1 || winnerNumber === 2) {
                this.winnerNumber = winnerNumber
            }
        }
    }

    checkForTie() {

        if (this.columns.every(el => el.isFull())) {
            this.winnerNumber = 3
        }

    }

    getName() {
        if (this.winnerNumber === 1) {
            return `${this.name1} Wins`
        }

        if (this.winnerNumber === 2) {
            return `${this.name2} Wins`
        }

        if (this.winnerNumber === 0) {
            return `${this.name1} vs. ${this.name2}`
        }

        if (this.winnerNumber === 3) {
            return `${this.name1} ties with ${this.name2}`
        }
    }



    playInColumn(index) {

        this.columns[index].add(this.currPlayer)
        this.checkForTie()
        this.checkForColumnWin()
        this.checkForRowWin()
        this.checkForDiagonalWin()

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

    isColumnFull(columnIndex) {
        if (this.winnerNumber === 1 || this.winnerNumber === 2) {
            return true;
        }
        return this.columns[columnIndex].isFull()
    }


}





export default Game
