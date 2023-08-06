// EXERCISE 1 of 8kyu:

////

// Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.

// The geese are any strings in the following array, which is pre-populated in your solution:

//   ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
// For example, if this array were passed as an argument:

//  ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
// Your function would return the following array:

// ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]

// MY SOLUTION:
function gooseFilter(birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  let filteredArray = [];
  for (let i = 0; i < birds.length; i++) {
    if (!geese.includes(birds[i])) {
      filteredArray.push(birds[i]);
    }
  }
  return filteredArray;
}

// Exercise 2
//////
// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

// {SOLUTION}
//
function positiveSum(arr) {
  let sum = arr.reduce((acc, el) => {
    if (el > 0) acc += el;
    return acc;
  }, 0);
  return sum;
}
