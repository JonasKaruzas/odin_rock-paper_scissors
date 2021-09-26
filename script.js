let arr = ['ROCK', 'PAPER', 'SCISSORS'] ;
let numberOfGames = 5;
let playerWinCount = 0;
let computerWinCount = 0;

function getAnswer() {
    let playerSelection = prompt("Rock, paper or scissors?").toUpperCase();

    // check player Selection
    if (!playerSelection || playerSelection != arr[0] && playerSelection != arr[1] && playerSelection != arr[2]) {
        console.log('Wrong selection');
        getAnswer();
    } else {
        playRound(playerSelection, computerPlay());
    }
}

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

function game(){
    for (let i=0; i < numberOfGames; i++){
        getAnswer();
    }
    console.log(`Final results - Player ${playerWinCount}, Computer ${computerWinCount}`);
    console.log((playerWinCount > computerWinCount) ? 'Player WON!' : (playerWinCount == computerWinCount) ? "It's a tie :(" : 'Computer WON! Haha!');
    
    
}

