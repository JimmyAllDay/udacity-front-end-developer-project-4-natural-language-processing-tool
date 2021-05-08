// Jest tutorial code
const functions = require('../js/functions.js');

test('Add 2 + 2 to equal 4', () => {
  expect(functions.add(2, 2)).toBe(4);
});

test('Add 2 + 2 to NOT equal 5', () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

test('Should be Null', () => {
  expect(functions.isNull()).toBeNull();
});
