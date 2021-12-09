const readFile = require("../utils/readFile")

const createGrid = (rawData) => {
  const xVals = rawData.split(/\n| -> /).map(pos => parseInt(pos[0]))
  console.log('xVals', xVals)
  const yVals = rawData.split(/\n| -> /).map(pos => parseInt(pos[2]))
  console.log('yVals', yVals)
  const biggestX = Math.max(...xVals)
  console.log('biggestX', biggestX)
  const biggestY = Math.max(...yVals)
  console.log('biggestY', biggestY)

  const grid = []
  for(row = 0; row <= biggestX; row++) {
    grid[row] = []
    for(col = 0; col <= biggestY; col++) {
      grid[row][col] = 0
    }
  }
  console.log('grid', grid)
  return grid
}

const getCoordinates = (rawData) => {
  return rawData.split('\n').map(row => row.split(' -> ').map(pos => pos.split(',').map(Number)))
}

const getDirection = (x, y) => {
  if(x == 0 && y > 0) return 'DOWN'
  if(x == 0 && y < 0) return 'UP'
  if(y == 0 && x > 0) return 'RIGHT'
  if(y == 0 && x < 0) return 'LEFT'
  return 'DIAGONAL'
}

const markCoordinates = (coordinates, grid) => {
  const markedGrid = [...grid]
  console.table(markedGrid)

  coordinates.forEach(posPair => {
    const start = posPair[0]
    const end = posPair[1]
    const distanceX = end[0] - start[0]
    const distanceY = end[1] - start[1]
    const direction = getDirection(distanceX, distanceY)
    switch (direction) {
      case "DOWN":
        console.log("DOWN") 
        for(let y = start[1]; y <= end[1]; y++) {
          markedGrid[y][start[0]]++
        }
        break;
      case "UP":
        for(let y = start[1]; y >= end[1]; y-- ) {
          markedGrid[y][start[0]]++
        }
        break;
      case "RIGHT":
        for(let x = start[0]; x <= end[0]; x++ ) {
          markedGrid[start[1]][x]++
        }
        break;
      case "LEFT":
        for(let x = start[0]; x >= end[0]; x-- ) {
          markedGrid[start[1]][x]++
        }
        break;
      case "DIAGONAL":
        // do nothing
        break;
      default:
        break;
    }
  });
  return markedGrid
}

const countIntersections = (grid) => {
  let count = 0
  grid.forEach(row => {
    row.forEach(col => {
      if(col > 1) count++
    })
  })
  return count
}

const day5 = (dataPath) => {
  console.time('day5-1')
  const rawData = readFile(dataPath)
  const grid = createGrid(rawData)
  console.log('grid', grid)
  const coordinates = getCoordinates(rawData)
  console.log('coordinates', coordinates)
  const markedGrid = markCoordinates(coordinates ,grid)
  const intersections = countIntersections(markedGrid)
  console.timeEnd('day5-1')
  return intersections
}

module.exports = day5;