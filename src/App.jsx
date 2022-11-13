import React from 'react';
import './App.css';
import Card from './Card';

const cardData = [
  { value: 11, img: './cards/ace_of_spades.svg' },
  { value: 2, img: './cards/2_of_spades.svg' },
  { value: 3, img: './cards/3_of_spades.svg' },
  { value: 4, img: './cards/4_of_spades.svg' },
  { value: 5, img: './cards/5_of_spades.svg' },
  { value: 6, img: './cards/6_of_spades.svg' },
  { value: 7, img: './cards/7_of_spades.svg' },
  { value: 8, img: './cards/8_of_spades.svg' },
  { value: 9, img: './cards/9_of_spades.svg' },
  { value: 10, img: './cards/10_of_spades.svg' },
  { value: 10, img: './cards/jack_of_spades2.svg' },
  { value: 10, img: './cards/queen_of_spades2.svg' },
  { value: 10, img: './cards/king_of_spades2.svg' },
  { value: 11, img: './cards/ace_of_clubs.svg' },
  { value: 2, img: './cards/2_of_clubs.svg' },
  { value: 3, img: './cards/3_of_clubs.svg' },
  { value: 4, img: './cards/4_of_clubs.svg' },
  { value: 5, img: './cards/5_of_clubs.svg' },
  { value: 6, img: './cards/6_of_clubs.svg' },
  { value: 7, img: './cards/7_of_clubs.svg' },
  { value: 8, img: './cards/8_of_clubs.svg' },
  { value: 9, img: './cards/9_of_clubs.svg' },
  { value: 10, img: './cards/10_of_clubs.svg' },
  { value: 10, img: './cards/jack_of_clubs2.svg' },
  { value: 10, img: './cards/queen_of_clubs2.svg' },
  { value: 10, img: './cards/king_of_clubs2.svg' },
  { value: 11, img: './cards/ace_of_hearts.svg' },
  { value: 2, img: './cards/2_of_hearts.svg' },
  { value: 3, img: './cards/3_of_hearts.svg' },
  { value: 4, img: './cards/4_of_hearts.svg' },
  { value: 5, img: './cards/5_of_hearts.svg' },
  { value: 6, img: './cards/6_of_hearts.svg' },
  { value: 7, img: './cards/7_of_hearts.svg' },
  { value: 8, img: './cards/8_of_hearts.svg' },
  { value: 9, img: './cards/9_of_hearts.svg' },
  { value: 10, img: './cards/10_of_hearts.svg' },
  { value: 10, img: './cards/jack_of_hearts2.svg' },
  { value: 10, img: './cards/queen_of_hearts2.svg' },
  { value: 10, img: './cards/king_of_hearts2.svg' },
  { value: 11, img: './cards/ace_of_diamonds.svg' },
  { value: 2, img: './cards/2_of_diamonds.svg' },
  { value: 3, img: './cards/3_of_diamonds.svg' },
  { value: 4, img: './cards/4_of_diamonds.svg' },
  { value: 5, img: './cards/5_of_diamonds.svg' },
  { value: 6, img: './cards/6_of_diamonds.svg' },
  { value: 7, img: './cards/7_of_diamonds.svg' },
  { value: 8, img: './cards/8_of_diamonds.svg' },
  { value: 9, img: './cards/9_of_diamonds.svg' },
  { value: 10, img: './cards/10_of_diamonds.svg' },
  { value: 10, img: './cards/jack_of_diamonds2.svg' },
  { value: 10, img: './cards/queen_of_diamonds2.svg' },
  { value: 10, img: './cards/king_of_diamonds2.svg' },
];


function App() {
  const [score, setScore] = React.useState(0);
  const [hand, setHand] = React.useState([0, 13, 26, 39]);
  const [dealtCards, updateDeck] = React.useState([]);
  let numAces = 0;

  function addNewCard() {
    let newCardValue;
    do {
      newCardValue = Math.floor(Math.random() * cardData.length);
    } while (dealtCards.includes(cardData[newCardValue]));
    aceCheck(cardData[newCardValue].value);

    const handCopy = [...hand];
    handCopy.push(newCardValue);
    setHand(handCopy);

    const dealtCopy = [...dealtCards];
    dealtCopy.push(cardData[newCardValue]);
    updateDeck(dealtCopy);

    console.log(dealtCards);
    if (numAces > 1 && score + cardData[newCardValue].value > 21)

      setScore(score + cardData[newCardValue].value);
  }

  // function aceCheck(cardValue) {

  //   console.log(score + cardValue);
  //   if (cardValue === 1 && (score + cardValue) < 21)
  //     return 11;
  //   console.log("function " + cardValue);
  //   return cardValue;
  // }

  function aceCheck(cardValue) {
    if (cardValue === 1)
      numAces++;
  }

  function clearHand() {
    let card1;
    let card2;
    do {
      card1 = Math.floor(Math.random() * cardData.length);
      card2 = Math.floor(Math.random() * cardData.length);
    } while (card1 === card2);

    // const card1 = 0;
    // const card2 = 13;

    setHand([card1, card2]);
    updateDeck([cardData[card1], cardData[card2]]);
    setScore(aceCheck(cardData[card1].value, cardData[card2].value));
    // setHand([]);
    // updateDeck([]);
    // setScore(0);
    // addNewCard();

    // addNewCard();


  }


  return (
    <div className="App">
      <h1>Card Game</h1>

      <div className="hand">
        {hand.map((c) => <Card card={cardData[c]} />)}
      </div>
      <button onClick={addNewCard} disabled={score >= 21}>New Card</button>
      <p>Score: {score}</p>
      <button onClick={clearHand} >Start Game</button>
      {score === 21 && <h1>Blackjack!</h1>}
      {score > 21 && <h1>You lost</h1>}
    </div>
  );
}


export default App; 