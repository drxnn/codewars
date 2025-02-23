// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Solution:

function singleNumber(nums: number[]): number {
  if (nums.length === 1) {
    return nums[0];
  }
  const map = new Map();

  for (let i = 0; i < nums.length; ++i) {
    if (map.has(nums[i])) {
      map.set(nums[i], 1);
    } else {
      map.set(nums[i], 0);
    }
  }
  console.log(map);

  for (const [key, value] of map) {
    console.log(key, value);

    if (value === 0) {
      return key;
    }
  }

  return -1; // if not found to satisfy ts:)
}

//    A better solution using XOR, a number XOR-ed with itself = 0; and 0 XOR-red with another number is the number itself

// function singleNumber(nums: number[]): number {
//     let result = 0;
// [1,4,1,4,2,1]
//     for (const num of nums) {
//         result ^= num;
//     }
//     return result;
