// // console.log("Task 1")
// // setTimeout(()=>{console.log ("Task 2 done after 2 seconds")},2000)
// // console.log("Task 3")

// function greetuser (name, callback){
//     console.log(`Hello ${name}`)
//     callback()
// }

// function aftergreet (){
//     console.log ("welcome to our website")
// }


// greetuser("Ali", aftergreet)
// // aftergreet()

// Promise
// 1:pending
// 2:resolve(fulfill)
// 3:rejected(not fulfill)

// promise -> class
// create object

// let promiseobj = new Promise ((resolve, rejected)=>{
//     // console.log("Hey i am a promise")
//     rejected("Try again")
// })


let promiseobj = new Promise ((resolve,reject)=>{
    let success = true
    setTimeout(()=>{
        if(success){
            resolve("Promise is fulfilled by shakeel")
        }else{
            reject("Shakeel dhokay bazz")
        }
    },2000)
})