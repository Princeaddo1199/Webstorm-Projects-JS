const prompt = require("prompt-sync")();

//create an empty array that will recieve objects from the user and use loops to fill the array
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

const ourArray = [];

for (let i = 0; i < 5; i++) {
  ourArray.push(prompt("Please enter a the object here: "));
}

console.log(ourArray);

// console.log(ourArray.reverse());
// ourArray.push("Plantain");
// console.log(ourArray.toReversed());

let reversedArray = [];
for (let i = ourArray.length - 1; i >= 0; i--) {
  reversedArray.push(ourArray[i]);
}
console.log("Reversed Array :");
console.log(reversedArray);
