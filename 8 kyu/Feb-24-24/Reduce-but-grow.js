// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

function grow(x) {
  return x.reduce((total, current) => {
    return total * current;
  }, 1);
}

console.log(grow([2, 3, 2, 3, 4, 2]));

//The reduce method will take all the values inside and turn it into a single value, I could also solve this using a forEach:

function grow2(x) {
  let result = 1;
  x.forEach((element) => {
    result *= element;
  });
  return result;
}
