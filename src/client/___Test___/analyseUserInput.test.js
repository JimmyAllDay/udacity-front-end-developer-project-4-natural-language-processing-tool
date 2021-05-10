import { analyseUserInput } from '../js/analyseUserInput';

test('Asynchronous function to be defined', () => {
  expect(analyseUserInput).toBeDefined();
});

// Code for testing async function with mock below - commented out due to time constraints.

// jest.mock('../api/postData');

// describe('Analyse User Input', () => {
//   it('Return API Data', async () => {
//     const data = await analyseUserInput('What is going on here');
//     const expected = 'NONIRONIC AGREEMENT';
//     expect(data).toEqual(expected);
//   });
// });
