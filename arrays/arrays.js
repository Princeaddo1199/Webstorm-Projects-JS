// const prompt = require("prompt-sync")();
// const cars = ["Benz", "Toyota", "BMW", "volvo"]
//
// // console.log(cars)
// const names = [
//     "Prince",
//     "Addo",
//     "Sheldon",
//     "Rosemary"
// ]
// // console.log(names)
//
// const countries = []
//
// countries[0] = "Ghana"
// countries[1] = "USA"
// countries[2] = "Germany"
// countries[3] = "United Kingdom"
// countries[4] = "China"
// countries[5] = "Canada"
//
// // console.log(countries)
//
// const carsNew = new Array("Audi", "Kantanka", "Bantama")
// carsNew[2] = "Opel"
// carsNew[3] = "Caravan"
//
// // console.log(carsNew.toString())
//
// let car = carsNew[2]
// // console.log(car)
//
//
//
// // Arrays are objects
// const person = {firstName:"Prince", lastName:"Addo", age:27}
// console.log(person.firstName, person.lastName, person.age)
//
// //Arrays can be objects
//
// const myArrays = []
// myArrays[0] = Date.now;
// myArrays[1] = carsNew;
//
// // console.log(myArrays)
//
// // Array properties and methods
// const fruits = ["Banana", "Apple", "Orange", "Pawpaw"]
//
// console.log(fruits.length)
//
// // Accessing the first element
//
// console.log(fruits[0])
//
// // Accessing the last element
// console.log(fruits[fruits.length - 1])
//
// // Accessing the last element
// console.log(fruits[fruits.length - 2])
//
// // Looping Array Elements
//
// // Using the for loop
//
// for (let i = 0; i < fruits.length; i++){
//     console.log(fruits[i])
//
// }
// const user = prompt("Enter a fruit please :")
//
// for (let i = 0; i < fruits.length; i++){
//     if (fruits[i] === user){
//         console.log("You are really enjoying this " + fruits[i]);
//         break;
//     }
// }
//
// // Using the forEach function
//
// fruits.forEach((item, index, array) => {
//     console.log(index, item,)
// })
//
// fruits.forEach((item, index, array) =>{
//     if (item === "Orange"){
//         item = item.toUpperCase()
//     }else{
//         item = item.toLowerCase()
//     }
//     console.log(item, index)
// })
//
//
// // ADDING MORE ELEMENTS TO ARRAY
// fruits.push("Lemon", "Mango", "Pineapple")
// console.log(fruits)
// console.log(fruits.length)
//
//
// // How to recorgnise an array
// console.log(typeof fruits)
// console.log(Array.isArray(fruits));
// console.log(fruits.splice(0, 1))
// console.log(fruits)


// Date Object
const date = new Date()
// console.log(date)
const year = date.getFullYear()
const month = date.getMonth()
const day = date.getDate()
const hour = date.getHours()
const newYear = date.setFullYear(2024, 2, 16);

console.log(year, month, day, hour)
console.log(newYear)
