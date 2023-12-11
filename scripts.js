// creates element in the memory
let expression = document.querySelector(".expression");
let value = document.querySelector(".value");
let number1 = 0;
let number2 = 0;
let operator = '';

let add = (num1, num2) => {
    if (typeof num1 === 'string') {
        num1 = Number(num1);
    }
    if (typeof num2 === 'string') {
        num2 = Number(num2);
    }
    return num1 + num2;
};



let calculate = (num1, operator, num2) => {
    if (operator === 'add') return `${num1} + ${num2} = ${add(num1, num2)}`;
    if (operator === 'subtract') return `${num1} - ${num2} = ${subtract(num1, num2)}`;
    if (operator === 'multiply') return `${num1} * ${num2} = ${multiply(num1, num2)}`;
    if (operator === 'divide') return `${num1} / ${num2} = ${divide(num1, num2)}`;
    if (operator === 'modulus') return `${num1} % ${num2} = ${mod(num1, num2)}`;
};

let subtract = (num1, num2) => {
    if (typeof num1 === 'string') {
        num1 = Number(num1);
    }
    if (typeof num2 === 'string') {
        num2 = Number(num2);
    }
    return num1 - num2;
};

let multiply = (num1, num2) => {
    if (typeof num1 === 'string') {
        num1 = Number(num1);
    }
    if (typeof num2 === 'string') {
        num2 = Number(num2);
    }
    return num1 * num2;
};

let divide = (num1, num2) => {
    if (typeof num1 === 'string') {
        num1 = Number(num1);
    }
    if (typeof num2 === 'string') {
        num2 = Number(num2);
    }
    return num1 / num2;
};

let mod = (num1, num2) => {
    if (typeof num1 === 'string') {
        num1 = Number(num1);
    }
    if (typeof num2 === 'string') {
        num2 = Number(num2);
    }
    return num1 % num2;
};


expression.textContent = `${calculate(10, 'add', 50)}`;
value.textContent = `${add(10, 50)}`;




