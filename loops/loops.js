const prompt = require("prompt-sync")();

// // create an empty array that will recieve objects from the user and use loops to fill the array
// const objectArray = [];
//
// for (let i = 0; i < 3; i++) {
//   // Replace 3 with the number of objects you want to add
//   const object = {
//     key: prompt("Enter key for object " + (i + 1) + ":"),
//     value: prompt("Enter value for object " + (i + 1) + ":"),
//   };
//   objectArray.push(object);
// }
//
// console.log(objectArray);

// console.log(ourArray.reverse());
// ourArray.push("Plantain");
// console.log(ourArray.toReversed());

// const objectArray = [];
//
// for (let i = 0; i < 5; i++) {
//   const object = prompt("Enter your objects please : ");
//   objectArray.push(object);
// }
// console.log(objectArray);

// let reversedArray = [];
// for (let i = ourArray.length - 1; i >= 0; i--) {
//   reversedArray.push(ourArray[i]);
// }
// console.log("Reversed Array :");
// console.log(reversedArray);
//
const cats = ["Leopard", "Serval", "Jaguar", "Caracal", "Lion"];
// for (const cat of cats) {
//   console.log(cat);
// }
//
// //                map() and filter()
// // Wit map(), you can use it to do something in a collection(array) and return a new collection(array) with the results.
// //                                   ********map()*********
// //                                   ********EXAMPLES*********
//
// function toUpper(string) {
//   return string.toUpperCase();
// }
//
// const upperCasedCats = cats.map(toUpper);
//
// console.log(upperCasedCats);
//
// function toLower(string) {
//   return string.toLowerCase();
// }
//
// const lowerCasedCats = cats.map(toLower);
//
// console.log(lowerCasedCats);
//
// //  with filter(), it can be used to test each item in a collection(array) and a create a new collection(array)
// //  containing only items that match
// //                                   ********filter()*********
// //                                   ********EXAMPLES*********
//
// function lcat(cat) {
//   return cat.startsWith("L");
// }
// const catsWithNameL = cats.filter(lcat);
//
// console.log(catsWithNameL);
//
// function scat(cat) {
//   return cat.startsWith("S");
// }
//
// // const catsWithNameS = cats.filter(scat);
// // console.log(catsWithNameS);
//
// //                     This looks simple but abit confusing
//
// const catsWithNameS = cats.filter((cat) => cat.startsWith("S"));
// console.log(catsWithNameS);
//
// //                   *********Calculating squares of numbers**********

// const squares = [];
// const userInput = prompt("Enter a number: ");
// uInput = parseInt(userInput);
// function calculate() {
//   for (let i = 1; i < 10; i++) {
//     const square = uInput * uInput;
//     return square;
//   }
// }
//
// squares.push(calculate());
// console.log(squares);

// function getSquares() {
//   const squares = [];
//   for (let i = 1; i < 10; i++) {
//     let num = parseInt(prompt("Enter a number: "));
//     squares.push(num ** 2);
//   }
//   return squares;
// }
//
// console.log(getSquares());

const names = [];

for (let i = 0; i < 5; i++) {
  const name = prompt("Enter a name: ");
  names.push(name);
}
console.log(names);
