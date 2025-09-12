// Import the core logic function
const { increment } = require('./counterLogic.js');

// DOM setup code - this only runs in the browser
document.addEventListener('DOMContentLoaded', () => {
    const counterElement = document.getElementById('counter');
    const buttonElement = document.getElementById('increment-btn');
    let count = 0; // State is now managed here, in the UI layer

    // When the button is clicked, run the logic and update the UI
    buttonElement.addEventListener('click', () => {
        // Use the pure function from counterLogic.js
        count = increment(count);
        // Update the UI
        counterElement.textContent = count;
    });
});