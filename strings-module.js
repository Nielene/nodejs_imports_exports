// const mathModule = require("./math-module.js")


const firstLetter = str => {return str[0]}
const reverseStringJonA = str => {return str.split("").reverse().join("");}
const capFirstLetter = str => {return str[0].toUpperCase() + str.slice(1)}

module.exports = {
  firstLetter,
  // reverseString,
  reverseStringJonA,
  capFirstLetter
}

// console.log(mathModule.sum(4,5));

//----------------------------------------
// const reverseString = str => {
//   let reverseStr = "";
//   for (let i = 0; i < str.length; i++) {
//     str.split();
//     reverseStr.push(str.pop())
//     reverseStr.join()
//   }
//   return reverseStr;
// }

// const reverseStringJonA = str => {
//   let splitted = str.split("");
//   let reversed = splitted.reverse();
//   let joined = reversed.join("");
//   return joined;
// }
