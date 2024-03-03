// https://www.codewars.com/kata/5a023c426975981341000014/train/javascript
// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.

// https://en.wikipedia.org/wiki/Triangle

// function otherAngle(a, b) {
//   let total = a + b;
//   if (total !== 180) {
//     return 180 - total;
//   }
// }

function otherAngle(a, b) {
  return 180 - (a + b);
  // return a + b !== 180 ? 180 - (a + b) : a + b;
}

console.log(otherAngle(30, 60));
console.log(otherAngle(60, 60));
console.log(otherAngle(23, 90));
console.log(otherAngle(10, 20));
