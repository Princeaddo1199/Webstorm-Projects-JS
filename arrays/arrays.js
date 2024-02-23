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

// // Date Object
// const date = new Date()
// // console.log(date)
// const year = date.getFullYear()
// const month = date.getMonth()
// const day = date.getDate()
// const hour = date.getHours()
// const newYear = date.setFullYear(2024, 2, 16);
//
// console.log(year, month, day, hour)
// console.log(newYear)

//               *************Array of objects*****************

const details = [
  { name: "Prince addo", gender: "Male", age: 24 },
  { name: "Adams Rafiw", gender: "Male", age: 23 },
  { name: "Sandra", gender: "Female", age: 22 },
  { name: "Wallace Allen Lawson Lartey", gender: "Male", age: 19 },
  { name: "Mary", gender: "Female", age: 22 },
  { name: "Jeremiah", gender: "Male", age: 20 },
  { name: "Cindy", gender: "Female", age: 22 },
  { name: "Cosmos Beryin", gender: "Male", age: 24 },
  { name: "Martha", gender: "Female", age: 22 },
];

details.push({ name: "Daniel Amoako", gender: "Male", age: 35 });
details.push({ name: "Kelvin Otto ", gender: "Male", age: 24 });

console.log(details);

//                      ************Methods of Array of objects****************

//                      ----------forEach() Method--------------------
details.forEach((detail) => console.log(detail.name));
details.forEach((detail) => console.log(detail.age));

//                      ----------------Map() Method-------------------

const detailsNames = details.map((detail) => detail.name);
console.log("Participant names are : ");
console.log(detailsNames);
console.log(detailsNames.reverse());

const detailsAge = details.map((detail) => detail.age);
console.log("Participant ages are : ");
console.log(detailsAge);

//                      --------------filter() Method-------------------

const femaleParticipants = details.filter(
  (detail) => detail.gender === "Female",
);
console.log("The females are : ");
console.log(femaleParticipants);

const maleParticipants = details.filter((detail) => detail.gender === "Male");

console.log("The males are : ");

console.log(maleParticipants);

const ageOfParticipants = details.filter((detail) => detail.age === 24);

console.log("Participants who are 24 years of age are : ");

console.log(ageOfParticipants);
