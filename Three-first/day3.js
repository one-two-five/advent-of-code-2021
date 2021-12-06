const readFile = require("../utils/readFile")


const calculateBits = (countArr, total, reverse = false) => {
  return countArr.map((count) => {
    return reverse ? (count > (total / 2) ? 0 : 1) : (count > (total / 2) ? 1 : 0)
  })
}

const day3 = (dataPath) => {
  console.time('day3-1')
  const arr = readFile(dataPath).split('\n').map((str) => str.split('').map((char) => parseInt(char, 10)))
  const counts = arr[0].map((val) => 0)
  console.log('counts', counts)
  
  for(row = 0; row < arr.length; row++) {
    for(col = 0; col < counts.length; col++) {
      counts[col] = parseInt(counts[col] + arr[row][col])  
    }
  }
  
  const gamma = parseInt(calculateBits(counts, (arr.length - 1)).join(''), 2)  
  const epsilon = parseInt(calculateBits(counts, (arr.length - 1), true).join(''), 2)  
  const result = gamma * epsilon

  console.timeEnd('day3-1')
  return result
}

module.exports = day3;