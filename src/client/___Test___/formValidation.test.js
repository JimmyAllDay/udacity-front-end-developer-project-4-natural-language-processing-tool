import { formValidation } from '../js/formValidation';

test('Short user input should return falsy', () => {
  const jsdomAlert = window.alert; // remember the jsdom alert
  window.alert = () => {}; // provide an empty implementation for window.alert
  const inputString1 = 'One Two';
  expect(formValidation(inputString1)).toBeFalsy;
  window.alert = jsdomAlert; // restore the jsdom alert
});

test('Correct user input should return truthy', () => {
  const jsdomAlert = window.alert; // remember the jsdom alert
  window.alert = () => {}; // provide an empty implementation for window.alert
  const inputString2 = 'One Two Three';
  expect(formValidation(inputString2)).toBeTruthy;
  window.alert = jsdomAlert; // restore the jsdom alert
});
