// creates element in the memory
let expression = document.querySelector(".expression");
let value = document.querySelector(".value");
const allButtons = document.querySelectorAll('button')
let num1 = [];
let num2 = [];
let operator = '';
let statement = "";
let result = "";
const operators = {
    '+':'add',
    '-':'subtract',
    'x':'multiply',
    '/':'divide',
    '%':'modulus',
    'Enter':'equals'
}


// An event for all the buttons if needed 
let addDigit = (array, digit) => array.push(digit);

let removeDigit = (array) => array.pop();

// calculate the total number given an array of digits

let calculate = (numArr) => {
    return (Number(numArr.join('')));

};

const decimalBut = document.querySelector("#decimal");
decimalBut.addEventListener('click', (e) => {
    decimalBut.setAttribute('disabled', 'true');
    if (operator.length <= 0) {
        addDigit(num1, e.target.value);
    } else {
        addDigit(num2, e.target.value);
    }
    result += e.target.value;
    value.textContent = result;
})

const digBut = document.querySelectorAll(".digit");
digBut.forEach((but) => {
    but.addEventListener('click', (e) => {
        if (operator.length <= 0) {
            addDigit(num1, Number(e.target.value));
        } else {
            addDigit(num2, Number(e.target.value));
        }
        result += e.target.value;
        value.textContent = result;
    });
});

// arithmetic operations
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
    if (operator === 'add') return `${add(num1, num2)}`;
    if (operator === 'subtract') return `${subtract(num1, num2)}`;
    if (operator === 'multiply') return `${multiply(num1, num2)}`;
    if (operator === 'divide') return `${divide(num1, num2)}`;
    if (operator === 'modulus') return `${modulus(num1, num2)}`;
};


const equalsButton = document.querySelector('#equals');
equalsButton.addEventListener('click', (e) => {
    digBut.forEach((but) => but.setAttribute('disabled', "true"));
    // change the statement value to show all arithemetic
    statement += result + (" " + e.target.value + " ");
    expression.textContent = statement;

    // calculate the result 
    result = operate(calculate(num1), operator, calculate(num2));
    console.log(result);
    operator = '';
    value.textContent = result;
    num1 = numtoArr(result);
    num2 = [];

});

// event listener for the operations of the numbers
const opButtons = document.querySelectorAll('.operator');
opButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        decimalBut.removeAttribute('disabled', 'true');
        digBut.forEach((but) => but.removeAttribute('disabled', 'false'));
        // if it's a continuous operator then we
        if (operator.length > 0) {
            // get the result of the two numbers and set it to num1
            result = operate(calculate(num1), operator, calculate(num2));
            num1 = numtoArr(result);
            // empty num2
            num2 = [];
        }
        operator = e.target.id;
        statement = result + (" " + e.target.value + " ");
        console.log(statement);
        result = removeAll(result);

        expression.textContent = statement;
    });
});

// number to array converter
let numtoArr = (num) => {
    // 
    let numArr = String(num).split('').map((num) => {
        if (isNaN(num)) {
            return '.';
        } else {
            return Number(num)
        }
    });
    if (num < 0) {
        numArr.shift();
        numArr[0] *= -1;
    }
    return numArr;
};


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
            digBut.forEach((but) => but.removeAttribute('disabled'));
            operator = '';
            statement = removeAll(statement);
            expression.textContent = statement;
            result = removeAll(result);
            value.textContent = result;
            num1 = [];
            num2 = [];
        }
        if (e.target.id === 'removeOne') {
            if (operator.length <= 0) {
                removeDigit(num1);
            } else {
                removeDigit(num2);
            }
            result = removeOne(result);
            
            value.textContent = result;
        }

    });
});

// reuse the click() functions of the buttons for the keyboard functions 
window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
      return; // Do nothing if the event was already processed
    }
    switch(event.key) {
        case '0':
            const digit0 = document.querySelector('#digit-0');
            digit0.click();
            break;
        case '1':
            const digit1 = document.querySelector('#digit-1');
            digit1.click();
            break;
        case '2':
            const digit2 = document.querySelector('#digit-2');
            digit2.click();
            break;
        case '3':
            const digit3 = document.querySelector('#digit-3');
            digit3.click();
            break;
        case '4':
            const digit4 = document.querySelector('#digit-4');
            digit4.click();
            break;
        case '5':
            const digit5 = document.querySelector('#digit-5');
            digit5.click();
            break;
        case '6':
            const digit6 = document.querySelector('#digit-6');
            digit6.click();
            break;
        case '7':
            const digit7 = document.querySelector('#digit-7');
            digit7.click();
            break;
        case '8':
            const digit8 = document.querySelector('#digit-8');
            digit8.click();
            break;
        case '9':
            const digit9 = document.querySelector('#digit-9');
            digit9.click();
            break;
        case '+':
            const add = document.querySelector('#add');
            add.click();
            break;
        case '-':
            const sub = document.querySelector('#subtract');
            sub.click();
            break;
        case '/':
            const divide = document.querySelector('#divide');
            divide.click();
            break;
        case 'x':
            const multiply = document.querySelector('#multiply');
            multiply.click();
            break;
        case '%':
            const mod = document.querySelector('#modulus');
            mod.click();
            break;
        case 'Backspace':
            const backspace = document.querySelector('removeOne');
            backspace.click();
            break;
        case 'Enter':
            const enter = document.querySelector('#equals');
            enter.click();
            break;
        case '.':
            const decimal = document.querySelector('#decimal');
            decimal.click();
            break;
        default:
            return;
    }
    
    event.preventDefault();
  }, true);
 


