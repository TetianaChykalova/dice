// перед созданием сложного проекта - блок-схема логики. Что делает пользователь, что происходит после єтого

'use strict'

//VARIABLES
const btnNewGame = document.querySelector('#new-game');
const btnThrowDice = document.querySelector('#throw-dice');
const btnLeavePoints = document.querySelector('#leave-points');

const dice = document.querySelector('#dice');

const gamer0 = document.querySelector('#gamer-0')
const gamer0generalPoints = document.querySelector('#general-points-0'); //DOM ELEMENT
const gamer0turnPoints = document.querySelector('#turn-points-0'); //DOM ELEMENT

const gamer1 = document.querySelector('#gamer-1')
const gamer1generalPoints = document.querySelector('#general-points-1'); //DOM ELEMENT
const gamer1turnPoints = document.querySelector('#turn-points-1'); //DOM ELEMENT

let currentPoints = 0
let activePlayer = 0;


//Start initial
gamer0generalPoints.textContent = '0'
gamer0turnPoints.textContent = '0'

gamer1generalPoints.textContent = '0'
gamer1turnPoints.textContent = '0'

dice.classList.add('hide');

let isPlaying = true

let win = 20

function switchActivePlayer() {
    currentPoints = 0;
    document.querySelector(`#turn-points-${activePlayer}`).textContent = currentPoints
    activePlayer = activePlayer === 0 ? 1 : 0
    gamer0.classList.toggle('gamer-active')
    gamer1.classList.toggle('gamer-active')
}


btnNewGame.addEventListener('click', function () {
    if (gamer0generalPoints.textContent >= win || gamer1generalPoints.textContent >= win) {
        document.querySelector('.gamer-win').classList.remove('gamer-win')
    }

    gamer0.classList.add('gamer-active')
    gamer1.classList.remove('gamer-active')

    currentPoints = 0
    activePlayer = 0;
    isPlaying = true;

    gamer0generalPoints.textContent = '0'
    gamer0turnPoints.textContent = '0'
    gamer1generalPoints.textContent = '0'
    gamer1turnPoints.textContent = '0'
    dice.classList.add('hide');
})

btnThrowDice.addEventListener('click', function () {
    if (isPlaying) {
        const diceNumber = Math.trunc(Math.random() * 6) + 1

        dice.classList.remove('hide')
//     src через switch - долго и нудно
        dice.src = `img/dice${diceNumber}.png`

//     реализация единиці на кубике - переход к другому игроку
        if (diceNumber !== 1) {
            currentPoints += diceNumber
            document.querySelector(`#turn-points-${activePlayer}`).textContent = currentPoints
        } else {
            switchActivePlayer()
        }
    }
})


btnLeavePoints.addEventListener('click', function () {
    if (isPlaying) {
        let general = +document.querySelector(`#general-points-${activePlayer}`).textContent
        let current = +document.querySelector(`#turn-points-${activePlayer}`).textContent
        let score = general + current
        document.querySelector(`#general-points-${activePlayer}`).textContent = score

        if(score >= win) {
            isPlaying = false
            document.querySelector(`#gamer-${activePlayer}`).classList.remove('gamer-active')
            document.querySelector(`#gamer-${activePlayer}`).classList.add('gamer-win')
            dice.classList.add('hide');
        } else {
            switchActivePlayer()
        }
    }
})