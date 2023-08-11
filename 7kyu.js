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





///////


  // EXERCISE 8
  ////
  //////////

  // Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD

// {SOLUTION}
///

function alternateCase(s) {
  let result = "";
  for(let i = 0; i < s.length; i++){
    if(s.charAt(i) === s.charAt(i).toUpperCase()){
      result += s.charAt(i).toLowerCase()
    } else{
      result += s.charAt(i).toUpperCase()
    }
    } return result
}

//


/////////
///////////


// EXERCISE 9:
///
////
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.


// {SOLUTION} : //
//////////
//////
var capitals = function (word) {

  let indexes = [];
  for(let i = 0; i < word.length; i++){
    if(word[i] == word[i].toUpperCase() && word[i] !== word[i].toLowerCase()){
      indexes.push(i);
    }
  } return indexes
  
}


// END OF E.9
///////
//////





// Exercise 10
////
//
// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.


// {SOLUTION}
function solution(nums){
  return (nums === null) ? [] : nums.sort((a,b) => a-b)
  
  }



  ///
  ///
///
// Exercise 1.0
//////
// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.
//
//
// {SOLUTION}
///////
////
function findShort(string) {
  let array = string.split(" ");
  let shortestWord = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i].length < shortestWord.length) {
      shortestWord = array[i];
    }
  }
  return shortestWord.length;
}




//
///////
//
// Exercise 2.0
//
// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

// {SOLUTION}
/////
function friend(friends){
  return friends.filter((item)=> item.length === 4)
}
//
///
///


// Exercise 3.0


// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples: (Input --> Output)

// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
//

// {SOLUTION} //
////////
var number=function(array){
  let newArr = [];
  for(let i = 0; i < array.length; i++){
    let element = array[i];
    let newElement = `${i+1}: ${array[i]}`;
    newArr.push(newElement)
  }
return newArr;
}





//
///////

//Exercise 4.0
////////
////
// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
//
//{SOLUTION}////
////
function solution(str, ending){
  let length = ending.length
  return str.includes(ending, str.length - length)
}
  
  
//////
////////


// EXERCISE 5.0:
/////
// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
///////
//////

// {SOLUTION} //
/////////
function longest(s1, s2) {
  let arr = [...s1,...s2]
  return arr.sort().filter((x, i, arr) => arr.indexOf(x) == i).join("")
}
////
////







//
//
// Exercise 6.0
//
// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.
//
//{SOLUTION}
//
function isTriangle(a,b,c){
  let longestSide = Math.max(a,b,c);
  let perimeter = a+b+c;
  return (perimeter - longestSide  >longestSide) ? true : false
}

//
////
// Exercise
// Complete the function/method so that it returns the url with anything after the anchor (#) removed.
//
//{Solution}
//
function removeUrlAnchor(url){
  let newUrl = url.split("#")[0]
   return newUrl
 }
 //
 

 //Exercise simple calculator
 //
//  Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.

//  a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.
 
//  The four operators are "add", "subtract", "divide", "multiply".
 
//  A few examples:(Input1, Input2, Input3 --> Output)
//
// {SOLUTION}
///
function arithmetic(a, b, operator){
  switch (operator) {
   case 'add':
     return a + b;
   case 'subtract':
     return a - b;
   case 'multiply':
     return a * b;
   case 'divide':
     if (b !== 0) {
       return a / b;
     } 
      }
 


      //
      ////
      // Exercise:
//       Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
 //

 //
 // {SOLUTION}:
 function sumTwoSmallestNumbers(numbers) {  
  let firstLow = Math.min(...numbers);
  let indexOne = numbers.indexOf(firstLow);
  numbers.splice(indexOne, 1);
  let secondLow = Math.min(...numbers);
  return firstLow + secondLow;
  
}

// second Solution:
function sumTwoSmallestNumbers(numbers){  
  numbers = numbers.sort(function(a, b){return a - b; });
  return numbers[0] + numbers[1];
};