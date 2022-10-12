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

let a = getComputerChoice();


