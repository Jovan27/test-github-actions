const { add, sub, div } = require('./');

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('subtracts 5 - 1 to equal 4', () => {
  expect(sub(5, 1)).toBe(4);
});

test('divides 10 with 5 to equal 2', () => {
  expect(div(10, 5)).toBe(2);
});
