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
}
