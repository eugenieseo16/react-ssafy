import { numberWithComma } from './numberWithComma';

test('numberWithComma(8000) => "8,000"', () => {
  let result = numberWithComma(8000);
  let expected = '8,000';

  expect(result).toBe(expected);
});

test('numberWithComma(1909296040) => "1,909,296,040"', () => {
  let result = numberWithComma(1_909_296_040);
  let expected = '1,909,296,040';

  expect(result).toBe(expected);
});
