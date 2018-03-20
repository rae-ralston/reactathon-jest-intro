const sum = require('./sum');

it('adds two numbers', () => {
  expect(sum(1, 2)).toBe(3);
  expect(sum(2, 2)).toBe(4);
});
