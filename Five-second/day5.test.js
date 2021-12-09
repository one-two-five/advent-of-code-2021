const day5 = require('./day5')

test('should have same value as example', () => {
  expect(day5('./Five-second/example.txt')).toBe(12)
})

test('should have same value as input', () => {
  expect(day5('./Five-second/input.txt')).toBe(15278)
})


