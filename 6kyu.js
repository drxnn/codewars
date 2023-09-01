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
function isPangram(string) {
  return "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .every((x) => string.toLowerCase().includes(x));
}
