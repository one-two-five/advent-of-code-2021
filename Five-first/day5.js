const readFile = require("../utils/readFile")

const createGrid = (rawData) => {
  const xVals = rawData.split(/\n| -> /).map(pos => parseInt(pos[0]))
  const yVals = rawData.split(/\n| -> /).map(pos => parseInt(pos[2]))
  const biggestX = Math.max(...xVals)
  const biggestY = Math.max(...yVals)

  const grid = []
  for(row = 0; row <= biggestX; row++) {
    grid[row] = []
    for(col = 0; col <= biggestY; col++) {
      grid[row][col] = 0
    }
  }
  return grid
}

const day5 = (dataPath) => {
  console.time('day5-1')
  const rawData = readFile(dataPath)
  const grid = createGrid(rawData)



  console.timeEnd('day5-1')
  return 0
}

module.exports = day5;