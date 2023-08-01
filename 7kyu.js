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



//
///
//
// exercise 3 
///
/
/
// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5
// Let's assume that all numbers in the input will be integer values.

// My solution:


function sumDigits(number) {
  let absoluteNumber = Math.abs(number);
  let splitString = absoluteNumber.toString().split("")
  let arrInt = splitString.map(x => parseInt(x))
  let result = arrInt.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
return result
  }


  // 
// END OF E3//
////
//


// exercise 4:
/*

In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

At the end of the first year there will be: 
1000 + 1000 * 0.02 + 50 => 1070 inhabitants

At the end of the 2nd year there will be: 
1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

At the end of the 3rd year there will be:
1141 + 1141 * 0.02 + 50 => 1213

It will need 3 entire years.

*/

// ********{ MY SOLUTION } **********
//
//////////
function nbYear(p0, percent, aug, p) {
    
  for (var years = 0; p0 < p; years++) {
    p0 = Math.floor(p0 + p0 * percent / 100 + aug);
  }
  return years
}

//
// EXERCISE 5
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.


// {SOLUTION}:

//


function reverseWords(str) {
  return str.split(" ").map((s) => s.split('').reverse().join('')).join(' ') 
}


// 
/////////


// EXERCISE 6

// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

// For example, if this array were passed as an argument:

// ["Telescopes", "Glasses", "Eyes", "Monocles"]

// Your function would return the following array:

// ["Eyes", "Glasses", "Monocles", "Telescopes"]


// {SOLUTION} //////////
/////////////
////



function sortByLength (array) {
  return array.sort((a,b) => a.length - b.length)
    }


    ///
    //
    // Exercise 7
    ////


//     Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.



// {SOLUTION }


var isAnagram = function(test, original) {
  if(test.toLowerCase().split('').sort().join('') === original.toLowerCase().split('').sort().join('')){
    return true
  } else {
    return false
  }
  }



