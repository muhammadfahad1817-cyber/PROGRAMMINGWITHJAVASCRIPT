// console.log("Task 1")
// setTimeout(()=>{console.log ("Task 2 done after 2 seconds")},2000)
// console.log("Task 3")

function greetuser (name, callback){
    console.log(`Hello ${name}`)
    callback()
}

function aftergreet (){
    console.log ("welcome to our website")
}


greetuser("Ali", aftergreet)
// aftergreet()