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
  number = Math.abs(number);
  let str = number.toString().split("");
  return str.map((x) => parseInt(x)).reduce((acc, curr) => acc+= curr)
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


//
// Exercise 
// Given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

//{Solution:}
function findShort(string) {
  let str = string.split(" ").sort((a,b)=> a.length - b.length);
    return str[0].length;
  }
  //
  // Exercise:
//   You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.
//
//{SOLUTION}
//
function smallEnough(a, limit){
for(let el of a){
  if (el > limit){
    return false
  }
} return true
}


// Exercise : 
//
// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
//
//{SOLUTION}
function disemvowel(str) {
  let vowels = "AEIOUaeiou"
const filteredStr = str.split("").filter(x => vowels.indexOf(x) === -1).join("");
  return filteredStr
}



//
//Alphabet exercise:
// When provided with a letter, return its position in the alphabet.
// Input :: "a"
// Ouput :: "Position of alphabet: 1"

//Solution:
function position(letter){
  let alphabet ="abcdefghijklmnopqrstuvwxyz"
return`Position of alphabet: ${alphabet.indexOf(letter) +1}`
}

//end



//Exercise :
// Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?
// input:    output:
// 0    ->   0
// 3    ->   5
// 12   ->   15
// -2   ->   0
// -5   ->   -5
// etc.
// {SOLUTION}
//
function roundToNext5(n){
  while(n % 5 !== 0) n++;
  return n;
}



//Exercise:
// The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).
// If the score < 0, return 0.
// checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
// checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7

// {SOLUTION}
function checkExam(array1, array2) {
 let score = 0;
 for(let i = 0; i < array1.length;i++){
   if(array1[i] === array2[i]){
     score += 4
   } else if(array2[i] == ""){
     score += 0
   } else{
     score -= 1
   }
 } return Math.max(score, 0);
}

//
//
//Exercise:
// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
//{SOLUTION}
//
function solve(s){
  let counter = 0;
let value = s.split("").reduce((acc, curr) => {
  if(curr === curr.toUpperCase()){
    acc++
  } return acc
},counter);
  if(value > s.length/2){
    return s.toUpperCase()
  } else{
    return s.toLowerCase();
  }
}

//Exercise:
// Several people are standing in a row divided into two teams.
// The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

// Task
// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.
//{SOLUTION}
function rowWeights(array){
  let result = []
 let teamOne = array.reduce((acc, curr, i) => {
   if(i % 2 === 0){
     acc += curr
   } return acc
 }, 0)
 let teamTwo = array.reduce((acc,curr,i)=> {
   if(i % 2 === 1){
     acc += curr
   } return acc
 }, 0)
return [teamOne, teamTwo]
}
//

// Exercise:

// Your task:
// Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

// A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

// Examples:
// checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
// checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false
//
// {SOLUTION}
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  let dateCurr = new Date(currentDate).getTime();
  let dateExp = new Date(expirationDate).getTime();
  return (enteredCode === correctCode && dateCurr <= dateExp) ? true : false
  }
// 
//Simpler version:
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  return enteredCode===correctCode && new Date(currentDate) <= new Date(expirationDate);
}


//
//Exercise:
// Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

// For Example:

// [ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
// , [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
// , [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
// ]
// So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.
//
// {SOLUTION}
function sumOfMinimums(arr) {
  return arr.map((x) => Math.min(...x)).reduce((acc, curr) => acc += curr)
}
//
//
// Exercise:
// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers
// For example:
// gimme([2, 3, 1]) => 0
//
// {SOLUTION}
function gimme (triplet) {
  let min = Math.min(...triplet)
    let max = Math.max(...triplet);
    return triplet.indexOf(triplet.filter((x) => x !== min && x !== max)[0]);
  }
  //
  //
  

  //Exercise:
//   Complete the function nato that takes a word in parameter and returns a string that spells the word using the NATO phonetic alphabet.

// There should be a space between each word in the returned string, and the first letter of each word should be capitalized.

