//Exercise

// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

// {SOLUTION}
//
function generateHashtag(str) {
  let arr = str.split(" ").map((el) => el.trim());

  arr = arr.filter(function (entry) {
    return entry.trim() != "";
  });

  let finalStr = arr.map((el) => {
    return el.charAt(0).toUpperCase() + el.slice(1).toLowerCase();
  });
  let hashtag = "#" + finalStr.join("");

  if (str.trim() == "" || hashtag.length > 140) {
    return false;
  } else {
    return hashtag;
  }
}

//
// In this example you have to validate if a user input string is alphanumeric. The given string is not nil/null/NULL/None, so you don't have to check that.

// The string has the following conditions to be alphanumeric:

// At least one character ("" is not valid)
// Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
// No whitespaces / underscore

//
//{SOLUTION}
//
let alphanumeric = (s) => /^[a-z\d]+$/i.test(s);

// or
function alphanumeric(string) {
  if (!string.length) return false;
  const allowedChar =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  for (let el of string) {
    if (!allowedChar.includes(el)) return false;
  }
  return true;
}

//
//Exercise:
// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

// {SOLUTION}
function rot13(message) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  message = message.split("");
  let modifiedArr = message.map((el) => {
    //make lower case element version & check if alphabet includes element
    let lowerEl = el.toLowerCase();
    if (alphabet.includes(lowerEl)) {
      let index = alphabet.indexOf(lowerEl);
      // using modulo operator in case we need to wrap around alphabet
      let shiftedIndex = (index + 13) % alphabet.length;
      let shiftedChar = alphabet[shiftedIndex];
      // if element was intially upperCase, make shifted-char upperCase
      if (el === el.toUpperCase()) {
        shiftedChar = shiftedChar.toUpperCase();
      }
      return shiftedChar;
    }
    return el;
  });
  return modifiedArr.join("");
}
//
