# Freyes96_RockPaperScissors

1. Create a new function named getComputerChoice.
    - Write the code so that getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.
    - The Math.random method returns a random number that’s greater than or equal to 0 and less than 1. Think about how you can use this to conditionally return one of the multiple choices.
    - Test that your function returns what you expect using console.log or the browser developer tools before advancing to the next step.

2. Create a new function named getHumanChoice.
    - Write the code so that getHumanChoice will return one of the valid choices depending on what the user inputs.
    - Use the prompt method to get the user’s input.
    - You do not need to handle reprompting if the user enters an invalid input, as that would require things we will teach later. For now, just assume the user will always enter a valid choice.
    - Test what your function returns by using console.log.

3. Declare the players score variables
    - Create two new variables named humanScore and computerScore in the global scope.
    - Initialize those variables with the value of 0.

4. Write the logic to play a single round
    - Create a new function named playRound.
    - Define two parameters for playRound: humanChoice and computerChoice. Use these two parameters to take the human and computer choices as arguments
    - Make your function’s humanChoice parameter case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations.
    - Write the code for your playRound function to console.log a string value representing the round winner, such as: “You lose! Paper beats Rock”.
    - Increment the humanScore or computerScore variable based on the round winner.

