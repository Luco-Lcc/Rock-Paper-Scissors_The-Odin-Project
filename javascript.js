// Computer Selection

function getRndInteger() {
    return Math.floor(Math.random() * (3 - 1 + 1)) + 1;
}

function getComputerChoice() {
    let pc_number = getRndInteger();
    
    if (pc_number===1) {
        pc_selection = "Rock";
    }

    if (pc_number===2) {
        pc_selection = "Paper";
    }

    if (pc_number===3) {
        pc_selection = "Scissors";
    }
    
    return pc_selection;
}


// Player Selection Validation Function

function playerSelectionValidation(playerSelection) {

    if (playerSelection.toLowerCase()==="rock" || playerSelection.toLowerCase()==="paper" || playerSelection.toLowerCase()==="scissors") {
        playerSelectionStatus = true;
    } else {
        playerSelectionStatus = false;
    }
    return playerSelectionStatus;
}


// Play a Single Round Function

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelectionValidation(playerSelection)==false) {
        console.log("Invalid Selection");
    } else {

        if (playerSelection==="rock" && computerSelection ==="scissors"){
            // console.log("You Win!");
            return winner = "player";
        }
        if (playerSelection==="rock" && computerSelection ==="paper"){
            // console.log("You Lose!");
            return winner = "computer";
        }
        if (playerSelection==="rock" && computerSelection ==="rock"){
            // console.log("Draw!");
            return winner = "none"
        }
        if (playerSelection==="paper" && computerSelection ==="rock"){
            // console.log("You Win!");
            return winner = "player";
        }
        if (playerSelection==="paper" && computerSelection ==="scissors"){
            // console.log("You Lose!");
            return winner = "computer";
        }
        if (playerSelection==="paper" && computerSelection ==="paper"){
            // console.log("Draw!");
            return winner = "none"
        }
        if (playerSelection==="scissors" && computerSelection ==="paper"){
            // console.log("You Win!");
            return winner = "player";
        }
        if (playerSelection==="scissors" && computerSelection ==="rock"){
            // console.log("You Lose!");
            return winner = "computer";
        }
        if (playerSelection==="scissors" && computerSelection ==="scissors"){
            // console.log("Draw!");
            return winner = "none"
        }

    }

}

// Play a 5-Round Game Function

function game() {
    let playerPoints = 0;
    let computerPoints = 0;

    for (let i=0; i<5; i++) {
        let playerSelection = prompt("Please, select Rock, Paper or Scissors");
        let computerSelection = getComputerChoice();

        console.log("Player selection: " + playerSelection);
        console.log("Computer Selection: " + computerSelection);

        let result = playRound(playerSelection, computerSelection);

        if (result === "player") {
            console.log("You Win");
            playerPoints++;
        }

        if (result === "computer") {
            console.log("You Lose");
            computerPoints++;
        }

        if (result === "none") {
            console.log("Draw");
        }
        console.log("Score: Player " + playerPoints + " x " + computerPoints + " Computer" )

    }

    if (playerPoints>computerPoints) {
        console.log("You are the Winner!")
    }

    if (playerPoints<computerPoints) {
        console.log ("You are the Looser!")
    }

    if (playerPoints===computerPoints) {
        console.log ("Draw!");
    }
}


game()




// let playerSelection = "Paper";
// let computerSelection = getComputerChoice();

// console.log("Player selection: " + playerSelection);
// console.log("Computer Selection: " + computerSelection);

// let result = playRound(playerSelection, computerSelection);

// console.log("The winner is: " + result + "!");

