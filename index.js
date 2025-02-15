document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('button');

    let currentInput = '0';
    let previousInput = '0';
    let operator = null;

    function updateDisplay() {
        display.textContent = currentInput;
    }

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent;

            switch (value) {
                case 'AC':
                    currentInput = '0';
                    previousInput = '0';
                    operator = null;
                    break;
                case '=':
                    calculate();
                    operator = null;
                    previousInput = '0'; // Reset previous input after calculation
                    break;
                case '.':
                    if (!currentInput.includes('.')) {
                        currentInput += '.';
                    }
                    break;
                case '+':
                case '-':
                case '*':
                case '/':
                    handleOperator(value);
                    break;
                default:
                    if (currentInput === '0' && value !== '.') {
                        currentInput = value;
                    } else if (currentInput.length < 15) { // Limit input length
                        currentInput += value;
                    }
            }
            updateDisplay();
        });
    });

    function calculate() {
        const num1 = parseFloat(previousInput);
        const num2 = parseFloat(currentInput);

        let result = 0;
        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
        }
        currentInput = result.toString();
        previousInput = '0'; // Clear previous input
        operator = null;
    }

    function handleOperator(op) {
        if (operator) {
            calculate();
        }
        operator = op;
        previousInput = currentInput;
        currentInput = '0';

    }
    updateDisplay(); // Initialize display
});
