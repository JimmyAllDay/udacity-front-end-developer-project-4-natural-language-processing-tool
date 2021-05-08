import { getUserInput } from '../js/getUserInput';

test('returns promise', () => {
  return getUserInput().then(data => {
    expect(data).toBeTruthy();
  });
});
