import Game from './game.js'
const game = undefined;

const player1Input = document.getElementById('player-1-name')
const player2Input = document.getElementById('player-2-name');
const newgamebttn = document.getElementById('new-game')

window.addEventListener('DOMContentLoaded', () => {


    player1Input.addEventListener('keyup', event => {

        if (player1Input.value !== '' && player2Input.value !== '') {
            newgamebttn.disabled = false
        } else {
            newgamebttn.disabled = true
        }
    })

    player2Input.addEventListener('keyup', event => {

        if (player1Input.value !== '' && player2Input.value !== '') {
            newgamebttn.disabled = false
        } else {
            newgamebttn.disabled = true
        }
    })

    newgamebttn.addEventListener('click', event => {

    })


})
