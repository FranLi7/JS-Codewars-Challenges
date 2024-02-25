// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// For example:
// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5

// Nathan drinks 0.5 litres of water, 500 ml every hour, 60 min;
// We are given the time in hours and we want to know the number of litres Nathan will drink
// The number must be rounded to the smallest value
// We can solve this using Math.floor()

function litres(time) {
  return Math.floor(time * 0.5);
}

console.log(litres(2));
console.log(litres(12));
console.log(litres(23));
