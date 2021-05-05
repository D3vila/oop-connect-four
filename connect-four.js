
window.addEventListener('DOMContentLoaded', () => {

    import { Game } from './game.js'
    const game = undefined;

    const player1Input = document.getElementById('player-1-name')
    const player2Input = document.getElementById('player-2-name');

    player1Input.addEventListener('keyup', event => {
        const newgamebttn = getElementById('new-game')

        if (player1Input.value !== '' && player2Input.value !== '') {
            newgamebttn.classList.remove('disabled')
        } else {
            return
        }

    })





})
