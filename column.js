
class Column {
    constructor () {
        this.tokens = []
    }

    add(playerNumber) {
       this.tokens.push(playerNumber)
    }

    getTokenAt (rowNumber) {
        return this.tokens[5 - rowNumber]
    }
}


export default Column