//Kata has a LETTERS object built in

// Examples
// "hi"      -->  "Hotel India"
// "Banana"  -->  "Bravo Alpha November Alpha November Alpha"
//
//{SOLUTION}

function nato(word) {
  let result = "";
	let arr = word.split("");
  arr.forEach((el) => {
    result += `${LETTERS[el.toUpperCase()]} `;
  })
 return result.trim()
}


//Exercise:
//Your task is to write a function which returns the sum of a sequence of integers.
// The sequence is defined by 3 non-negative values: begin, end, step.

// If begin value is greater than the end, your function should return 0. If end is not the result of an integer number of steps, then don't add it to the sum. See the 4th example below.
// Examples

// 2,2,2 --> 2
// 2,6,2 --> 12 (2 + 4 + 6)
//
//{SOLUTION}:
const sequenceSum = (begin, end, step) => {
  if(begin>end){
    return 0
  };
  let sum = 0; 
  for(let i = begin; i<=end; i = i+step){
    sum += i
  }
  return sum
};
//


//Exercise:
// Task
// Given a string str, reverse it and omit all non-alphabetic characters.

// Example
// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".
//
//{SOLUTION}:
function reverseLetter(str) {
  let alphabeticStr = [...str].filter(x => x.toLowerCase() !== x.toUpperCase())
  return alphabeticStr.reverse().join("")
  
}


//
//Exercise:
//  The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
//
//{SOLUTION}
//
function accum(s) {
  let arr = s.split("").map((el,i) => {
     el = el.repeat(i+1);
    return el.charAt(0).toUpperCase() + el.slice(1).toLowerCase()
  })
  return arr.join("-") 
}


//
// Create a function that will trim a string (the first argument given) if it is longer than the requested maximum string length (the second argument given). The result should also end with "..."
// These dots at the end also add to the string length.
// For example, trim("Creating kata is fun", 14) should return "Creating ka..."
// If the string is smaller or equal than the maximum string length, then simply return the string with no trimming or dots required.
// e.g. trim("Code Wars is pretty rad", 50) should return "Code Wars is pretty rad"

// If the requested string length is smaller than or equal to 3 characters, then the length of the dots is not added to the string length.

// e.g. trim("He", 1) should return "H...", because 1 <= 3

// Requested maximum length will be greater than 0. Input string will not be empty.
//
//{SOLUTION}:
function trim(str, size) {
  if (str.length <= size) return str;
  let strArr = str.split("");
//   console.log(str)
 if (size <= 3) {
    strArr = strArr.slice(0, size);
    return `${strArr.join("")}...`;
  } else {
    strArr = strArr.slice(0, size - 3);
    return `${strArr.join("")}...`
  }
}


///
// Create function which will return the area of a circle with the given radius.

// Round the returned number to two decimal places. If the radius is not positive or not a number, return false.

// Example:

// circleArea(-1485.86);    //returns false
// circleArea(0);           //returns false
//
//{SOLUTION}
let circleArea = r =>  typeof r === "string" || r<=0 ? false : Math.round((r**2 * Math.PI) * 100) / 100 ;
  

//
//Create a function that takes an array as an argument and filters out the odd numbers and returns the even numbers
//
//{SOLUTION}
let callback = (i) => i % 2===0;

let getEvenNumbers = (a, callback) => {
  let result = [];
  for(let i = 0; i<a.length; i++){
    if(callback(a[i])){
       result.push(a[i])
    }
   
  } 
  return result
}
//
// or
let getEvenNums = a => a.filter(x => x%2 === 0)
//


// My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!

// In honor of my grandfather's memory we will write a function using his formula!

// Take a list of ages when each of your great-grandparent died.
// Multiply each number by itself.
// Add them all together.
// Take the square root of the result.
// Divide by two.
// Example
// predictAge(65, 60, 75, 55, 60, 63, 64, 45) === 86
// Note: integer should be rounded down

