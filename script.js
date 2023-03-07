function add(num1, num2) {
    return num1 + num2
}

function subtract(num1, num2) {
    return num1 - num2
}

function multiply(num1, num2) {
    return num1 * num2
}

function divide(num1, num2) {
    return num1 / num2
}

function operate(num1, num2, operator) {
    if (operator == "+") {
        return add(num1, num2)
    } if (operator == "-") {
        return subtract(num1, num2)
    } if (operator == "*") {
        return multiply(num1, num2)
    } if (operator == "/") {
        return divide(num1, num2)
    } else {
        return "ERROR"
    }
}

console.log(operate(2, 2, "+"))
console.log(operate(4, 2, "-"))
console.log(operate(2, 3, "*"))
console.log(operate(10, 2, "/"))
console.log(operate(2, 2, 1))