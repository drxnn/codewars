// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

//Solution:
function majorityElement(nums: number[]): number | void {
  let tracker = new Map();
  for (let i = 0; i <= nums.length; ++i) {
    if (tracker.get(nums[i])) {
      tracker.set(nums[i], tracker.get(nums[i]) + 1);
    } else {
      tracker.set(nums[i], 1);
    }
    if (tracker.get(nums[i]) > Math.floor(nums.length / 2)) {
      return nums[i];
    }
  }
}
