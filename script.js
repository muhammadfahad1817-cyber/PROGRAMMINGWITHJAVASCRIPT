// // // // // variable -> container store data
// // // // // var: global -> can be access in whole file
// // // // var name = "Ali"

// // // // // block
// // // // {
// // // // let age = 20
// // // // // let: reassign -> allowed
// // // // age=50
// // // // // access global inside block
// // // // console.log(name)
// // // // console.log(age)

// // // // // const: reassign -> not allowed
// // // // const PI = 3.14

// // // // // ReAssign Const
// // // // PI = 5.13 //ERROR

// // // // console.log(PI)
// // // // }

// // // // // access block variable outside block
// // // // console.log(age) //ERROR



// // // // Data Types
// // // // let city = "Karachi" //string
// // // // let price = 20 //number
// // // // let isOpen = true //boolean
// // // // let car = null //null
// // // // let test //undefined
// // // // let student = {"name":"sara", "garde":"A"} //object



// // // // Operators
// // // // Arithmetic

// // // let a = 10 + 5 //15
// // // let b = 10 - 5 //5
// // // let c = 10 * 5 //50
// // // let d = 10 / 5 //2
// // // let e = 10 % 5 // 0
// // // console.log(1000 % 99999999) //1000


// // // // Conditional -> true/false
// // // console.log(5 == 5)//t
// // // console.log(5 != 5)//f
// // // console.log(5 > 5)//f
// // // console.log(5 >= 5)//t
// // // console.log(5 <= 10)//t

// // // console.log("5" == 5) //t
// // // console.log("5" === 5) //f
// // // console.log("5" != 5) //f
// // // console.log("5" !== 5) //t

// // // // Assignment
// // // let number = 10 
// // // number += 5 //15
// // // number -= 8 //7
// // // number *= 2 //14
// // // number /= 2 //7
// // // number %= 2 //1

// // // // logical

// // // console.log(5>5 && 5<=9) //f
// // // console.log(5>5 || 5<=9) //t
// // // console.log(!(5>5)) //t
// // // console.log(!(5>5)&&(5==2 || 11>=10))//t

// // // conditinal statement
// // let age = 27
// // if(age >= 18){
// //     console.log("Eligible for vote cast")
// // }else{
// //      console.log("Not Eligible for vote cast")
// // }

// // let marks = 39
// // if(marks >= 80){
// //     console.log("A+")
// // }else if(marks >= 70){
// //     console.log("A")
// // }else if(marks >= 60){
// //     console.log("B")
// // }else if(marks >= 50){
// //     console.log("C")
// // }else if(marks >= 40){
// //     console.log("D")
// // }else{
// //     console.log("Fail")
// // }


// // let number = 6
// // for(let i = 1; i<=10; i++){
// //     console.log(`${number} X ${i} = ${number * i}`)
// // }

// let i = 1
// while(i<=3){
//     console.log(`Count: ${i}`)
//     // statement -> condition false
//     i++
// }


//without parameter
// function greet(){
//     console.log("Hey there")
//     console.log("How do you do?")
// }

// // use -> call
// greet()
// greet()
// greet()
// greet()
// greet()
// greet()


//with parameter + void(print)
// function greet(name){
//     console.log(`Hello, ${name}`);
// }

// //call-> arguments
// greet('Ali');
// greet('Aliyan');
// greet('Shayan');

//with parameter + return(calculations)
// function sum(num1, num2){
//     return num1+num2
// }
// //return function value can be store in variable
// let addition = sum(10,20)//30
// console.log(addition)

//default parameter
// function sum(num1, num2=30){
//     return num1+num2
// }
// //return function value can be store in variable
// let addition1 = sum(10)//40
// let addition2 = sum(10,2)//12
// console.log(addition1)
// console.log(addition2)


// function sum(num1, num2=30){
//     return num1+num2
// }

// arrow function (ES6)
// const sum = (num1, num2=30) => num1 + num2


// //return function value can be store in variable
// let addition1 = sum(10)//40
// let addition2 = sum(10,2)//12
// console.log(addition1)
// console.log(addition2)



// array

// let fruits = ["Apple", "Mango", "Banana", "PineApple"]
// // Index:       0          1        2

// // Single Element
// console.log(fruits[1])

// //looping over array
// for(let fruit of fruits){
//     console.log(fruit)
// }

//objects

let student = {
    name:"ALiyan",
    age:20,
    garde: "A",
   greet: function(){
    return `Hello, ${this.name}`
   }
}

console.log(student.name)
console.log(student.greet())