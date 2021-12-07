const readFile = require("../utils/readFile")

const populateCards = (data) => {
  const cards = [] 
  let cardIndex = 0
  data.forEach((line, index) => {
    if(line.length > 0) {
      let numbers = line.trim().split(/\s+/).map(val => [parseInt(val), 0])
      if(cards[cardIndex] === undefined) {
        cards[cardIndex] = []
      }
      cards[cardIndex].push(numbers) 
    } 
    
    if(line.length === 0 && index > 0) {
      cardIndex++
    }
  });
  return cards
}

const day4 = (dataPath) => {
  console.time('day4-1')

  const rawDataLines = readFile(dataPath).split('\n')

  const bingoNumbers = rawDataLines.shift()
  const cards = populateCards(rawDataLines) 
  
  console.timeEnd('day4-1')
  return 0
}

module.exports = day4;