const prompt = require('prompt-sync')();

class unit{
    constructor(name){
        this.name = name
        this.level = 1
        this.health = 15 + (this.level * 2)
        this.attack = 5
    }


}

class hero extends unit {
    constructor(name){
        super(name)
        this.armour = 3
    }


}



console.log("Welcome to Adventure Quest!")
const userInput = prompt("Please enter your character name:")
const player = new hero(userInput)
console.log(player)
