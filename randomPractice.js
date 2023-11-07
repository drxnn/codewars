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

// The built-in function setTimeout uses callbacks. Create a promise-based alternative.

// The function delay(ms) should return a promise. That promise should resolve after ms milliseconds, so that we can add .then to it, like this:

// function delay(ms) {
//   // your code
// }

// delay(3000).then(() => alert('runs after 3 seconds'));

//{SOLUTION}
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

delay(3000).then(() => alert("runs after 3 seconds"));

//
//

function wait(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
}

wait(2000).then(() => {
  console.log("2 seconds passed");
});

// async version of function above:

async function main() {
  await wait(2000);

  console.log("2 seconds have passed");
}

//
//
// destructuring practice

let numbers = [1, 2, 3, 4, 5, 6];

// the spread operator basically assigns the remaining elements to the rest variable
const [first, second, ...rest] = numbers;
console.log(first, second, rest);

const personOne = {
  name: "drin",
  age: 23,
  address: {
    city: "New York City",
    state: "New York",
  },
};

const personTwo = {
  name: "sarah",
  age: 21,
  address: {
    city: "New York City",
    state: "New York",
  },
};

const {
  name: firstName, // this is assigning the value of name to the variable firstName
  address: { city },
} = personOne;

console.log(firstName, city);

function printUser(object) {
  console.log(`Name is ${object.name}. Age is ${object.age}`);
}
// this can be re-written as this:

// since we know that we are going to pass an object as an argument we can simply destructure it like this:

function printUser({ name, age }) {
  console.log(`Name is ${name}. Age is ${age}`);
}

printUser(personOne);
