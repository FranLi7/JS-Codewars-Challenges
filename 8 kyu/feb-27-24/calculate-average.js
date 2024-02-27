// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function findAverage(array) {
  if (array.lenght === 0) {
    return 0;
  }
  const total = array.reduce((total, current) => total + current, 0);

  return total / array.length;
}
