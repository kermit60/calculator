// creates element in the memory
let expression = document.querySelector(".expression");
let value = document.querySelector(".value");
const allButtons = document.querySelectorAll('button')
let num1 = [];
let num2 = [];
let equalsDown = false;
let operatorDown = false;
let operator = '';
let statement = "";
let result = "";


// An event for all the buttons if needed 
let addDigit = (array, digit) => array.push(digit);

let removeDigit = (array) => array.pop();

// calculate the total number given an array of digits
let calculate = (numArr) => {
    let total = 0;
    let multipler = numArr.length - 1;
    for (let i = 0; i < numArr.length; i++) {
        total += numArr[i] * (10 ** multipler)
        multipler--;
    }
    return total;
};

const digBut = document.querySelectorAll(".digit");
digBut.forEach((but) => {
    but.addEventListener('click', (e) => {
        if (operatorDown) {
            addDigit(num2, Number(e.target.value));
        } else {
            addDigit(num1, Number(e.target.value));
        }

        if (num2.length <= 0) {
            operatorDown = true;
        }

        console.log(num1);
        console.log(num2);

        result += e.target.value;
        value.textContent = result;
    });
});


let add = (num1, num2) => {
    if (typeof num1 === 'string') {
        num1 = Number(num1);
    }
    if (typeof num2 === 'string') {
        num2 = Number(num2);
    }
    return num1 + num2;
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

let modulus = (num1, num2) => {
    if (typeof num1 === 'string') {
        num1 = Number(num1);
    }
    if (typeof num2 === 'string') {
        num2 = Number(num2);
    }
    return num1 % num2;
};

let operate = (num1, operator, num2) => {
    if (operator === '+') return `${add(num1, num2)}`;
    if (operator === '-') return `${subtract(num1, num2)}`;
    if (operator === '×') return `${multiply(num1, num2)}`;
    if (operator === '÷') return `${divide(num1, num2)}`;
    if (operator === '%') return `${mod(num1, num2)}`;
};

// event listener specifically for the equals button
// this why I can use/see the previous operator
const equalsButton = document.querySelector('#equals');
equalsButton.addEventListener('click', (e) => {
    operatorDown = false;
    statement += result + (" " + e.target.value + " ");
    console.log(statement);
    expression.textContent = statement;
    console.log(statement.split(' ')[1]);
    result = operate(calculate(num1), statement.split(' ')[1], calculate(num2));
    console.log(result);
    value.textContent = result;
});

// event listener for the operations of the numbers
const opButtons = document.querySelectorAll('.operator');
opButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        operator = e.target.id;
        console.log(operatorDown)
        
        operatorDown = true;
        statement = result + (" " + e.target.value + " ");
        console.log(statement);
        result = removeAll(result);
        expression.textContent = statement;
    });
});


let removeAll = (expression) => {
    expression = "";
    return expression;
};

let removeOne = (expression) => {
    const length = expression.length;
    if (length < 1) {
        return expression;
    }
    return expression.substring(0, length - 1);
}

// look to see if equals is pressed or if an operator is pressed
// disable the operator and equals button
const removeBut = document.querySelectorAll('.remove');
removeBut.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.id === 'removeAll') {
            statement = removeAll(statement);
            expression.textContent = statement;
            result = removeAll(result);
            value.textContent = removeAll(result);
            num1 = [];
            num2 = [];
            
            console.table(num1);
            console.table(num2);

        }
        if (e.target.id === 'removeOne') {

            result = removeOne(result);
            value.textContent = result;

            console.table(num1);
            console.table(num2);
        }

    });
});




