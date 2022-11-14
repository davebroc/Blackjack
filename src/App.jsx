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
  { value: 0, img: './cards/Card_back_05a.svg' },
];

function App() {
  const [pScore, setPScore] = React.useState(0);
  const [pScoreArray, setPScoreArray] = React.useState([]);
  const [dScore, setDScore] = React.useState(0);
  const [dScoreArray, setDScoreArray] = React.useState([]);
  const [playerHand, setPHand] = React.useState([0, 13, 26, 39]);
  const [dealerHand, setDHand] = React.useState([52, 52]);


  function addNewCard(isPlayer) {
    let index;
    do {
      index = getRandIndex();
    } while (playerHand.includes(index) || dealerHand.includes(index));

    let newScore = calculateScore(index, isPlayer);
    return { index: index, score: newScore }
  }
  function calculateScore(idx, isPlayer) {
    let array;
    let setFunc;
    let newScore;

    if (isPlayer) {
      array = pScoreArray;
      setFunc = setPScoreArray;
      newScore = pScore + cardData[idx].value;
    } else {
      array = dScoreArray;
      setFunc = setDScoreArray;
      newScore = dScore + cardData[idx].value;
    }

    let firstEleven = array.indexOf(11);
    while (newScore > 21 && (firstEleven !== -1 || cardData[idx].value === 11)) {
      setFunc(array.map((c, i) => {
        if (i === firstEleven) {
          return c = 1;
        }
        return c;
      }));
      newScore = newScore - 10;
    }
    return newScore;
  }

  function hit() {
    const cardAndScore = addNewCard(true);
    const handCopy = [...playerHand];
    handCopy.push(cardAndScore.index);
    setPHand(handCopy);
    setPScore(cardAndScore.score);
  }

  function stand() {
    const cardAndScore = addNewCard(false);
    const handCopy = [...dealerHand];
    handCopy.push(cardAndScore.index);

    setDHand(handCopy);
    setDScore(cardAndScore.score);


  }



  function startGame() {
    let idx1;
    let idx2;
    let idx3;

    do {
      idx1 = getRandIndex();
      idx2 = getRandIndex();
      idx3 = getRandIndex();
    } while (idx1 === idx2 || idx2 === idx3 || idx3 === idx1);
    if (cardData[idx1].value + cardData[idx2].value === 22) {//double aces case
      setPScore(12);
      setPScoreArray([11, 1]);
    } else {
      setPScore(cardData[idx1].value + cardData[idx2].value);
      setPScoreArray([cardData[idx1].value, cardData[idx2].value]);
    }
    setPHand([idx1, idx2]);
    setDHand([idx3, 52]);
    setDScore(cardData[idx3].value);
    setDScoreArray([cardData[idx3].value]);
  }

  function getRandIndex() {
    return Math.floor(Math.random() * (cardData.length - 1));
  }

  return (
    <div className="App">
      <h1>Blackjack Game</h1>

      <div className="hand" id="dealerHand">
        {dealerHand.map((c) => <Card card={cardData[c]} />)}
      </div>
      <p>House Score: {dScore}</p>
      <div className="hand" id="playerHand">
        {playerHand.map((c) => <Card card={cardData[c]} />)}
      </div>
      <button onClick={hit} disabled={pScore >= 21 || pScore <= 0}>Hit</button>
      <button onClick={stand} disabled={pScore >= 21 || pScore <= 0}>Stand</button>
      <p>Your Score: {pScore}</p>
      <button onClick={startGame} >Start Game</button>
      {pScore === 21 && <h1>Blackjack!</h1>}
      {pScore > 21 && <h1>You lost</h1>}
    </div>
  );
}


export default App; 