const day2 = require('./day2')

test('should have same position as example', () => {
  expect(day2('./Two-second/example.txt')).toBe(900)
})

test('should have same position as input', () => {
  expect(day2('./Two-first/input.txt')).toBe(1176514794)
})
