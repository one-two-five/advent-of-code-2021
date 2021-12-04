const day1 = require('./day1')

describe('day1', () => {
  test('example with 10 values', () => {
    expect(day1('./One-second/example.txt')).toBe(5)
  })

  test('example with 12 values and inclomplete A section', () => {
    expect(day1('./One-second/example2.txt')).toBe(6)
  })

  test('example with 14 values and incomplete C section', () => {
    expect(day1('./One-second/example3.txt')).toBe(8)
  })

  test('example with 20 values', () => {
    expect(day1('./One-second/example4.txt')).toBe(11)
  })

  test('input', () => {
    const output = day1('./One-second/input.txt')
    expect(output).toBe(1781)
  })
});

