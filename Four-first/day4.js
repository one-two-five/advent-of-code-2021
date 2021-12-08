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
  const bingoNumbers = rawDataLines.shift().split(',').map(Number)
  const bingoCards = populateCards(rawDataLines) 

  let winner = false;
  let winningCard = []
  
  bingoNumbers.forEach(calledNumber => {
    if(!winner) {
      bingoCards.forEach(card => {
        // console.log('card', card)
        card.forEach((row, index) => {
          row.forEach(score => {
            if(score[0] === calledNumber) score[1] = 1
          })
          const rowScore = row.reduce((acc, score) => acc + score[1], 0)
          console.log('rowScore', rowScore)
          const colScore = card.map(col => col[index]).reduce((acc, score) => acc + score[1], 0)
          console.log('colScore', colScore)
          if(rowScore === 5 || colScore === 5) {
            winner = true
          } 
          if(winner) winningCard = card
        })
      })
    }
  })
  
  console.log('winner', winner)
  console.log('winningCard', winningCard)
  
  console.timeEnd('day4-1')
  return 0
}

module.exports = day4;