const numButtons = document.querySelectorAll(".num-btn");
const operatorButtons = document.querySelectorAll(".op-btn");
const equalButton = document.querySelector(".eq-btn");
const clearButton = document.querySelector(".clear-btn");
const displayTop = document.querySelector(".display-top");
const displayBottom = document.querySelector(".display-bottom");

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

numButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    displayBottom.innerText == "0" || num1
      ? (displayBottom.innerText = e.target.innerText)
      : (displayBottom.innerText += e.target.innerText);
  });
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    // behave differently if num1 already exists?

    num1 = displayBottom.innerText;
    operator = e.target.innerText;

    console.log(num1);
    console.log(operator);
  });
});

equalButton.addEventListener("click", () => {
  if (num1 && operator) {
    num2 = displayBottom.innerText;
    displayBottom.innerText = operate(operator, +num1, +num2);
  }
});

clearButton.addEventListener("click", () => {
  num1 = null;
  num2 = null;
  operator = null;
  displayBottom.innerText = 0;
});
