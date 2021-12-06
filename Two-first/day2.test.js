const day2 = require('./day2')

test('should have same position as example', () => {
  expect(day2('./Two-first/example.txt')).toBe(150)
})

test('should have same position as input', () => {
  expect(day2('./Two-first/input.txt')).toBe(1488669)
})
