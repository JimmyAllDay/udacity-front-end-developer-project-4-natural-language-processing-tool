import { formValidation } from '../js/formValidation';

// I want this to have two tests - one testing with a string of three words and one with two words

test('Short user input should return falsy', () => {
  // actual test
  const inputString1 = 'One Two';
  expect(formValidation(inputString1)).toBeFalsy;
});

test('Correct user input should return truthy', () => {
  // actual test
  const inputString2 = 'One Two Three';
  expect(formValidation(inputString2)).toBeTruthy;
});
