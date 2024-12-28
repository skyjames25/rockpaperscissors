const resultDiv = document.getElementById('result');

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
        outcome = "You Win!";

    }
    else if (humanSelection=='paper' && computerSelection=='scissors'||humanSelection=='scissors' && computerSelection=='rock' || humanSelection=='rock' && computerSelection=='paper') {
        outcome = "You lose!";
    }
    else if (humanSelection==computerSelection) {
        outcome = "It's a tie";

    }

    else {
        outcome = "Invalid choice";
    }

    resultDiv.innerHTML += `<p>${outcome}</p>`;
    
    return outcome;
}


let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper')
let scissors = document.querySelector('#scissors');

rock.addEventListener("click",() =>playRound('rock'));
paper.addEventListener("click",() =>playRound('paper'));
scissors.addEventListener("click",() =>playRound('scissors'));


