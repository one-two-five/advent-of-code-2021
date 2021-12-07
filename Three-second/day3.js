const readFile = require("../utils/readFile")

const oxygenDecider = (arr, colIndex) => {
  const count = arr.filter((bin) => bin[colIndex] === 1).length
  const result = count >= (arr.length / 2) ? 1 : 0
  return result
}

const co2Decider = (arr, colIndex) => {
  const count = arr.filter((bin) => bin[colIndex] === 1).length
  const result = count >= (arr.length / 2) ? 0 : 1
  return result
}

const filterValues = (values, columnsCount, index, oxygen = true) => {
  if (values.length < 2) return values[0].join('')
  const filterValue = oxygen ? oxygenDecider(values, index) : co2Decider(values, index)
  const filtered = values.filter((bin) => (bin[index] === filterValue))
  return filterValues(filtered, columnsCount, index + 1, oxygen)
}

const day3 = (dataPath) => {
  console.time('day3-2')
  const arr = readFile(dataPath).split('\n').map((str) => str.split('').map((char) => parseInt(char, 10)))
  const colLength = arr[0].length
  const oxygen = filterValues(arr, colLength, 0)
  const co2 = filterValues(arr, colLength, 0, false)
  const result = parseInt(oxygen, 2) * parseInt(co2, 2)

  console.timeEnd('day3-2')
  return result
}

module.exports = day3;