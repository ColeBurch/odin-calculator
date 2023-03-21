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

function operate(num1, num2, operator) {
  if (operator == "+") {
    return add(num1, num2);
  }
  if (operator == "-") {
    return subtract(num1, num2);
  }
  if (operator == "*") {
    return multiply(num1, num2);
  }
  if (operator == "/") {
    return Math.round(divide(num1, num2) * 100) / 100;
  } else {
    return "ERROR";
  }
}

const buttons = document.querySelectorAll("button");
const display = document.querySelector(".display");
let num1 = 0;
let num2 = 0;
let operator = "";

console.log(buttons);
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.id == "clear") {
      num1 = 0;
      num2 = 0;
      operator = "";
      display.textContent = 0;
    } else if (button.id == "delete") {
      display.textContent = display.textContent.substring(
        0,
        display.textContent.length - 1
      );
    } else if (display.textContent == 0) {
      display.textContent = button.id;
    } else if (
      num1 == 0 &&
      (button.id == "+" ||
        button.id == "-" ||
        button.id == "*" ||
        button.id == "/")
    ) {
      num1 = display.textContent;
      operator = button.id;
      display.textContent = 0;
    } else if (
      num1 != 0 &&
      operator == "" &&
      (button.id == "+" ||
        button.id == "-" ||
        button.id == "*" ||
        button.id == "/")
    ) {
      num1 = display.textContent;
      operator = button.id;
      display.textContent = 0;
    } else if (
      num1 != 0 &&
      (button.id == "+" ||
        button.id == "-" ||
        button.id == "*" ||
        button.id == "/")
    ) {
      num2 = display.textContent;
      num1 = operate(+num1, +num2, operator);
      display.textContent = 0;
      operator = button.id;
    } else if (button.id == "=" && num1 != 0 && operator != "") {
      num2 = display.textContent;
      num1 = operate(+num1, +num2, operator);
      display.textContent = num1;
      operator = "";
    } else {
      display.textContent += button.id;
    }
  });
});
