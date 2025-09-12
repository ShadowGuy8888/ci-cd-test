
let count = 0;
const counterElement = document.getElementById('counter');
const buttonElement = document.getElementById('increment-btn');

function incrementCounter() {
    count++;
    counterElement.textContent = count;
}

buttonElement.addEventListener('click', incrementCounter);