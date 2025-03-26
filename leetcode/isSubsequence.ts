// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

//Solution:
function isSubsequence(s: string, t: string): boolean {
  let slow = 0;
  let fast = 0;
  let out: string[] = [];

  while (fast < t.length) {
    if (s.charAt(slow) === t.charAt(fast)) {
      out.push(t.charAt(fast));
      slow++;
      fast++;
    } else if (s.charAt(slow) !== t.charAt(fast)) {
      fast++;
    }
  }
  return out.join("") === s ? true : false;
}
