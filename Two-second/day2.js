const readFile = require("../utils/readFile")

const day2 = (dataPath) => {
  console.time('day2-1')
  const arr = readFile(dataPath).split("\n").map((pos) => pos.split(' '))

  let horizontal = 0;
  let depth = 0;
  let aim = 0;
  
  arr.forEach((pos) => {
    const direction = pos[0]
    const value = parseInt(pos[1], 10)
    
    switch (direction) {
      case "forward":
        horizontal+=value
        depth+=(aim*value)
        break;
        case "up":
          aim-=value
          break;
        case "down":
          aim+=value
          break;
          }
        })
        
        const endPosition = horizontal * depth
        return endPosition
      }

module.exports = day2;