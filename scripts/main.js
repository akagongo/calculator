const displayPara = document.querySelector("#display-para");
const numberBtns = document.querySelectorAll(".number");
const clearBtn = document.querySelector("#clear")
const operatorBtns = document.querySelectorAll(".function");
const equalBtn = document.querySelector("#equal");
let operandOne;
let operandTwo;
let operator;
let result;

numberBtns.forEach(btn => btn.addEventListener("click", populateDisplay));
clearBtn.addEventListener("click", clearDisplay);
operatorBtns.forEach(btn => btn.addEventListener("click", calculate));
equalBtn.addEventListener("click", showResult);

function populateDisplay(e) {
    if (result == displayPara.textContent) {
        displayPara.textContent = "";
    }
    displayPara.textContent += e.target.innerText;
}

function clearDisplay(e) {
    displayPara.textContent = "";
    operandOne = null;
    operandTwo = null;
    operator = null;
    result = null;
}

function calculate(e) {
    operator = e.target.innerText;

    if (displayPara.textContent) {
        operandOne = parseInt(displayPara.textContent);
    }

    displayPara.textContent = "";

    if (operandOne) {
        operandTwo = parseInt(displayPara.textContent);
    }
    /*
    if (displayPara.textContent && operandOne && operandTwo) {
        operandOne = operate(operator, operandOne, operandTwo);
    }*/
}

function showResult() {

    operandTwo = displayPara.textContent;  
    result = operate(operator, operandOne, operandTwo)  
    if (!result) {
        result = ""
    } else if (result.toString().length > 8) {
        result = result.toExponential(2);
    }
    displayPara.textContent = result;
}

function add(num1, num2) {
    return parseInt(num1) + parseInt(num2);
}

function substract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(operator, num1, num2) {
    if (operator === "+") {
        return add(num1, num2);
    } else if (operator === "-") {
        return substract(num1, num2);
    } else if (operator === "*") {
        return multiply(num1, num2);
    } else {
        return divide(num1, num2);
    }
}