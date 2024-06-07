const numButtons = document.querySelectorAll(".num-btn");
const operatorButtons = document.querySelectorAll(".op-btn");
const equalButton = document.querySelector(".eq-btn");
const clearButton = document.querySelector(".clear-btn");
const displayTop = document.querySelector(".display-top");
const displayBottom = document.querySelector(".display-bottom");

let input = "";
let num1 = null;
let num2 = null;
let operator = null;

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  if (num2 == 0) {
    return "ERR: DIV BY ZERO"
  }
  return num1 / num2;
}

function operate(operator, num1, num2) {
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "−":
      return subtract(num1, num2);
    case "×":
      return multiply(num1, num2);
    case "÷":
      return divide(num1, num2);
  }
}

function updateDisplay(numToDisplay) {
  let numStr = numToDisplay.toString();
  let decimalIndex = numStr.indexOf(".");
  if (numStr.length >= 20 && decimalIndex >= 0) {
    numStr = truncateNum(numStr, decimalIndex);
  }
  displayBottom.innerText = numStr;
}

function truncateNum(numStr, decimalIndex) {
  // Calculate how many characters to keep after the decimal point
  let integerPart = numStr.slice(0, decimalIndex + 1); // Including the decimal point
  let fractionalPart = numStr.slice(decimalIndex + 1);

  // Truncate the fractional part to fit within the 20 character limit
  let maxFractionalLength = 20 - integerPart.length;

  // If the integer part and decimal point take up too much space, truncate accordingly
  if (maxFractionalLength <= 0) {
    return integerPart.slice(0, 20);
  }

  // Truncate the fractional part and concatenate it with the integer part
  let truncatedFractionalPart = fractionalPart.slice(0, maxFractionalLength);

  return integerPart + truncatedFractionalPart;
}

numButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (input === "0" && e.target.innerText === "0") return;
    input += e.target.innerText;
    updateDisplay(input);
  });
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (num1 == null) {
      input === "" ? (num1 = "0") : (num1 = input);
      input = "";
      operator = e.target.innerText;
    } else {
      if (input === "") {
        operator = e.target.innerText;
        return;
      } else {
        num2 = input;
        num1 = operate(operator, +num1, +num2);
        updateDisplay(num1);
        input = "";
        operator = e.target.innerText;
      }
    }
  });
});

equalButton.addEventListener("click", () => {
  if (num1 && operator) {
    input === "" ? (num2 = num1) : (num2 = input);
    num1 = operate(operator, +num1, +num2);
    updateDisplay(num1);
    num2 = null;
    operator = null;
    input = "";
  }
});

clearButton.addEventListener("click", () => {
  input = "";
  num1 = null;
  num2 = null;
  operator = null;
  displayBottom.innerText = 0;
});

// To Do:
// 1. Round decimals to not overflow screen X

// 2. Divide by zero error message
// 3. Decimal button
// 4. Delete button
// 5. Keyboard support
// 6. Upper Display
