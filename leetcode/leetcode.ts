// Problem: Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Solution:
function containsDuplicate(nums: number[]): boolean {
  const mapToCheck = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (mapToCheck.has(nums[i])) {
      return true;
    } else {
      mapToCheck.set(nums[i], 1);
    }
  }
  return false;
}
