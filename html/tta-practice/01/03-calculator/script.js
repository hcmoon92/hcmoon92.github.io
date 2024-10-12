// Select DOM Elements
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

// Initialize Calculator State
let currentInput = '';
let operator = null;
let previousInput = null;

// Function to Update Display
function updateDisplay() {
    display.textContent = currentInput || previousInput || '0';
}

// Function to Handle Button Clicks
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value') || button.id;

        switch (value) {
            case 'C':
                clear();
                break;
            case '=':
                calculate();
                break;
            case '+':
            case '-':
            case '*':
            case '/':
                setOperator(value);
                break;
            case '.':
                appendDecimal();
                break;
            default:
                appendNumber(value);
        }
        updateDisplay();
    });
});

// Function to Append Number
function appendNumber(number) {
    if (number === '0' && currentInput === '0') return;
    currentInput = currentInput.toString() + number.toString();
}

// Function to Append Decimal
function appendDecimal() {
    if (currentInput.includes('.')) return;
    currentInput = currentInput.toString() + '.';
}

// Function to Set Operator
function setOperator(op) {
    if (operator !== null) {
        calculate();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

// Function to Calculate Result
function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    if (isNaN(prev) || isNaN(current)) return;

    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                alert("Cannot divide by zero");
                clear();
                return;
            }
            result = prev / current;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operator = null;
    previousInput = null;
}

// Function to Clear Calculator
function clear() {
    currentInput = '';
    operator = null;
    previousInput = null;
}

// Initial Display Update
updateDisplay();
