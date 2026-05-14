// function orderFood(foodItem){
//     return new Promise ((resolve, reject)=>{
//         console.log(`Ordering ${foodItem}.....`)

//         setTimeout(() =>{
//             let isAvailable = Math.random() > 0.3 //70% true
//             if(isAvailable){
//                 resolve(`${foodItem} has been prepared and delievered`)
//             }else{
//                 reject(`Sorry, ${foodItem} is out of stock`)
//             }
//         }, 5000)
        
//     })
// }
// orderFood("Pizza")

// .then(successmessage=> console.log(successmessage))
// .catch(errormessage=> console.log(errormessage))
// .finally(()=>{console.log("Thank you for choosing us")})


function washclothes(){
    return new Promise ((resolve)=>{
        setTimeout(() => {
            console.log("Clothes washed")
            resolve()
        },10000)
    })
}


function dryclothes(){
    return new Promise ((resolve)=>{
        setTimeout(() => {
            console.log("Clothes dried")
            resolve()
        },5000)
    })
}

//Async
// washclothes()
// dryclothes()

//sync -> async await function
async function dolaundary(){
    console.log("Starting laundary")
    await washclothes()
    await dryclothes()
    console.log("Laundary Done.")
}

dolaundary()