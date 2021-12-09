const readFile = require("../utils/readFile")

const createGrid = () => {
  const biggestX = 999
  const biggestY = 999

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
  if(x == 0 && y > 0) return 'S'
  if(x == 0 && y < 0) return 'N'
  if(y == 0 && x > 0) return 'E'
  if(y == 0 && x < 0) return 'W'
  if(x < 0 && y > 0) return 'SW'
  if(x < 0 && y < 0) return 'NW'
  if(x > 0 && y > 0) return 'SE'
  if(x > 0 && y < 0) return 'NE'
}

const markCoordinates = (coordinates, grid) => {
  const markedGrid = [...grid]
  coordinates.forEach((posPair) => {
    const start = posPair[0]
    const end = posPair[1]
    const distanceX = end[0] - start[0]
    const distanceY = end[1] - start[1]
    const diagonalDistance = Math.abs(distanceX)
    const move = start
    const direction = getDirection(distanceX, distanceY)
    
    switch (direction) {
      case "S":
        for(let y = start[1]; y <= end[1]; y++) {
          markedGrid[y][start[0]]++
        }
        break;
      case "N":
        for(let y = start[1]; y >= end[1]; y-- ) {
          markedGrid[y][start[0]]++
        }
        break;
      case "E":
        for(let x = start[0]; x <= end[0]; x++ ) {
          markedGrid[start[1]][x]++
        }
        break;
      case "W":
        for(let x = start[0]; x >= end[0]; x-- ) {
          markedGrid[start[1]][x]++
        }
        break;
      case "SW":
        for(let count = 0; count <= diagonalDistance; count++ ) {
          markedGrid[move[1]][move[0]]++
          move[0]--
          move[1]++
        }
        break;
      case "NW":
        for(let count = 0; count <= diagonalDistance; count++ ) {
          markedGrid[move[1]][move[0]]++
          move[0]--
          move[1]--
        }
        break;
      case "SE":
        for(let count = 0; count <= diagonalDistance; count++ ) {
          markedGrid[move[1]][move[0]]++
          move[0]++
          move[1]++
        }
        break;
      case "NE":
        for(let count = 0; count <= diagonalDistance; count++ ) {
          markedGrid[move[1]][move[0]]++
          move[0]++
          move[1]--
        }
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
  const grid = createGrid()
  const coordinates = getCoordinates(rawData)
  const markedGrid = markCoordinates(coordinates, grid)
  const intersections = countIntersections(markedGrid)
  console.timeEnd('day5-1')
  return intersections
}

module.exports = day5;