
const arrayFromTxtNewLines = require("../utils/arrayFromTxtNewLines")

const countIncrease = (arr) => {
  return arr.reduce((acc, cur, index, arr) => {
    if((index > 0) && cur > arr[index - 1]) {
      acc++
    }
    return acc
  }, 0)
}

const day1 = (dataPath) => {
  console.time('day1-2')
  const arr = arrayFromTxtNewLines(dataPath, true)

  let transformed = []

  for(index = 0; index < arr.length; index++) {
    if(!(typeof arr[index + 2] === 'undefined') ) {
      const chunk = arr.slice(index, index + 3).reduce((acc, cur) => acc + cur)
      transformed.push(chunk)
    }
  }
  const total = countIncrease(transformed)
  console.timeEnd('day1-2')
  return total
}

module.exports = day1;