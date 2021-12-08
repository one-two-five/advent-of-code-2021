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

const calculateCardScore = (card) => {
  const removeMarkedScores = card.map(row => row.filter(score => score[1] !== 1))
  const calculateScore = removeMarkedScores.map(row => row.reduce((acc, score) => acc + score[0], 0)).reduce((acc, rowScore) => acc + rowScore, 0)
  return calculateScore
}

const findWinningCard = (bingoNumbers, bingoCards) => {
  let winningNumber = undefined;
  let winningCards = []
  
  bingoNumbers.forEach(calledNumber => {
    if(!winningNumber) {
      bingoCards.forEach((card, cardIndex) => {
        if(card !== 'won') {
          card.forEach((row, index) => {
            row.forEach(score => {
              if(score[0] === calledNumber) score[1] = 1
            })
            const rowScore = row.reduce((acc, score) => acc + score[1], 0)
            const colScore = card.map(col => col[index]).reduce((acc, score) => acc + score[1], 0)
            if(rowScore === 5 || colScore === 5) {
              winningCards.push([card, calledNumber])
              bingoCards[cardIndex] = 'won'
            } 
          })
        }
      })
    }
  })
  const winner = winningCards.pop()
  return { winningCard: winner[0], winningNumber: winner[1] }
}

const day4 = (dataPath) => {
  const rawDataLines = readFile(dataPath).split('\n')
  const bingoNumbers = rawDataLines.shift().split(',').map(Number)
  const bingoCards = populateCards(rawDataLines) 
  const { winningCard, winningNumber } = findWinningCard(bingoNumbers, bingoCards)
  const score = calculateCardScore(winningCard)
  console.timeEnd('day4-1')
  return score * winningNumber
}

module.exports = day4;