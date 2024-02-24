// square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

// Note: The function accepts an integer and returns an integer.

// 1. Square every digit of a number and concatenate them
// 2. Return each number to the power of 2 and return the concatenation
// 3. for in loop

function squareDigits(num) {
  let result = '';
  let numStr = num.toString(); // Convert the number to a string
  // Loop through each character in the string
  for (let digit of numStr) {
    let squared = +digit * +digit; // Convert character to number and square it
    result += squared.toString(); // Convert squared number back to string and append to result
  }
  return parseInt(result); // Convert the result string back to an integer
}

console.log(squareDigits(123456789));
