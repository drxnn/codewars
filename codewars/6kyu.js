//Exercise 1:
// Complete the solution so that the function will break up camel casing, using a space between words.
//{SOLUTION}
function solution(string) {
  let breakCamel = string
    .split("")
    .map((char) => {
      if (char === char.toUpperCase()) {
        char = ` ${char}`;
      }
      return char;
    })
    .join("");
  return breakCamel;
}

//
// Exercise:
// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
//
//{SOLUTION}
function likes(names) {
  if (names.length == 0) {
    return `no one likes this`;
  } else if (names.length == 1) {
    return `${names[0]} likes this`;
  } else if (names.length == 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (names.length == 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
}

// EXERCISE:
// Some numbers have funny properties. For example:
// 89 --> 8¹ + 9² = 89 * 1
// 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2
// 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

// Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p

// we want to find a positive integer k, if it exists, such that the sum of the digits of n taken to the successive powers of p is equal to k * n.
// In other words:

// Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k

// If it is the case we will return k, if not return -1.

// Note: n and p will always be given as strictly positive integers.

// digPow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1
// digPow(92, 1) should return -1 since there is no k such as 9¹ + 2² equals 92 * k
// digPow(695, 2) should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
//
//{SOLUTION}:

function digPow(n, p) {
  let arr = n.toString().split("");
  let numArr = arr.map((x) => parseInt(x));
  let sum = numArr.reduce((acc, c) => {
    acc += c ** p;
    p++;
    return acc;
  }, 0);

  for (let k = 1; k * n <= sum; k++) {
    if (k * n === sum) {
      return k;
    }
  }

  return -1;
}

//

//Exercise:
// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

//{MY SOLUTION}:
function isPangram(string) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const uniqueLetters = new Set();
  let stringToCheck = string
    .split("")
    .filter((x) => alphabet.includes(x.toLowerCase()));

  stringToCheck.forEach((el) => {
    el = el.toLowerCase();
    if (alphabet.includes(el) && !uniqueLetters.has(el)) {
      uniqueLetters.add(el);
    }
  });
  return uniqueLetters.size === 26;
}

//
//Better solution found online:
// using every() method to check if every element is in the string
function isPangram(string) {
  return "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .every((x) => string.toLowerCase().includes(x));
}

//
//

// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

// Examples
// Valid arrays
// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]

//{SOLUTION}
function comp(a1, a2) {
  if (!Array.isArray(a1) || !Array.isArray(a2) || a1.length !== a2.length) {
    return false;
  }
  let a1Squared = a1.map((x) => x * x).sort((a, b) => a - b);
  let a2Sorted = a2.sort((a, b) => a - b);
  return a1Squared.every((e, i) => e === a2Sorted[i]);
}
//

//
// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""
// {S O L U T I O N }
function order(words) {
  if (!words) return "";
  words = words.split(" ");
  let result = [];
  for (let i = 1; i <= 9; i++) {
    for (const element of words) {
      if (element.includes(i)) {
        result.push(element);
      }
    }
  }
  return result.join(" ");
}

//
// Tribonnaci Sequence
// As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(

// So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:

// [1, 1 ,1, 3, 5, 9, 17, 31, ...]
// But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:

// [0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
// Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.

// Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array
//
//{SOLUTION}
function tribonacci(signature, n) {
  if (n == 0) return [];
  if (n == 1) return [signature[0]];
  if (n == 2) return [signature[0], signature[1]];
  if (n == 3) return [signature[0], signature[1], signature[2]];
  let result = [...signature];
  for (let i = 0; i < n - 3; i++) {
    let sum = 0;
    sum = result[i] + result[i + 1] + result[i + 2];
    result.push(sum);
  }
  return result;
}

// more elegant solution:

function tribonacci(signature, n) {
  for (let i = 0; i < n - 3; i++) {
    // iterate n times
    signature.push(signature[i] + signature[i + 1] + signature[i + 2]); // add last 3 array items and push to trib
  }
  return signature.slice(0, n); //return trib - length of n
}

//TASK
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

//{SOLUTION}
function sortArray(array) {
  const odds = array
    .filter((x) => {
      return x % 2 !== 0;
    })
    .sort((a, b) => a - b);

  let oddIndex = 0;
  return array
    .map((x, i) => {
      const sortedArr = [];
      if (x % 2 === 0) {
        sortedArr.push(x);
      } else {
        sortedArr.push(odds[oddIndex]);
        oddIndex++;
      }
      return sortedArr;
    })
    .reduce((acc, curVal) => {
      return acc.concat(curVal);
    }, []);
}

//
//Exercise:
//A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward. Examples of numerical palindromes are:

// 2332
// 110011
// 54322345

// For a given number num, return its closest numerical palindrome which can either be smaller or larger than num. If there are 2 possible values, the larger value should be returned. If num is a numerical palindrome itself, return it.

// For this kata, single digit numbers will NOT be considered numerical palindromes.

// Also, you know the drill - be sure to return "Not valid" if the input is not an integer or is less than 0.

// palindrome(8) => 11
// palindrome(281) => 282
// palindrome(1029) => 1001
// palindrome(1221) => 1221
// palindrome("1221") => "Not valid"
//
//{SOLUTION}
function palindrome(num) {
  if (typeof num !== "number" || num < 0) return "Not valid";
  let checkPalindrome = (num) => {
    let numString = num.toString().split("");

    let reverse = [...numString].reverse();

    return numString.join("") == reverse.join("");
  };
  let added = 1;
  let findClosest = (num, added) => {
    if (checkPalindrome(num + added) === true) {
      return num + added;
    } else if (checkPalindrome(num - added) === true) {
      return num - added;
    } else {
      added += 1;
      return findClosest(num, added);
    }
  };
  if (num < 10) num = 10;
  if (checkPalindrome(num)) return num;

  return findClosest(num, (added = 1));
}

//
// Your task, is to create N×N multiplication table, of size provided in parameter.

// For example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// For the given example, the return value should be:

// [[1,2,3],[2,4,6],[3,6,9]]

//{SOLUTION}
//
let multiplicationTable = (size) => {
  let container = [];
  let myArr = [];
  for (let i = 1; i <= size; i++) {
    myArr.push(i);
  }

  for (let i = 1; i <= size; i++) {
    container.push([...myArr]);
  }
  return container.map((innerArray, i) => {
    return innerArray.map((x) => {
      x = x * (i + 1);
      return x;
    });
  });
};

//
// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]

// Example
// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;

// {SOLUTION}

//return the total number of smiling faces in the array
function countSmileys(arr) {
  const validSmileyPattern = /[:;][-~]?[)D]/;

  let count = arr.reduce((acc, c) => {
    if (validSmileyPattern.test(c)) {
      acc++;
    }
    return acc;
  }, 0);
  return count;
}

//
//Exercise:

//   Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

//{Solution}

var uniqueInOrder = function (iterable) {
  if (typeof iterable === "string") {
    iterable = iterable.split("");
  }
  return iterable.filter((x, i) => {
    return x !== iterable[i + 1];
  });
};

//
// TASK :
// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
// { SOLUTION }
function findOdd(A) {
  const returnOdd = (n) => {
    return n % 2 !== 0 ? true : false;
  };
  const counts = {};
  A.map((element) => {
    counts[element] = (counts[element] || 0) + 1;
  });
  for (const [key, element] of Object.entries(counts)) {
    if (returnOdd(element)) return +key;
  }
}
//
