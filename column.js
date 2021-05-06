
class Column {
    constructor() {
        this.tokens = []
    }

    add(playerNumber) {
        this.tokens.push(playerNumber)
    }

    getTokenAt(rowIndex) {
        return this.tokens[5 - rowIndex]
    }

    isFull() {
        if(this.tokens.length >= 6) {
            return true;
        } else {
           return false;
        }
    }


}


export default Column
