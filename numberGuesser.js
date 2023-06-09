const prompt = require('prompt-sync')();

let play = true

while(play == true){
    console.log("Welcome to number guesser!\nYou will have to guess a number between 1 and 100(inclusive)")
    const guess = Number(prompt("Please enter your guess:"))
    const number = Math.floor(Math.random() * 100) + 1
    
    if(guess < 1 || guess > 100){
        console.log("Please enter a number between 1 and 100(inclusive)!")
    }
    if(guess == number){
        console.log(`                  Congratulations!!!\nYou guessed it, the number was ${number}.\nYou landed a 1% chance!`)
    }else{
        console.log(`Sorry, the correct number was ${number}.\nDon't feel too bad that you didn't hit the 1% chance. It was to be expected heh.`)
    }
    const userInput = prompt("Would you like to play again?(y/n)")
    if(userInput != "y"){
        console.log("Thanks for playing! Goodbye")
        play = false
    }
}
