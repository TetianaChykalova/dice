// перед созданием сложного проекта - блок-схема логики. Что делает пользователь, что происходит после єтого

'use strict'

//VARIABLES

const btnRules = document.querySelector('#rules');
const btnNewGame = document.querySelector('#new-game');
const btnThrowDice = document.querySelector('#throw-dice');
const btnLeavePoints = document.querySelector('#leave-points');

const dice = document.querySelector('#dice');

const gamer0generalPoints = document.querySelector('#general-points-0'); //DOM ELEMENT
const gamer0turnPoints = document.querySelector('#turn-points-0'); //DOM ELEMENT

const gamer1generalPoints = document.querySelector('#general-points-1'); //DOM ELEMENT
const gamer1turnPoints = document.querySelector('#turn-points-1'); //DOM ELEMENT


//Start initial
gamer0generalPoints.textContent = '0'
gamer0turnPoints.textContent = '0'

gamer1generalPoints.textContent = '0'
gamer1turnPoints.textContent = '0'
