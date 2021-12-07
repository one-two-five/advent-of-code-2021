const day3 = require('./day3')

test('should have same value as example', () => {
  expect(day3('./Three-second/example.txt')).toBe(230)
})

test('should have same value as input', () => {
  expect(day3('./Three-second/input.txt')).toBe(793873)
})
