// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

//Solution:

function climbStairs(n: number): number {
  if (n === 1) {
    return 1;
  }
  const array = new Array(n + 1).fill(0);
  // theres 1 way to get on the first step(+1) and theres one way to get on the second step(+2)
  if (n >= 0) {
    array[0] = 1;
  }
  if (n >= 1) {
    array[1] = 1;
  }
  for (let i = 2; i <= n; i++) {
    array[i] = array[i - 1] + array[i - 2];
    console.log(array);
  }
  return array[n];
}
