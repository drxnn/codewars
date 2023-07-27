//
//
// exercise
// Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

// Task
// Write a function that returns both the minimum and maximum number of the given list/array.

// Examples (Input --> Output)
// [1,2,3,4,5] --> [1,5]
// [2334454,5] --> [5,2334454]
// [1]         --> [1,1]

// My solution:

function minMax(arr) {
  let result = [];
  result.push(Math.min(...arr), Math.max(...arr));
  return result;
}
//
// end of exercise //
//
//
//

// exercise 2:

//Your task is to write function factorial.
//In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.

// Write a function to calculate factorial for a given input. If input is below 0 throw a RangeError (JavaScript).

//My solution ****
let factorial = (n) => {
  if (n > 1) {
    return n * factorial(n - 1);
  } else if (n == 0 || n == 1) {
    return 1;
  } else {
    throw new RangeError("Cannot factorize negative nums");
  }
};
