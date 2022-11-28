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
  const [dealerHit, setDealerHit] = React.useState(0);
  const [winner, setWinner] = React.useState('');
  // const [playerBJ, setPBJ] = React.useState(false);
  // const [dealerBJ, setDBJ] = React.useState(false);
  // const [isBustP, setBustP] = React.useState(false);
  // const [isBustD, setBustD] = React.useState(false);
  const [gameState, setGameState] = React.useState("pre");
  // const [isGameEnd, setGameEnd] = React.useState(false);
  const [endText, setEndText] = React.useState("");

  function startGame() {
    setGameState("during");
    let idx1;
    let idx2;
    let idx3;
    setDealerHit(0);
    setEndText("");
    setWinner('');
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


  function hit() {
    const idx = getUnplayedIndex();
    const handCopy = [...playerHand];
    handCopy.push(idx);
    setPHand(handCopy);
  }

  React.useEffect(() => {
    if (playerHand.length > 2 && gameState === 'during')
      setPScoreArray([...pScoreArray, cardData[playerHand.at(-1)].value]);
  }, [playerHand]);

  React.useEffect(() => {
    setPScore(calculateScore("player"));
  }, [pScoreArray]);


  React.useEffect(() => {
    if (pScore > 21) {
      setWinner("dealer")
    }// player went bust
  }, [pScore]);

  React.useEffect(() => {
    // console.log(winner)

    switch (winner) {
      case "player":
        setGameState("post");
        setEndText("You Won!")

        break;
      case "dealer":
        // console.log("dealer won")
        setGameState("post");
        setEndText("You Lost");
        break;
      case "both":
        setGameState("post");
        setEndText("Push");
        break;

      default:
        break;
    }
  }, [winner]);

  function checkGameEnd() {

    if (dScore > 21) {// dealer went bust
      // setEndText("You Won!")
      setWinner("player")
      console.log("dScore > 21")
    }
    else if (dScore > pScore) {//dealer won
      // setEndText("You Lost");
      setWinner("dealer")
      console.log("dScore > pScore")
    }
    else if (dScore === pScore) {//dealer won
      // setEndText("Push");
      setWinner("both")
      console.log("dScore === pScore")
    }
    else { //player won
      // setEndText("You Won!")
      setWinner("player")
      console.log("else")
    }

  }

  React.useEffect(() => {
    console.log(gameState)
    if (dealerHit > 0 && gameState === 'during') {
      const idx = getUnplayedIndex();
      const handCopy = [...dealerHand];
      handCopy.push(idx);
      if (handCopy.includes(52))
        handCopy.splice(handCopy.indexOf(52), 1);
      setDHand(handCopy);
    }
  }, [dealerHit]);

  React.useEffect(() => {
    setDScoreArray([...dScoreArray, cardData[dealerHand.at(-1)].value]);
  }, [dealerHand]);

  React.useEffect(() => {
    setDScore(calculateScore("dealer"));
  }, [dScoreArray]);

  React.useEffect(() => {
    if (dealerHit > 0 && dScore < 17)
      setTimeout(() => (setDealerHit(dealerHit + 1)), 1000)
    else if (dScoreArray.length > 2) {
      checkGameEnd();
    }

  }, [dScore]);

  function calculateScore(person) {
    let array;
    let setFunc;

    if (person === "player") {
      array = pScoreArray;
      setFunc = setPScoreArray;
    } else {
      array = dScoreArray;
      setFunc = setDScoreArray;
    }
    let score = array.reduce((pv, cv) => pv + cv, 0);

    while (score > 21 && array.indexOf(11) !== -1) {
      let firstEleven = array.indexOf(11);
      setFunc(array.map((c, i) => {
        if (i === firstEleven)
          return c = 1;
        return c;
      }));
      score = score - 10;
    }
    return score;
  }






  function getUnplayedIndex() {
    let index;
    do {
      index = getRandIndex();
    } while (playerHand.includes(index) || dealerHand.includes(index));
    return index
  }

  function getRandIndex() {
    return Math.floor(Math.random() * (cardData.length - 1));
  }

  return (
    <div className="App">
      <header >
        <button id='settings'>⚙️</button>
        <h1>Blackjack</h1>
        <button id='help'>?</button>
      </header>

      <div className="hand" id="dealerHand">
        {dealerHand.map((c, i) => <Card key={i} card={cardData[c]} />)}
      </div>

      <p>House Score: {dScore}</p>

      <div className="hand" id="playerHand">
        {playerHand.map((c, i) => <Card key={i} card={cardData[c]} />)}
      </div>
      <div className='player-actions'>
        <button onClick={hit} disabled={pScore >= 21 || gameState === 'post' || pScore <= 0 || dealerHit > 0}>Hit</button>
        <button onClick={() => { setDealerHit(1) }} disabled={pScore > 21 || pScore <= 0 || dealerHit > 0}>Stand</button>
      </div>

      <p>Your Score: {pScore}</p>
      {gameState === 'post' && <h2 className={winner}>{endText}</h2>}
      {(gameState !== 'during') && <button onClick={startGame} >Start Game</button>}
    </div>
  );
}


export default App; 