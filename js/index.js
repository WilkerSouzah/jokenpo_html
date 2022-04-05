const $stoneButtonPlayer1 = document.querySelector('.button-stone-player-1') 
const $paperButtonPlayer1 = document.querySelector('.button-paper-player-1') 
const $scissorsButtonPlayer1 = document.querySelector('.button-scissors-player-1') 

const $stoneButtonPlayer2 = document.querySelector('.button-stone-player-2') 
const $paperButtonPlayer2 = document.querySelector('.button-paper-player-2') 
const $scissorsButtonPlayer2 = document.querySelector('.button-scissors-player-2') 

const $fieldPlayer1 = document.querySelector('.field-player-1')
const $fieldPlayer2 = document.querySelector('.field-player-2')

$stoneButtonPlayer1.addEventListener('click', function(){
    $fieldPlayer1.innerHTML = '<img class="move-image" src="./images/stone.png" />'
})
$paperButtonPlayer1.addEventListener('click', function(){
    $fieldPlayer1.innerHTML = '<img class="move-image" src="./images/paper.png" />'
})
$scissorsButtonPlayer1.addEventListener('click', function(){
    $fieldPlayer1.innerHTML = '<img class="move-image" src="./images/scissors.png" />'
})

$stoneButtonPlayer2.addEventListener('click', function(){
    $fieldPlayer2.innerHTML = '<img class="move-image" src="./images/stone.png" />'
})
$paperButtonPlayer2.addEventListener('click', function(){
    $fieldPlayer2.innerHTML = '<img class="move-image" src="./images/paper.png" />'
})
$scissorsButtonPlayer2.addEventListener('click', function(){
    $fieldPlayer2.innerHTML = '<img class="move-image" src="./images/scissors.png" />'
})

