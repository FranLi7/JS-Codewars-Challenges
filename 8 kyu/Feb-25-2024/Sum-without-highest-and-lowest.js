// https://www.codewars.com/kata/576b93db1129fcf2200001e6/train/javascript

// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6

function sumArray(array) {
  if (!array || array.length <= 2) {
    return 0;
  }

  array.sort((a, b) => a - b);

  return array.slice(1, -1).reduce((sum, num) => sum + num, 0);
}

const arr1 = [1, 2, 3];
const arr2 = arr1;
const arr3 = [...arr1];
console.log(arr1);
console.log(arr2);

arr2[0] = 1999;
arr2.push(20);

console.log(arr1);
console.log(arr2);
console.log(arr3);

function cloneArray(arr) {
  return [...arr];
}

console.log(cloneArray([12, 23, 23, 23, 32]));

const nestedObj = {
  a: 1,
  b: 2,
  c: { d: 3, f: 4 },
};

const deepCopied = JSON.parse(JSON.stringify(nestedObj));
deepCopied.c.f = 69;
console.log(deepCopied.c.f);
console.log(nestedObj.c.f);
