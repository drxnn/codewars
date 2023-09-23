// Promises practice:
// The function job must return a promise object
// The promise must resolve itself 2 seconds after the call to job and must provide hello world in the data
// SOLUTION:
function job() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("hello world");
    }, 2000);
  }).then((response) => {
    return response;
  });
}