// {SOLUTION}
// Re-factored into 1 line
 let  predictAge = (...ages) => Math.floor(Math.sqrt(ages.map((x) => x*x).reduce((acc, c) => acc += c)) / 2)
 //



 
  //
//   Given a list of integers, determine whether the sum of its elements is odd or even.
// Give your answer as a string matching "odd" or "even".
// If the input array is empty consider it as: [0] (array with a zero).
//
//{SOLUTION}
function oddOrEven(a) {
  let sum = a.reduce((acc,c) => acc +=c,0);
  return sum % 2 === 0 || a.length === 0 ? "even" : "odd"
}

// Problem:

// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// {SOLUTION}
function capitalize(s) {
  return [
    s
      .split("")
      .map((el, i) => {
        return i % 2 === 0 ? el.toUpperCase() : el.toLowerCase();
      })
      .join(""),
    s
      .split("")
      .map((el, i) => {
        return i % 2 !== 0 ? el.toUpperCase() : el.toLowerCase();
      })
      .join(""),
  ];
}
  
//

//
// Challenge:

// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

// Example:

// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

//{SOLUTION}(re-factored)
let flattenAndSort = a =>  a.flat().sort((a,b)=> a-b)
//
//



//Exercise:
// Given a sequence of numbers, find the largest pair sum in the sequence.

// For example

// [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
// [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)

//{SOLUTION}
let  largestPairSum = n => n.sort((a,b) => b-a).reduce((acc, curr, i) => {
  if(i === 0 || i === 1){acc+= curr}
  return acc
})


//
// Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

// Unfortunately for you, your drive is very bumpy! Given a string showing either flat road (_) or bumps (n). If you are able to reach home safely by encountering 15 bumps or less, return Woohoo!, otherwise return Car Dead
//
//{SOLUTION}
function bump(x){
  x = x.split("")
let arrOfBumps = x.filter((el)=> {
 return el === "n"
})
return arrOfBumps.length <= 15 ? "Woohoo!" : "Car Dead"

}

//Better solution:
const bump=x=>x.split('n').length>16?"Car Dead":"Woohoo!"

//
//



//
//
// Write a small function that returns the values of an array that are not odd.
// All values in the array will be integers. Return the good values in the order they are given.
function noOdds( values ){
  return values.filter((x) => x % 2 ===0)
}
//
//


//
// Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.
// Square all numbers k (0 <= k <= n) between 0 and n.
// Count the numbers of digits d used in the writing of all the k**2.
// Implement the function taking n and d as parameters and returning this count.
// Examples:
// n = 10, d = 1 
// the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
// We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.

// The function, when given n = 25 and d = 1 as argument, should return 11 since
// the k*k that contain the digit 1 are:
// 1, 16, 81, 100, 121, 144, 169, 196, 361, 441.
// So there are 11 digits 1 for the squares of numbers between 0 and 25.
// Note that 121 has twice the digit 1.

//{SOLUTION}
//
function nbDig(n, d) {
  let counter = 0;
  for (let i = 0; i <= n; i++) {
    let squared = i * i;
    let squaredStr = squared.toString();
    
    for (let j = 0; j < squaredStr.length; j++) {
      if (squaredStr.charAt(j) === d.toString()) {
        counter++;
      }
    }

  }
  return counter;
}

//




// Exercise:
// We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

// So given a string "super", we should return a list of [2, 4].

// Some examples:
// Mmmm  => []
// Super => [2,4]
// Apple => [1,5]
// YoMama -> [1,2,4,6]

//{SOLUTION}:
function vowelIndices(word){
  let vowels = "aeiouy";
  let listOfVowels = [];
  word.split("").forEach((x, i) => {
    x = x.toLowerCase();
    if (vowels.indexOf(x) > -1){
      listOfVowels.push(i)
    }
    else
    {
      return []
    }
    
  })
  console.log(word)
  return listOfVowels.map(x => x+1)
}

//


// Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

// For example:

// ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
// ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]

