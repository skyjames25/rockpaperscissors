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