// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Solution:

function moveZeroes(nums: number[]): void {
  let left = 0,
    fastLeft = left + 1,
    i = nums.length - 1;

  while (left <= i && !(fastLeft > i)) {
    let temp = nums[left];

    if (nums[left] === 0) {
      nums[left] = nums[fastLeft];
      nums[fastLeft] = temp;
      if (nums[left] === 0 && nums[fastLeft] === 0) {
        fastLeft++;
      } else {
        left++;
        fastLeft++;
      }
    } else if (nums[left] !== 0) {
      left++;
      fastLeft++;
    }
  }
}
