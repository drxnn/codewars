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
