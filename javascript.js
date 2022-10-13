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
        }

    }

}

let playerSelection = "Paper";
let computerSelection = getComputerChoice();

console.log("Player selection: " + playerSelection);
console.log("Computer Selection: " + computerSelection);

let result = playRound(playerSelection, computerSelection);

console.log("The winner is: " + result + "!");

