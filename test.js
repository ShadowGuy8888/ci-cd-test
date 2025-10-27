// Import the function we want to test
const { describe, expect, test } = require("@jest/globals");
const { increment } = require("./counterLogic.js");

// Test the pure function
test('increment function adds 1 to the current count', () => {
    // Test case 1: Normal increment
    expect(increment(0)).toBe(1);
    
    // Test case 2: Increment from a different number
    expect(increment(5)).toBe(6);
    
    // Test case 3: Increment a negative number
    expect(increment(-3)).toBe(-2);

    expect(increment(9999)).toBe(10000);
});
console.log("ABC")