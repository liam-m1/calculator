let num1 = "";
let num2 = "";
let num2Check = 0;
let deleteCheck = 0;
let operatorNode;

function add(num1, num2) {
    num = document.createElement("p");
    num.textContent = num1 + num2;
    return num;
}
function subtract(num1, num2) {
    num = document.createElement("p");
    num.textContent = num1 - num2
    return num;
}
function multiply(num1, num2) {
    num = document.createElement("p");
    num.textContent = num1 * num2
    return num;
}
function divide(num1, num2) {
    
    num = document.createElement("p");
    if (num1 == 0 && num2 == 0) {
        num.textContent = (">:p");
        return num;
    }
    num.textContent = num1 / num2
    return num;
}
function operate(operator, num1, num2) {
    num1 = parseFloat(num1, 10);
    num2 = parseFloat(num2, 10);

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
document.addEventListener("DOMContentLoaded", (e) => {
console.log("js started")

let display = document.querySelector(".display");
let buttons = document.querySelectorAll("button");

let zero = document.createElement("p");
zero.textContent = "0";
display.appendChild(zero);

buttons.forEach((button) => {   
    button.addEventListener("click", (e) => {
        buttons.forEach((button) => {
            button.style.backgroundColor = "rgb(221, 219, 219)";
        });
        zero.remove();
        //raw input
        let input = e.target.innerText;
        //creating element for display
        let displayDigit = document.createElement("p");
        displayDigit.textContent = e.target.innerText;
        //checking if digit was clear
        if (displayDigit.textContent == "c") {
            num1 = 0;
            num2 = 0;
            num2Check = 0;
            deleteCheck = 0;
            let deleteDigitArr = display.querySelectorAll("p");
                    deleteDigitArr.forEach((digit) => {
                    display.removeChild(digit);
            });
            zero = document.createElement("p");
            zero.textContent = "0";
            display.appendChild(zero);
            return;
        }
        
        //check if digit was equals
        if (displayDigit.textContent == "=") {
            num2Check = 1;
            deleteCheck = 0;
            let deleteDigitArr = display.querySelectorAll("p");
                    deleteDigitArr.forEach((digit) => {
                    display.removeChild(digit);
            });
            display.appendChild(operate(operatorNode.textContent, num1, num2));
            return;
        }

        //check if digit was operator
        if (displayDigit.textContent == "+" || input == "-" || input == "x" || input == "÷") {
            //chaning background color of the clicked operator
            let attachedElement = e.target;
            attachedElement.style.backgroundColor = "grey";
            //chaning to number 2
            num2Check++;
            //if second, make opeartor but dont append
            if (num2Check == 1) {
                operatorNode = document.createElement("p");
                operatorNode.textContent = e.target.innerText;
            }
            //if third, operator delete and opearte
            if (num2Check > 1) {
                console.log("num1 = ", num1, "num2 = ", num2, operatorNode);
                //deleting display before outputting result
                let deleteDigitArr = display.querySelectorAll("p");
                    deleteDigitArr.forEach((digit) => {
                    display.removeChild(digit);
                });
                //computing result and outputting
                display.appendChild(operate(operatorNode.textContent, num1, num2));
                num1 = num.textContent;
                console.log(num2Check);
                //taking in new operator
                operatorNode = document.createElement("p");
                operatorNode.textContent = e.target.innerText;
                //reseting back to first time operator is used
                num2 = 0;
                num2Check = 1;
                deleteCheck = 0;
            }
            return;
        }
        //outputing to display
        display.appendChild(displayDigit)
        
        //adding to first number
        if (num2Check == 0) {
        num1 += displayDigit.textContent;
        console.log("num1 = ", num1);
        }
        //second number
        else {
        //deleting display first
        if (deleteCheck == 0) {
        //filtering for operator
        let deleteDigitArr = display.querySelectorAll("p");
            deleteDigitArr.forEach((digit) => {
                display.removeChild(digit);
        });
        deleteCheck = 1;
        //remaking digit
        let displayDigit = document.createElement("p");
        displayDigit.textContent = e.target.innerText;
        display.appendChild(displayDigit);
        }
        //adding to second number
        num2 += displayDigit.textContent;
        console.log("num2 = ", num2)
        }
    });
});

});
