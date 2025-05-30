let currentInput = '';
let resultDisplayed = false;

function appendToDisplay(value) {
    if (resultDisplayed && !isOperator(value)) {
        clearDisplay();
        resultDisplayed = false;
    }
    
    if (currentInput === '0' && value !== '.') {
        currentInput = value;
    } else {
        currentInput += value;
    }
    
    document.getElementById('result').value = currentInput;
}

function isOperator(value) {
    return ['+', '-', '*', '/'].includes(value);
}

function clearDisplay() {
    currentInput = '';
    document.getElementById('result').value = '0';
}

function backspace() {
    currentInput = currentInput.slice(0, -1);
    document.getElementById('result').value = currentInput || '0';
}

function calculate() {
    try {
        // Replace × with * and ÷ with / for evaluation
        const expression = currentInput.replace(/×/g, '*').replace(/÷/g, '/');
        const result = eval(expression);
        document.getElementById('result').value = result;
        currentInput = result.toString();
        resultDisplayed = true;
    } catch (error) {
        document.getElementById('result').value = 'Error';
        currentInput = '';
    }
}