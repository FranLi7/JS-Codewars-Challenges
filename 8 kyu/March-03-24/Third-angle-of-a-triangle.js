// // https://www.codewars.com/kata/5a023c426975981341000014/train/javascript
// // You are given two interior angles (in degrees) of a triangle.

// // Write a function to return the 3rd.

// // Note: only positive integers will be tested.

// // https://en.wikipedia.org/wiki/Triangle

// // function otherAngle(a, b) {
// //   let total = a + b;
// //   if (total !== 180) {
// //     return 180 - total;
// //   }
// // }

// function otherAngle(a, b) {
//   return 180 - (a + b);
//   // return a + b !== 180 ? 180 - (a + b) : a + b;
// }

// console.log(otherAngle(30, 60));
// console.log(otherAngle(60, 60));
// console.log(otherAngle(23, 90));
// console.log(otherAngle(10, 20));

// setTimeout(() => {
//   console.log('One second has elapsed.');
// }, 1_000);

// setTimeout();

// Import Statement for Prompt-Sync Library
const prompt = require('prompt-sync')({ sigint: true });

// Write Your Code Below
// Function to calculate the total cost and print the receipt
function generateReceipt(
  colorPounds,
  whitePounds,
  darkPounds,
  needDetergent,
  needSoftener,
  dryerSheets
) {
  // Constants for prices
  const PRICE_PER_POUND_COLOR = 2.5;
  const PRICE_PER_POUND_WHITE = 4.0;
  const PRICE_PER_POUND_DARK = 6.0;
  const PRICE_DETERGENT = 1.5;
  const PRICE_SOFTENER = 1.0;
  const PRICE_DRYER_SHEETS = 0.5;
  const MAX_LOAD_SIZE = 10;

  // Calculate loads
  let colorLoads = Math.ceil(colorPounds / MAX_LOAD_SIZE);
  let whiteLoads = Math.ceil(whitePounds / MAX_LOAD_SIZE);
  let darkLoads = Math.ceil(darkPounds / MAX_LOAD_SIZE);
  let totalLoads = colorLoads + whiteLoads + darkLoads;

  // Calculate costs
  let colorCost = colorPounds * PRICE_PER_POUND_COLOR;
  let whiteCost = whitePounds * PRICE_PER_POUND_WHITE;
  let darkCost = darkPounds * PRICE_PER_POUND_DARK;
  let detergentCost = needDetergent ? totalLoads * PRICE_DETERGENT : 0;
  let softenerCost = needSoftener ? totalLoads * PRICE_SOFTENER : 0;
  let dryerSheetsCost = totalLoads * dryerSheets * PRICE_DRYER_SHEETS;

  // Total cost
  let totalCost =
    colorCost +
    whiteCost +
    darkCost +
    detergentCost +
    softenerCost +
    dryerSheetsCost;

  // Print the receipt
  console.log('-----------------------------------------');
  console.log('|            Receipt                     |');
  console.log('| Services:                              |');
  console.log(
    `| - Color Load:         ${colorPounds} lbs   $${colorCost.toFixed(2)} |`
  );
  console.log(
    `| - Whites Load:        ${whitePounds} lbs   $${whiteCost.toFixed(2)} |`
  );
  console.log(
    `| - Darks Load:         ${darkPounds}  lbs   $${darkCost.toFixed(2)}  |`
  );
  console.log('|                                        |');
  console.log('| Additional Services:                   |');
  console.log(
    `| - Detergent:          ${totalLoads} loads  $${detergentCost.toFixed(2)}|`
  );
  console.log(
    `| - Softener:           ${totalLoads} loads  $${softenerCost.toFixed(2)} |`
  );
  console.log(
    `| - Dryer Sheets:       ${
      totalLoads * dryerSheets
    } pcs   $${dryerSheetsCost.toFixed(2)} |`
  );
  console.log('|                                        |');
  console.log(`| Subtotal:             $${totalCost.toFixed(2)} |`);
  console.log(`| Total:                $${totalCost.toFixed(2)}  |`);
  console.log(`|                                        |`);
  console.log(`| Thank you, have a nice day!            |`);
  console.log('-----------------------------------------');
}

function mainMenu() {
  console.log('----------------------------------------- ');
  console.log('|                  Menu                   |');
  console.log('----------------------------------------- ');
  console.log('| Services:                               |');
  console.log('| - 🌈  Color Load:       $2.50 per pound |');
  console.log('| - ⚪  Whites Load:      $4.00 per pound |');
  console.log('| - ⚫  Darks Load:       $6.00 per pound |');
  console.log('| - Detergent:            $1.50 per round |');
  console.log('| - Softener:             $1.00 per round |');
  console.log('| - Dryer Sheets:         $0.50 each      |');
  console.log('------------------------------------------');

  console.log("\nWelcome to Miss Bubble's Laundromat.\n");

  //Get user input
  let colorPounds = parseFloat(
    prompt('How many pounds of color clothes would you like to wash? ')
  );
  let whitePounds = parseFloat(
    prompt('How many pounds of white clothes would you like to wash? ')
  );
  let darkPounds = parseFloat(
    prompt('How many pounds of dark clothes would you like to wash? ')
  );
  let needDetergent =
    prompt('Do you need detergent (true/false)?').toLowerCase() === 'true';
  let needSoftener =
    prompt('Do you neeed fabric softener (true/false)? ').toLowerCase() ===
    'true';
  let dryerSheets = parseFloat(
    prompt('How many dryer sheets per drying load? ')
  );

  // Generate and print receipt
  generateReceipt(
    colorPounds,
    whitePounds,
    darkPounds,
    needDetergent,
    needSoftener,
    dryerSheets
  );
}

mainMenu();
