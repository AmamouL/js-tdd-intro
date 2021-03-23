// capitalizeFirstLetters.js
const assert = require('assert');

// capitalizeFirstLetters Function
function capitalizeFirstLetters(input) {
    let output = '';
    let splitted = input.trim().split(" ");
    if (splitted[0] != "") {
        for (let i = 0; i < splitted.length; i++) {
            output += splitted[i][0].toUpperCase();
            output += splitted[i].slice(1);
            if (i != splitted.length - 1) {
                output += ' ';
            }
        }
    }
    return output;
}
// Check that capitalizeFirstLetters is a function
assert.strictEqual(typeof capitalizeFirstLetters, 'function');

// Check that capitalizeFirstLetters accepts one argument
assert.strictEqual(capitalizeFirstLetters.length, 1);

// Check that capitalizeFirstLetters transforms sentence correctly
assert.strictEqual(capitalizeFirstLetters('i am learning TDD'), 'I Am Learning TDD');

// Check that capitalizeFirstLetters transforms javaScript correctly
assert.strictEqual(capitalizeFirstLetters('javaScript'), 'JavaScript');

// Check that it works for a 1-character string
assert.strictEqual(capitalizeFirstLetters('z'), 'Z');

// Check that it works for an empty string
assert.strictEqual(capitalizeFirstLetters(''), '');
