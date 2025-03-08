// Calculator App

// This Functions adds two numbers
let addition = (a, b) => {
  console.log(a, b);
  return a + b;
};

// This functions subtracts two numbers
let subtraction = (a, b) => {
  return a - b;
};

// This functions multiplies two numbers
let multiplication = (a, b) => {
  return a * b;
};

// This number divides two numbers
let division = (a, b) => {
  return a / b;
};

// This function negates a value
let negation = (value) => {
  console.log("Negating value:", value);
  return -value;
};

// This function divides value by 100
let percentage = (value) => {
  return parseInt(value) / 100;
};

// All these functions below allow us to select numbers and display them on the screen section
//

let selectOne = () => {
  let one = document.getElementById("numOne").textContent;
  let screen = document.getElementById("screen");
  screen.innerText += one;
};
let selectTwo = () => {
  let two = document.getElementById("numTwo").textContent;
  let screen = document.getElementById("screen");
  screen.innerText += two;
};
let selectThree = () => {
  let three = document.getElementById("numThree").textContent;
  let screen = document.getElementById("screen");
  screen.innerText += three;
};

let selectFour = () => {
  let four = document.getElementById("numFour").textContent;
  let screen = document.getElementById("screen");
  screen.innerText += four;
};

let selectFive = () => {
  let five = document.getElementById("numFive").textContent;
  let screen = document.getElementById("screen");
  screen.innerText += five;
};

let selectSix = () => {
  let six = document.getElementById("numSix").textContent;
  let screen = document.getElementById("screen");
  screen.innerText += six;
};

let selectSeven = () => {
  let seven = document.getElementById("numSeven").textContent;
  let screen = document.getElementById("screen");
  screen.innerText += seven;
};

let selectEight = () => {
  let eight = document.getElementById("numEight").textContent;
  let screen = document.getElementById("screen");
  console.log(screen);
  screen.innerText += eight;
};

let selectNine = () => {
  let nine = document.getElementById("numNine").textContent;
  let screen = document.getElementById("screen");
  screen.innerText += nine;
};

let selectZero = () => {
  let zero = document.getElementById("numZero").textContent;
  let screen = document.getElementById("screen");
  screen.innerText += zero;
};

// This Function below adds a decimal to our value and displays it on the screen
//
let addDecimal = () => {
  let decimal = document.getElementById("dec").textContent;
  let screen = document.getElementById("screen");
  if (!screen.innerText.includes(decimal)) {
    screen.innerText += decimal;
  }
};

// This function below clears our screen and removes values from our variables
//
let allClear = () => {
  let screen = document.getElementById("screen");
  screen.innerText = "";
  firstValue = null;
  secondValue = null;
  result = null;
};

// Global variables set to null so that we can manipulate them later down the line
//
let firstValue = null;
let secondValue = null;
let operations = null;
let result = null;
let equals = document.getElementById("equals");
const operatorClicked = document.querySelectorAll(".op");

operatorClicked.forEach((operator) => {
  operator.addEventListener("click", object.bind(handleClick));
});

let calculatorObject = {
  calculate() {
    switch (innerContent) {
      case "+":
        result = addition(+firstValue, +secondValue);
        break;
      case "-":
        result = subtraction(+firstValue, +secondValue);
        break;
      case "÷":
        result = division(+firstValue, +secondValue);
        break;
      case "×":
        result = multiplication(+firstValue, +secondValue);
        break;
    }
    screen.innerText = result;
  },

  handleClick(event) {
    let innerContent = event.target.innerText;
    if (firstValue === null) {
      let screen = document.getElementById("screen");
      firstValue = screen.innerText;
      console.log(`first value is ${firstValue}`);
      screen.innerText = "";
    } else if (secondValue === null || firstValue < 0) {
      let screen = document.getElementById("screen");
      secondValue = screen.innerText;
      console.log(`second value is ${secondValue}`);
    }
    firstValue = null;
    secondValue = null;
    calculate();
  },
  equals() {
    console.log("equals was clicked");
    secondValue = screen.innerText;
    this.calculate();
  },
};

let negateNumber = () => {
  console.log("Negate button clicked");
  let screen = document.getElementById("screen");
  console.log("Screen content:", screen.innerText);
  if (isNaN(screen.innerText)) {
    console.log("Screen content is not a number");
    return;
  } else if (firstValue === null) {
    console.log("Negating firstValue");
    firstValue = negation(screen.innerText);
    screen.innerText = firstValue;
    firstValue = null;
  } else {
    console.log("Negating secondValue");
    secondValue = negation(screen.innerText);
    screen.innerText = secondValue;
  }
};

let percentageNum = () => {
  let screen = document.getElementById("screen");
  console.log(`percentage button clicked: ${screen.innerText}`);
  if (isNaN(screen.innerText)) {
    return;
  } else {
    firstValue = percentage(screen.innerText);
    screen.innerText = firstValue;
    firstValue = null;
  }
};
