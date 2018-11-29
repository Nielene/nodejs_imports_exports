const firstLetter = str => {
  return str[0]
}

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

const reverseStringJonA = str => {
  return str.split("").reverse().join("");
}

const capFirstLetter = str => {
  
}


module.exports = {
  firstLetter,
  // reverseString,
  reverseStringJonA
}
