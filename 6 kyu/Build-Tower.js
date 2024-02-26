// https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/javascript

// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:
// [
//   "  *  ",
//   " *** ",
//   "*****"
// ]

// And a tower with 6 floors looks like this:

// [
//   "     *     ",
//   "    ***    ",
//   "   *****   ",
//   "  *******  ",
//   " ********* ",
//   "***********"
// ]

// 1. I need to use a loop to iterate from  0 to the number of floors
// 2. for each floor the number of asterisks is 2 * n - 1;
// 3. The number of spaces on each side of the floor will be the total width of the tower - width of the current floor / 2.

function towerBuilder(nfloors) {
  let tower = [];
  for (let i = 0; i < nfloors; i++) {
    let spaces = ' '.repeat(nfloors - i - 1);
    let stars = '*'.repeat(2 * i + 1);
    tower.push(spaces + stars + spaces);
  }
  return tower;
}

console.log(towerBuilder(6));
