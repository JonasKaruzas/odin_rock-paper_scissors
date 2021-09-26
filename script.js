let arr = ['ROCK', 'PAPER', 'SCISSORS'] ;
let playerWinCount = 0;
let computerWinCount = 0;

//Computers random selection
function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3);
    return arr[randomNumber];
}

function playRound(playerSelection, computerSelection) {
    console.log(`Player selected - ${playerSelection}, Computer selected ${computerSelection} `);
    if (playerSelection == arr[0] && computerSelection == arr[2] ||
        playerSelection == arr[1] && computerSelection == arr[0] ||
        playerSelection == arr[2] && computerSelection == arr[1])
        {
            console.log('Player won');
            playerWinCount++;
        } else if (playerSelection === computerSelection) {
            console.log(`It's a tie`);
        } else {
            console.log('Computer won');
            computerWinCount++;
        }
}

const buttons = document.querySelectorAll('button');
const playerScore = document.querySelector('#score-left');
const computerScore = document.querySelector('#score-right');
const result = document.querySelector('#result');


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.parentElement.id === 'button-left'){
            playRound(button.id.toUpperCase(), computerPlay());
            playerScore.textContent = `${playerWinCount}`;
            computerScore.textContent = `${computerWinCount}`;

            if (playerWinCount === 5 || computerWinCount === 5) {
                result.textContent = `It's official, ${(playerWinCount === 5) ? 'Player' : 'Computer'} is the WINNER!`;
                setTimeout(function() {
                    playAgain();
                }, 2000);
            }
            
        }
    })
    
})

function playAgain() {
    playerWinCount = 0;
    computerWinCount = 0;
    result.textContent = ``;
    playerScore.textContent = `${playerWinCount}`;
    computerScore.textContent = `${computerWinCount}`;

}
