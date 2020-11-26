/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1 or two 6 in a row, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

console.log(gameRulez());

function gameRulez() {
    return `GAME RULES:
    - The game has 2 players, playing in rounds
    - In each turn, a player rolls a dice as many times as he whishes.Each result get added to his ROUND score
    - BUT, if the player rolls a 1 or two 6 in a row, all his ROUND score gets lost. After that, it's the next player's turn
    - The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score.After that, it's the next player's turn
    - The first player to reach 100 points on GLOBAL score wins the game`
}

let current, rand, playerScore, highScore, isPlaying, previousRoll, currentRoll;

/*
Init Conditions:
- All elements (both UI and variables) should return to their initial conditions. So call the _init_() function.
*/

function _inti_() {
    document.getElementById(`name-0`).textContent = 'Player 1';
    document.getElementById(`name-1`).textContent = 'Player 2';
    document.querySelector('#score-0').textContent = '0';
    document.querySelector('#score-1').textContent = '0';
    document.querySelector('#current-0').textContent = '0';
    document.querySelector('#current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.dice').style.display = 'none';
    activePlayer = 0;
    current = 0;
    playerScore = [0, 0];
    highScore = 100;
    isPlaying = true;
    previousRoll = 0;
    currentRoll = 0;
}

_inti_();

/* 
The New Game Button:
- All elements (both UI and variables) should return to their initial conditions. So call the _init_() function.
*/

const newGame = () => {
    _inti_();
}

/*
The Roll Dice Button:
- Generate a random number 
- If random number is not 1 
    - Show the appropriate dice image
    - Add to current score
    - Display current score
- If random number is 1 
    - Clear current player's current score and display it on screen
    - Call the hold function to change player
*/

const rollDice = () => {
    if(isPlaying) {
        document.querySelector(`.player-${activePlayer}-panel`).classList.add('active');
        rand = Math.floor(Math.random() * 6) + 1;
        currentRoll = rand;
        if (currentRoll + previousRoll !== 12) {
            (rand !== 1) ? ifNotOne() : ifOne();
        }
        else {
            ifOne();
        }
    }        
}

const ifNotOne = () => {
    document.querySelector('.dice').src = `dice-${rand}.png`;
    document.querySelector('.dice').style.display = 'block';
    current += rand;
    document.querySelector(`#current-${activePlayer}`).textContent = `${current}`
    previousRoll = currentRoll;
}

const ifOne = () => {
    current = 0;
    hold();
}

/*
The Hold Button:
- Remove dice from view
- Add the current score to Payer's global score
- Clear current score and clear the view
- Change the active player numebr
- Toggle the active class to the both players
*/

const hold = () => {
    if(isPlaying) {
        document.querySelector('.dice').style.display = 'none';
        playerScore[activePlayer] += current;
        document.querySelector(`#score-${activePlayer}`).textContent = `${playerScore[activePlayer]}`;
        current = 0;
        currentRoll = 0;
        previousRoll = 0;
        playerScore[activePlayer] >= highScore ? triggerWinner() : continueGame(); 
    }
}

const triggerWinner = () => {
    isPlaying = false;
    document.getElementById(`name-${activePlayer}`).textContent = 'Winner!';
    document.querySelector(`.player-${activePlayer}-panel`).classList.toggle('active');
    document.querySelector(`.player-${activePlayer}-panel`).classList.add('winner');
}

const continueGame = () => {
    document.querySelector(`#score-${activePlayer}`).textContent = `${playerScore[activePlayer]}`;
    document.querySelector(`#current-${activePlayer}`).textContent = '0';
    activePlayer ? activePlayer = 0 : activePlayer = 1;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
}

document.querySelector('.btn-new').addEventListener('click', newGame);
document.querySelector('.btn-roll').addEventListener('click', rollDice);
document.querySelector('.btn-hold').addEventListener('click', hold);