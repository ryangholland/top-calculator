const numButtons = document.querySelectorAll(".num-btn");
const operatorButtons = document.querySelectorAll(".op-btn");
const displayTop = document.querySelector(".display-top");
const displayBottom = document.querySelector(".display-bottom");

function add(num1, num2) {
  return num1 + num2;
}
``;
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
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
  }
}

numButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    displayBottom.innerText == "0"
      ? (displayBottom.innerText = e.target.innerText)
      : (displayBottom.innerText += e.target.innerText);
  });
});

let num1 = null;
let num2 = null;
let operator = null;
