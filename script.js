function clearDisplay() {
    document.getElementById('display').innerText = '';
}

function appendCharacter(character) {
    document.getElementById('display').innerText += character;
}

function calculateResult() {
    try {
        const result = eval(document.getElementById('display').innerText);
        document.getElementById('display').innerText = result;
    } catch (e) {
        document.getElementById('display').innerText = 'Error';
    }
}
