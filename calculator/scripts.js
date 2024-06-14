let memory = 0;

function appendToDisplay(value) {
    const display = document.getElementById('result');
    display.value += value;
}

function clearDisplay() {
    document.getElementById('result').value = '';
}

function deleteChar() {
    const display = document.getElementById('result');
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    const display = document.getElementById('result');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function toggleSign() {
    const display = document.getElementById('result');
    if (display.value) {
        display.value = display.value.charAt(0) === '-' 
            ? display.value.slice(1) 
            : '-' + display.value;
    }
}

function memoryClear() {
    memory = 0;
}

function memoryRecall() {
    const display = document.getElementById('result');
    display.value += memory;
}

function memoryAdd() {
    const display = document.getElementById('result');
    if (display.value) {
        memory += parseFloat(display.value);
        clearDisplay();
    }
}

function memorySubtract() {
    const display = document.getElementById('result');
    if (display.value) {
        memory -= parseFloat(display.value);
        clearDisplay();
    }
}

document.addEventListener('keydown', function(event) {
    const key = event.key;
    const display = document.getElementById('result');

    if (/[0-9]/.test(key)) {
        appendToDisplay(key);
    } else if (key === '.') {
        appendToDisplay(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        appendToDisplay(key);
    } else if (key === 'Enter' || key === '=') {
        calculateResult();
    } else if (key === 'Backspace') {
        deleteChar();
    } else if (key.toLowerCase() === 'c') {
        clearDisplay();
    } else if (key === 'm') {
        memoryAdd();
    } else if (key === 'n') {
        memorySubtract();
    } else if (key === 'r') {
        memoryRecall();
    } else if (key === 'x') {
        memoryClear();
    }
});
