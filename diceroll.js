const prompt = require('prompt-sync')();
let roll = true

while(roll == true){
    let rolls = []
    let highestRoll = 0
    let total = 0
    console.log("Welcome to dice roll!")
    let diceSides = prompt("Please enter what sided dice you would like to roll:")
    if(diceSides < 2){
        console.log("Please enter a number greater than 1!")
        continue
    }
    let diceNumber = prompt("Please enter how many dice you would like to roll:")
    if(diceNumber < 1){
        console.log("Please enter a number greater than 1!")
        continue
    }
    for(let i = 0; i < diceNumber; i++){
        rolls.push((Math.floor(Math.random() * diceSides)) + 1)
        total += rolls[i]
        if(rolls[i] > highestRoll){
            highestRoll = rolls[i]
        }
    }
    console.log(`Your highest roll was a ${highestRoll}.\nHere's the list of all your rolls: ${rolls}.\nYour total is ${total}`)

    let userInput = prompt("Would you like to play again?(y/n)")
    if(userInput != "y"){
        console.log("Thank you for playing. Goodbye!")
        roll = false
    }
}
