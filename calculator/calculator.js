document.getElementById('calculateBtn').addEventListener('click', function() {
    // Retrieve input values
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var operation = document.getElementById('operation').value;
    
    // Check if input values are valid numbers
    if (isNaN(num1) || isNaN(num2)) {
        displayResult('Please enter valid numbers.', 'alert-danger');
        return;
    }

    // Perform calculation based on selected operation
    var result;
    switch (operation) {
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
            if (num2 === 0) {
                displayResult('Cannot divide by zero.', 'alert-danger');
                return;
            }
            result = num1 / num2;
            break;
        default:
            displayResult('Invalid operation.', 'alert-danger');
            return;
    }

    // Display result
    displayResult('Result: ' + result, 'alert-success');
});

function displayResult(message, className) {
    var resultDiv = document.getElementById('result');
    resultDiv.textContent = message;
    resultDiv.className = 'alert ' + className;
    resultDiv.style.display = 'block';
}
