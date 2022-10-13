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
            console.log("You Win!");
        }
        if (playerSelection==="rock" && computerSelection ==="paper"){
            console.log("You Lose!");
        }
        if (playerSelection==="rock" && computerSelection ==="rock"){
            console.log("Draw!");
        }
        if (playerSelection==="paper" && computerSelection ==="rock"){
            console.log("You Win!");
        }
        if (playerSelection==="paper" && computerSelection ==="scissors"){
            console.log("You Lose!");
        }
        if (playerSelection==="paper" && computerSelection ==="paper"){
            console.log("Draw!");
        }
        if (playerSelection==="scissors" && computerSelection ==="paper"){
            console.log("You Win!");
        }
        if (playerSelection==="scissors" && computerSelection ==="rock"){
            console.log("You Lose!");
        }
        if (playerSelection==="scissors" && computerSelection ==="scissors"){
            console.log("Draw!");
        }

    }

}
