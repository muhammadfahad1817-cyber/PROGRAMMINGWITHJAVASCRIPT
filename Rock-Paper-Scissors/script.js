// define variable to track user and computer score 
let userScore = 0 
let computerScore = 0

// user choice get 
 const choices = document.getElementsByClassName('choice')
//  console.log(choices)

for(let choice of choices){
    choice.addEventListener('click', function(){
        // console.log("user clicked something ......")
        let userChoice = choice.getAttribute('id')
        // console.log(`user clicked: ${userChoice}`)
        playgame(userChoice)
    })
}

function playgame (userChoice){
   console.log(`user clicked: ${userChoice}`)
    const computerChoice = genCompChoice() // rock, paper, scissor -> random
    console.log(`Computer Chose: ${computerChoice}`)
    if(userChoice == computerChoice){
       draw()
    } else{
        // console.log("Should be a win or lose")
        let userWin = true

        //user choice rock , system have paper or scissor
        if(userChoice == "rock"){
           
            userWin = computerChoice == "scissor" ? true : false 
            } else if(userChoice == "paper"){
                userWin = computerChoice == "rock" ? true : false
            } else{
                 userWin = computerChoice == "paper" ? true : false
            }
            showWinner(userWin)
            
        }
    }



function genCompChoice(){
    const options = ['rock', 'paper', 'scissor']
     const randomIndex = Math.floor(Math.random()*3) //0,1,2
     return options[randomIndex]
}

function draw(){
     console.log("draw")
}

function showWinner(userWin){
    if(userWin == true){
        console.log("You win")
    } else{
        console.log("You lose")
    }
}