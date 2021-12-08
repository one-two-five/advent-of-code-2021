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

const getCoordinates = (rawData) => {
  return rawData.split('\n').map(row => row.split(' -> ').map(pos => pos.split(',').map(Number)))
}

const getDirection = (x, y) => {
  if(x == 0 && y > 0) return 'DOWN'
  if(x == 0 && y < 0) return 'UP'
  if(y == 0 && x > 0) return 'RIGHT'
  if(y == 0 && x < 0) return 'LEFT'
}

const markCoordinates = (coordinates, grid) => {
  const markedGrid = [...grid]

  coordinates.forEach(posPair => {
    const start = posPair[0]
    const end = posPair[1]
    const distanceX = end[0] - start[0]
    const distanceY = end[1] - start[1]
    const direction = getDirection(distanceX, distanceY)
    switch (direction) {
      case "DOWN":
        //down
        break;
      case "UP":
        //up
        break;
      case "LEFT":
        //left
        break;
      case "RIGHT":
        //right
        break;
      default:
        break;
    }

  });


  return markedGrid
}

const day5 = (dataPath) => {
  console.time('day5-1')
  const rawData = readFile(dataPath)
  const grid = createGrid(rawData)
  const coordinates = getCoordinates(rawData)
  console.log('coordinates', coordinates)



  console.timeEnd('day5-1')
  return 0
}

module.exports = day5;