const readFile = require("../utils/readFile")

const day2 = (dataPath) => {
  console.time('day2-1')
  const arr = readFile(dataPath).split("\n").map((pos) => pos.split(' '))
  console.log('arr', arr)

  let horizontal = 0;
  let depth = 0;
  
  arr.forEach((pos) => {
    const direction = pos[0]
    const value = parseInt(pos[1], 10)
    
    switch (direction) {
      case "forward":
        horizontal+=value
        break;
        case "up":
          depth-=value
          break;
          case "down":
            depth+=value
            break;
          }
        })
        
        const endPosition = horizontal * depth
        return endPosition
      }

module.exports = day2;