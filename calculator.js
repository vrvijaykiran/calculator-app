function clearDisplay() {
    document.getElementById('display').textContent = '';
}

function appendToDisplay(value) {
    document.getElementById('display').textContent += value;
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.textContent = eval(display.textContent);
    } catch {
        display.textContent = 'Error';
    }
}
