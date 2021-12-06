const day3 = require('./day3')

test('should have same value as example', () => {
  expect(day3('./Three-first/example.txt')).toBe(198)
})

test('should have same value as input', () => {
  expect(day3('./Three-first/input.txt')).toBe(1025636)
})
