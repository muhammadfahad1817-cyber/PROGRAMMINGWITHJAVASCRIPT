console.log("Task 1")
setTimeout(()=>{console.log ("Task 2 done after 2 seconds")},2000)
console.log("Task 3")

function greetuser (name){
    console.log(`Hello ${name}`)
}

function aftergreet (){
    console.log ("welcome to our website")
}


greetuser("Ali")
aftergreet()