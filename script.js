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

function updateDisplay() {
  displayBottom.innerText = input;
}

numButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (input === "" && e.target.innerText === "0") return;
    input += e.target.innerText;
    updateDisplay();
  });
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    num1 = input;
    input = "";
    operator = e.target.innerText;
  });
});

equalButton.addEventListener("click", () => {
  if (num1 && operator) {
    num2 = input;
    displayBottom.innerText = operate(operator, +num1, +num2);
    num1 = operate(operator, +num1, +num2);
  }
});

clearButton.addEventListener("click", () => {
  input = "";
  num1 = null;
  num2 = null;
  operator = null;
  displayBottom.innerText = 0;
});
