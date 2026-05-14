function orderFood(foodItem){
    return new Promise ((resolve, reject)=>{
        console.log(`Ordering ${foodItem}.....`)

        setTimeout(() =>{
            let isAvailable = Math.random() > 0.3 //70% true
            if(isAvailable){
                resolve(`${foodItem} has been prepared and delievered`)
            }else{
                reject(`Sorry, ${foodItem} is out of stock`)
            }
        }, 5000);
        
    })
}
orderFood("Pizza")

.then(successmessage=> console.log(successmessage))
.catch(errormessage=> console.log(errormessage))
.finally(()=>{console.log("Thank you for choosing us")})