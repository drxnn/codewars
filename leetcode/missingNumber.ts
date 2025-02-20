// Missing Number: Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

//Solution:
function missingNumber(nums: number[]): number {
  const length = nums.length;
  const values = new Map();
  for (let i = 0; i < length; ++i) {
    values.set(nums[i], "t");
  }

  for (let i = 0; i <= length; i++) {
    if (!values.get(i)) {
      return i;
    }
  }
  return -1;
}
