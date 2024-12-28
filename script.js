const resultDiv = document.querySelector('#result');


let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    let value = Math.random();
    console.log(value);
    if (value <= (1/3)) {
        return "rock";
    }
    else if ((1/3)<value && value<=(2/3)) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

// function getHumanChoice() {
//     human_choice = prompt("Rock,Paper or Scissors?");
//     return human_choice.toLowerCase();
// }





function playRound(humanSelection) {

    const computerSelection = getComputerChoice();
    let winner;

    resultDiv.innerHTML = `
    <p>You Chose: ${humanSelection}</p>
    <p>Computer chose ${computerSelection}</p>
    `;

    if (humanSelection=='paper' && computerSelection=='rock'||humanSelection=='scissors' && computerSelection=='paper' || humanSelection=='rock' && computerSelection=='scissors') {
        outcome = "You win this round!";
        humanScore++;

    }
    else if (humanSelection=='paper' && computerSelection=='scissors'||humanSelection=='scissors' && computerSelection=='rock' || humanSelection=='rock' && computerSelection=='paper') {
        outcome = "You lose this round!";
        computerScore++;
    }
    else if (humanSelection==computerSelection) {
        outcome = "It's a tie this round";

    }

    else {
        outcome = "Invalid choice";
    }

    resultDiv.innerHTML += `
    <p>${outcome}</p>
    <p>You: ${humanScore} | Computer: ${computerScore}</p>`;

    if (humanScore ==5) {
        resultDiv.innerHTML +='<p>Congratulations! You are the winner of the game!</p>';
        resetGame();
    } else if (computerScore==5) {
        resultDiv.innerHTML +='<p>Game Over!The computer wins the game.</p>';
        resetGame();
    }


    return outcome;
}

function resetGame() {
    // Reset scores
    humanScore = 0;
    computerScore = 0;
    resultDiv.innerHTML += `<p>The scores have been reset. Play again!</p>`;
    
}

let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper')
let scissors = document.querySelector('#scissors');

rock.addEventListener("click",() =>playRound('rock'));
paper.addEventListener("click",() =>playRound('paper'));
scissors.addEventListener("click",() =>playRound('scissors'));


