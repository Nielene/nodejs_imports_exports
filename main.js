const mathModule = require("./math-module.js");
const stringModule = require("./strings-module.js");

// let result = mathModule.sum;

console.log(mathModule.sum(3,6));
console.log(mathModule.multiply(2, 5));
console.log(mathModule.divide(20, 10));
console.log(mathModule.square(5));

console.log(stringModule.firstLetter("hello"));
console.log(stringModule.reverseStringJonA("hello"));
console.log(stringModule.capFirstLetter("hello"));
