// define variable to track user and computer score 
let userScore = 0 
let computerScore = 0

// user choice get 
 const choices = document.getElementsByClassName('choice')
 const msgContainer = document.getElementById('msg')
 const userScorePara = document.getElementById('user-score')
 const compScorePara = document.getElementById('computer-score')
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
//    console.log(`user clicked: ${userChoice}`)
    const computerChoice = genCompChoice() // rock, paper, scissor -> random
    // console.log(`Computer Chose: ${computerChoice}`)
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
            showWinner(userWin, computerChoice, userChoice )
            
        }
    }



function genCompChoice(){
    const options = ['rock', 'paper', 'scissor']
     const randomIndex = Math.floor(Math.random()*3) //0,1,2
     return options[randomIndex]
}

function draw(){
    //  console.log("draw")
    msgContainer.innerText = "Draw, Play Again!"
    msgContainer.style.backgroundColor = 'rgb(5, 5, 36)'
}

function showWinner(userWin, computerChoice, userChoice){
    if(userWin == true){
        userScore++
        userScorePara.innerText = userScore
        // console.log(`You Win: Computer Chose ${computerChoice} | User Chose ${userChoice}`)
        msgContainer.innerText = `You Win: Computer Chose ${computerChoice} | User Chose ${userChoice}`
        msgContainer.style.backgroundColor = 'green'
    } else{
        computerScore++
          compScorePara.innerText = computerScore
        // console.log(`You Lose: Computer Chose ${computerChoice} | User Chose ${userChoice}`)
        msgContainer.innerText = `You Lose: Computer Chose ${computerChoice} | User Chose ${userChoice}`
         msgContainer.style.backgroundColor = 'red'

    }
}