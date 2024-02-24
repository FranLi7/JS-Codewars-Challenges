// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
//2/24/24;

// 0. a function that returns a string repeated by the number param
// 1. I need to use a for loop to solve this problem
// 2. The loop will run 'n' times
// 3. Concatenate the 's' to the empty result variable.

function stringRepeat(n, s) {
  result = '';
  for (let i = 0; i < n; i++) {
    result += s;
  }
  return result;
}

//sample tests
console.log(stringRepeat(10, ' hello world'));

// Other solutions
function stringRepeat2(n, s) {
  return s.repeat(n);
}

repeatStr = (n, s) => s.repeat(n);

console.log(stringRepeat2(10, ' hi'));

// I learned about the repeat method. it looks interesting and useful, especially here
