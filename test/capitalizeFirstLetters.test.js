// capitalizeFirstLetters.js
const assert = require('assert');

const capitalizeFirstLetters = require('../capitalizeFirstLetters');

describe('capitalizeFirstLetters', () => {
	
	it('is a function accepting one argument', () => {
		// Check that capitalizeFirstLetters is a function
		assert.strictEqual(typeof capitalizeFirstLetters, 'function');

		// Check that capitalizeFirstLetters accepts one argument
		assert.strictEqual(capitalizeFirstLetters.length, 1);
	});

	it('transforms sentence correctly', () =>{
		// Transform sentence correctly
		assert.strictEqual(capitalizeFirstLetters('i am learning TDD'), 'I Am Learning TDD');

		// Transform javaScript correctly
		assert.strictEqual(capitalizeFirstLetters('javaScript'), 'JavaScript');
	});

	it('works with a 1-character string', () => {
		assert.strictEqual(capitalizeFirstLetters('z'), 'Z');
	});

	it('works with an empty string', () => {
		assert.strictEqual(capitalizeFirstLetters(''), '');
	});
});

