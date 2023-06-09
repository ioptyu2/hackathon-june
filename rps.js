const prompt = require('prompt-sync')();

const choices = ["rock", "paper", "scissor"]
let draw = 0
let win = 0
let lose = 0

let rps = () => {
    playAgain = true

    while(playAgain == true){
        let userInput = prompt(`Enter either rock, paper or scissor:`)
        if(userInput.toString() != "rock" && userInput.toString() != "paper" && userInput.toString() != "scissor"){
            continue
        }
        let pcInput = choices[Math.floor(Math.random() * 3)]
        console.log(`The computer chose ${pcInput}` )

        if(userInput.toString() == pcInput){
            draw += 1
            console.log("You draw!")
        }
        if(userInput.toString() == "rock"){
            if(pcInput == "scissor"){
                win += 1
                console.log("You Win!")
            }else if(pcInput == "paper"){
                lose += 1
                console.log("You Lose!")
            }
        }else if(userInput.toString() == "paper"){
            if(pcInput == "rock"){
                win += 1
                console.log("You Win!")
            }else if(pcInput == "scissor"){
                lose += 1
                console.log("You Lose!")
            }
        }else if(userInput.toString() == "scissor"){
            if(pcInput == "paper"){
                win += 1
                console.log("You Win!")
            }else if(pcInput == "rock"){
                lose += 1
                console.log("You Lose!")
            }
        }

        let showScore = prompt("Would you like to see your total score?(y/n)")
        
        if(showScore != "y" && showScore != "n"){
            console.log("You entered the wrong thing, now you can't see your score >:]")
        }
        if(showScore == "y"){
            console.log(`So far you have ${win} wins, ${lose} losses and you drew ${draw} times.`)
        }

        let goAgain = prompt("Would you like to play again?(y/n)")

        if(goAgain == "y"){
            console.log("We go again!")
        }else if(goAgain == "n"){
            console.log("Bye!")
            playAgain == false
        }else{
            console.log("Wrong input, play again!")
        }

    }
}


console.log("Welcome to rock paper scissors.")
rps()
