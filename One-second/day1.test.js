const day1 = require('./day1')

describe('day1', () => {
  test('example', () => {
    expect(day1('./One-second/example.txt')).toBe(7)
  })

  test('input', () => {
    const output = day1('./One-second/input.txt')
    expect(output).toBe(1752)
  })
});

