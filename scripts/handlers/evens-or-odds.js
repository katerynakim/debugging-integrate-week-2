'use strict';
// write the logic

console.log('--- loading: evens or odds');

function evensOrOddsHandler() {
  debugger;
  console.log('\n--- action: sum numbers in range ---');
  console.log('range:', typeof range, '\n', range);

  // read user input
  const displayEvens = confirm('would you like to see even numbers?');
  console.log('displayEvens:', typeof displayEvens, '\n', displayEvens);

  // perform core logic
  /* create a comma-separated list if all the evens or odds in the range
    if range is 5 and the user asks for evens:
      "2, 4, "
    if range is 5 and the user asks for odds:
      "1, 3, 5, "
    if range is 8 and the user asks for evens:
      "2, 4, 6, 8, "
    ...
  */
  let listedEvens = '';
  for ( let i = 1; i <= range ; i++) {
    if ((i % 2) !== 0) { 
      continue;
    }
    listedEvens += i + `, `;
  }
  console.log('listedEvens:', typeof listedEvens, '\n', listedEvens);

  // alert result for the user
  alert(listedEvens);


  const displayOdds = confirm('would you like to see odd numbers?');
  console.log('displayOdds:', typeof displayOdds, '\n', displayOdds);

  let listedOdds = '';
  for ( let i = 1; i <= range; i++) {
    if ((i % 2) === 0) {
      continue;
    }
    listedOdds += i + `, `;
  }
  console.log('listedOdds:', typeof listedOdds, '\n', listedOdds);

  alert(listedOdds);

}