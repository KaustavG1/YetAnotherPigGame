/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let current = 0;


function _inti_() {
    document.querySelector('#score-0').textContent = '0';
    document.querySelector('#score-1').textContent = '0';
    document.querySelector('#current-0').textContent = '0';
    document.querySelector('#current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.dice').style.display = 'none';
}

_inti_();

const newGame = () => {
    console.log('Starting a new Game');
    _inti_();
}

const rollDice = () => {
    const rand = Math.floor(Math.random() * 6) + 1;
    document.querySelector('.dice').src = `dice-${rand}.png`;
    document.querySelector('.dice').style.display = 'block';
    current += rand;
    console.log(`Current is ${current} and rand is ${rand}`);
    document.querySelector()
}

const hold = () => {
    console.log('Holding');
}

document.querySelector('.btn-new').addEventListener('click', newGame);

document.querySelector('.btn-roll').addEventListener('click', rollDice);

document.querySelector('.btn-hold').addEventListener('click', hold);