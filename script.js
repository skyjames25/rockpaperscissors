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

function getHumanChoice() {
    human_choice = prompt("Rock,Paper or Scissors?");
    return human_choice.toLowerCase();
}





function playRound() {

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    let winner;
    console.log(`You: ${humanSelection}`);
    console.log(`Computer: ${computerSelection}`);

    if (humanSelection=='paper' && computerSelection=='rock'||humanSelection=='scissors' && computerSelection=='paper' || humanSelection=='rock' && computerSelection=='scissors') {
        console.log('You Win!');
        winner='human'
        return winner

    }
    else if (humanSelection=='paper' && computerSelection=='scissors'||humanSelection=='scissors' && computerSelection=='rock' || humanSelection=='rock' && computerSelection=='paper') {
        console.log('You lose!');
        winner='computer'
        return winner
    }
    else if (humanSelection==computerSelection) {
        console.log("It's a tie , no one scores!");
        winner='tie'
        return winner

    }

    else {
        console.log("Invalid choice");
        winner='invalid'
        return winner
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i<5 ; i++) {
        console.log(`Round ${i+1}`);
        const result = playRound();

        if(result ==='human') {
            humanScore++;
        } else if (result ==='computer') {
            computerScore++;
        } else if (result ==='invalid') {
            console.log("Round skipped due to invalid input.")
        }
    
        console.log(`Current Score -> Human:${humanScore}, Computer: ${computerScore}`)
    }

    if (humanScore> computerScore) {
        console.log("You are the overall winner!")
    } else if (computerScore>humanScore) {
        console.log("Computer is the overall winner!")
    } else {
        console.log("It's a tie overall");
    }
    
}   

playGame();


