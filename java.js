let num1;
let num2;
let operator;

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
function operate(operator, num1, num2) {
    if (operator == "+") {
        return add(num1, num2);
    }
    else if (operator == "-") {
        return subtract(num1, num2);
    }
    else if (operator == "x") {
        return multiply(num1, num2);
    }
    else {
        return divide(num1, num2)
    }
}

document.addEventListener("DOMContentLoaded", function(e) {
let buttons = document.querySelectorAll("button");
let display = document.querySelector(".display");

    buttons.forEach(button => {
        button.addEventListener("click", (e) => {
            let num = document.createElement("p");
            num.textContent = e.target.innerText;

            if (num.textContent == "+" || num.textContent == "-" ||
                num.textContent == "x" || num.textContent == "÷" ) {
                operate(num.textContent)
            }

            display.appendChild(num);
        });
    });
});