const day4 = require('./day4')

test('should have same value as example', () => {
  expect(day4('./Four-first/example.txt')).toBe(4512)
})

test('should have same value as input', () => {
  expect(day4('./Four-first/input.txt')).toBe(45031)
})


