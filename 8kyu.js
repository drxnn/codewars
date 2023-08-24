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

////
//Exercise 3
////
// Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):
//
// {SOLUTION}:

function sumStr(a, b) {
  return (+a + +b).toString();
}

//
//
//Exercise 4//
//////
// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9
//
//{SOLUTION}
function squareSum(numbers) {
  return numbers
    .map((x) => x ** 2)
    .reduce((acc, curr) => {
      acc += curr;
      return acc;
    }, 0);
}

//
//
// Exercise:
// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
//{SOLUTION}
//
function invert(array) {
  return array.map((x) => {
    return Math.sign(x) === 1 ? -Math.abs(x) : Math.abs(x);
  });
}

//
//Exercise:
// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
//{SOLUTION}
function countSheeps(arrayOfSheep) {
  let count = 0;
  arrayOfSheep.forEach((x) => {
    if (x === true) {
      count++;
    }
  });
  return count;
}

// or this solution:
function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}

// END OF EXERCISE
//

//EXERCISE:
//Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]
//{SOLUTION}
let reverseSeq = function (n) {
  let arr = [];
  for (let i = n; i > 0; i--) {
    arr.push(i);
  }
  return arr;
};

//
