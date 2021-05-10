import { analyseUserInput } from '../js/analyseUserInput';

jest.mock('../api/postData');

describe('Analyse User Input', () => {
  it('Return API Data', async () => {
    const data = await analyseUserInput('What is going on here');
    const expected = 'NONIRONIC AGREEMENT';
    expect(data).toEqual(expected);
  });
});
