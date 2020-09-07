document.addEventListener('DOMContentLoaded', () => {

  //card options
  const cardArray = [
    {
      name: 'bear',
      img: 'images/bear.png'
    },
    {
      name: 'bear',
      img: 'images/bear.png'
    },
    {
      name: 'camel',
      img: 'images/camel.png'
    },
    {
      name: 'camel',
      img: 'images/camel.png'
    },
    {
      name: 'giraffe',
      img: 'images/giraffe.png'
    },
    {
      name: 'giraffe',
      img: 'images/giraffe.png'
    },
    {
      name: 'horse',
      img: 'images/horse.png'
    },
    {
      name: 'horse',
      img: 'images/horse.png'
    },
    {
      name: 'koala',
      img: 'images/koala.png'
    },
    {
      name: 'koala',
      img: 'images/koala.png'
    },
    {
      name: 'Lion',
      img: 'images/Lion.png'
    },
    {
      name: 'Lion',
      img: 'images/Lion.png'
    }
  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  var cardsChosen = []
  var cardsChosenId = []
  var cardsWon = []


  //create your board
  function createBoard() {
    for (let i=0; i<cardArray.length; i++){
      var card = document.createElement('img')
      card.setAttribute('src', 'images/color.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  //check for matches
  function checkForMatches() {
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if (cardsChosen[0] === cardsChosen[1]){
      alert("Siz o'xshashlikni topdingiz")
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'images/color.png')
      cards[optionTwoId].setAttribute('src', 'images/color.png')
      alert('Uzur, boshqatdan uruning')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === cardArray.length/2){
      resultDisplay.textContent = ' Tabriklayman! Siz barchasini topdingiz!'
    }
  }


  //flip your card
  function flipCard() {
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2){
      setTimeout(checkForMatches, 500)
    }
  }

  createBoard()

})
