// creates element in the memory
let expression = document.querySelector(".expression");
let value = document.querySelector(".value");
const allButtons = document.querySelectorAll('button')
let num1 = [];
let num2 = [];
let operator = '';
let statement = "";
let result = "";


// An event for all the buttons if needed 
let addDigit = (array, digit) => array.push(digit);

let removeDigit = (array) => array.pop();

// calculate the total number given an array of digits

let calculate = (numArr) => {
    return Number(numArr.join(''));
};
// let calculate = (numArr) => {
//     let total = 0;
//     let multipler = numArr.length - 1;
//     // decimal numbers
//     if (numArr.includes(NaN)) {
//         const split = numArr.findIndex((digit) => digit === NaN);
//         const wholeNum = numArr.slice(0, split);
//         const decimal = numArr.slice(split + 1);
//         multipler = wholeNum.length - 1;
//         for (let i = 0; i < wholeNum.length; i++) {
//             total += wholeNum[i] * (10 ** multipler);
//             multipler--;
//         }
//         let decMultipler = 1;
//         for (let j = 0; j < decimal.length; j++) {
//             total += decimal[j] * (10 ** (-multipler));
//             decMultipler++;
//         }
//     } else {
//         for (let i = 0; i < numArr.length; i++) {
//             total += numArr[i] * (10 ** multipler)
//             multipler--;
//         }
//     }

//     return total;
// };
const decimalBut = document.querySelector("#decimal");
decimalBut.addEventListener('click', (e) => {
    if (operator.length <= 0) {
        addDigit(num1, e.target.value);
    } else {
        addDigit(num2, e.target.value);
    }
    console.log("arr1", num1);
    console.log("arr2", num2);

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

        console.log("arr1", num1);
        console.log("arr2", num2);

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
    if (operator === 'add') return `${add(num1, num2)}`;
    if (operator === 'subtract') return `${subtract(num1, num2)}`;
    if (operator === 'multiply') return `${multiply(num1, num2)}`;
    if (operator === 'divide') return `${divide(num1, num2)}`;
    if (operator === 'modulus') return `${modulus(num1, num2)}`;
};

// event listener specifically for the equals button
// this why I can use/see the previous operator
const equalsButton = document.querySelector('#equals');
equalsButton.addEventListener('click', (e) => {
    digBut.forEach((but) => but.setAttribute('disabled', "true"));
    // change the statement value to show all arithemetic
    statement += result + (" " + e.target.value + " ");

    console.log(statement);
    // show expression on the screen
    expression.textContent = statement;

    console.log(operator);
    // calculate the result 
    result = operate(calculate(num1), operator, calculate(num2));
    console.log(result);
    // empty the operator
    operator = '';
    // show result
    value.textContent = result;

    num1 = numtoArr(result);
    num2 = [];

});

// event listener for the operations of the numbers
const opButtons = document.querySelectorAll('.operator');
opButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
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
            
            console.log("arr1", num1);
            console.log("arr2", num2);

        }
        if (e.target.id === 'removeOne') {
            if (operator.length <= 0) {
                removeDigit(num1);
            } else {
                removeDigit(num2);
            }
            result = removeOne(result);
            
            value.textContent = result;

            console.log("arr1" + num1);
            console.log("arr2" + num2);
        }

    });
});