//{SOLUTION}
function evenNumbers(array, number) {
  let even = array.filter(n => n % 2 === 0);
  return even.slice(-number)
  
}

// in one line:
let evenNumbers =(a, n) => a.filter(n => n % 2 === 0).slice(-n)



//
// TASK
// Your task is to write a function which returns the sum of following series upto nth term(parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// Rules:
// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return 0.00

// You will only be given Natural Numbers as arguments.

// Examples:(Input --> Output)
// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"
//
//SOLUTION:
function SeriesSum(n)
{
  let result = 0
   let num = 1;
  for(let i = 0; i<n; i++){
   
    console.log(num)
    result +=  (1/num);
    num += 3
    console.log(num)
  }
  return result.toFixed(2)
}
//
//Recursive solution:





//
// given an array of integers as strings and numbers, return the sum of array values as if all were nums

// return your number as a num


let arr = ["3", 6, "10", 15, 2]

//solution

let sumNumStr = arr => {
  return arr.reduce((acc, c) => {
    acc += +c;
    return acc
  },0)
}




//
// Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.
// adjacentElementsProduct([1, 2, 3]); ==> return 6 ( 2* 3 = 6)
//
//{SOLUTION}
function adjacentElementsProduct(array) {
  let holder = []
array.map((el, i) => {
  if(i < array.length-1){
      let product = el * array[i+1];
  holder.push(product)
  }
});
  return Math.max(...holder)
}



//
// TASK:
// Complete the function power_of_two/powerOfTwo (or equivalent, depending on your language) that determines if a given non-negative integer is a power of two. From the corresponding Wikipedia entry:

// a power of two is a number of the form 2n where n is an integer, i.e. the result of exponentiation with number two as the base and integer n as the exponent.

// You may assume the input is always valid.

// Examples
// isPowerOfTwo(1024) // -> true
// isPowerOfTwo(4096) // -> true
// isPowerOfTwo(333)  // -> false
//
//{SOLUTION}
function isPowerOfTwo(n){
  if(n > 1){
    return isPowerOfTwo(n / 2)
  }
  return n === 1 ? true : false
}

//
//
// TASK
// We want to generate a function that computes the series starting from 0 and ending until the given number.

// Example:
// Input:
// > 6
// Output:
// 0+1+2+3+4+5+6 = 21

// Input:

// > -15
// Output:

// -15<0

// Input:

// > 0
// Output:

// 0=0
//
//{SOLUTION}
var SequenceSum = (function() {
  function SequenceSum() {}

  SequenceSum.showSequence = function(count) {
    let stringToOutput = ""
    if(count < 0){
      return `${count}<0`
    } else if(count === 0){
      return "0=0"
    }
    
   const arr = Array.from({ length: count+1 }, (_, index) => index);
   const sum = arr.reduce((acc, c) => acc+= c)
   // create template for output:
   for(let i= 0; i < arr.length -1 ; i++){
     if(i<arr.length){
       stringToOutput += `${arr[i]}+`
     } 
      
   }
     stringToOutput += `${arr[arr.length - 1]}`
   return `${stringToOutput} = ${sum}`  

  };

  return SequenceSum;

})();


// TASK:
// Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.

// All inputs will be valid.

// {SOLUTION}
function digits(n) {
  return n.toString().split("").length
}


// Re-practice problem:
// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.

// Write a function to calculate factorial for a given input. 
//{SOLUTION}
let factorial = n => {
  let arr = []
for(let i = 1; i<=n;i++){
  arr.push(i);
}
if(n==0 || n==1){
return 1
} else if(n<0 || n>12){
throw new RangeError("Cannot factorize")
} else{
    return arr.reduce((acc,c) => {
  acc *= c;
  return acc
})
} 


}








// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.
//
//{SOLUTION}
function findLongest(array){
  let digitNums = array.map((x) => x = x.toString().length)
 const index = digitNums.indexOf(Math.max(...digitNums))
 return array[index]
 }
