// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

//Solution:
var twoSum = function (nums: number[], target: number): number[] | null {
  let thisIsMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (thisIsMap.has(target - nums[i])) {
      return [thisIsMap.get(target - nums[i]), i];
    }
    thisIsMap.set(nums[i], i);
  }

  return null;
};
