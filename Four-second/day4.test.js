const day4 = require('./day4')

test('should have same value as example', () => {
  expect(day4('./Four-second/example.txt')).toBe(1924)
})

test('should have same value as input', () => {
  expect(day4('./Four-second/input.txt')).toBe(2568)
})


