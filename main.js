let currentInput = '';
let result = '';

function handleClick(value) {
    currentInput += value;
    updateDisplay();
}

function handleClear() {
    currentInput = '';
    result = '';
    updateDisplay();
}

function hasil(){
    if (currentInput[1] == "+"){
        currentInput = Number(currentInput[0]) + Number(currentInput[2]);
        updateDisplay();
    }
}

function updateDisplay() {
    document.getElementById('result').innerText = currentInput;
}
