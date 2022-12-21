// перед созданием сложного проекта - блок-схема логики. Что делает пользователь, что происходит после єтого

'use strict'

//VARIABLES

const btnRules = document.querySelector('#rules');
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


//Start initial
gamer0generalPoints.textContent = '0'
gamer0turnPoints.textContent = '0'

gamer1generalPoints.textContent = '0'
gamer1turnPoints.textContent = '0'

dice.classList.add('hide');

btnThrowDice.addEventListener('click', function () {
    const diceNumber = Math.trunc(Math.random() * 6) + 1

    dice.classList.remove('hide')
//     src через switch
    dice.src = `img/dice${diceNumber}.png`

    if(diceNumber !== 1) {
        currentPoints += diceNumber
        gamer0.classList.contains('gamer-active') ?
            gamer0turnPoints.textContent = currentPoints : gamer0turnPoints.textContent = currentPoints
    }
    else {

    }
})