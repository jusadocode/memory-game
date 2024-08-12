import { useState, useEffect } from "react";
import shuffle from "./helperFunctions/math-utilities";
import CardsSection from "./components/CardsSection";
import ScoreSection from "./components/ScoreSection";
import StartSection from "./components/StartSection";
import FailSection from "./components/FailSection";
import WinSection from "./components/WinSection";
import {
  fetchCardData,
  loadNeededInfo,
} from "./helperFunctions/data-utilities";

import "./App.css";

function App() {
  const [cards, setCards] = useState([]);
  const [allCards, setAllCards] = useState([]);

  const [cardAmount, setCardAmount] = useState(4);

  const [deathCard, setDeathCard] = useState({});

  const [score, setScore] = useState(0);
  const [highestScore, setHighestScore] = useState(0);

  const [gameStarted, setGameStarted] = useState(false);
  const [gameLost, setGameLost] = useState(false);
  const [gameWon, setGameWon] = useState(false);

  let gameInProgress = gameLost || gameWon ? false : gameStarted ? true : false;

  useEffect(() => {
    fetchCardData().then((response) => {
      const structuredData = loadNeededInfo(response.data);
      setAllCards(structuredData);
      setDeathCard(structuredData[0]);
    });
  }, []);

  const getPlayCards = (cardAmount) => {
    const playCards = allCards.slice(0, cardAmount);
    setCards(playCards);
  };

  const handleGoBack = () => {
    setGameStarted(false);
    setGameLost(false);
    setGameWon(false);
    setScore(0);
  };

  const handleRestart = () => {
    if (highestScore < score) setHighestScore(score);

    const shuffledCards = shuffle(allCards);
    setAllCards[[...shuffledCards]];
    getPlayCards(cardAmount);
    setGameLost(false);
    setGameWon(false);
    setScore(0);
  };

  const handleStart = (difficultyCardAmount) => {
    setCardAmount(difficultyCardAmount);
    const shuffledCards = shuffle(allCards);
    setAllCards[[...shuffledCards]];
    getPlayCards(difficultyCardAmount);
    setGameStarted(true);
  };

  return (
    <>
      {!gameStarted && <StartSection handleStart={handleStart} />}

      {gameLost && (
        <FailSection
          score={score}
          highestScore={highestScore}
          deathCard={deathCard}
          handleRestart={handleRestart}
          handleGoBack={handleGoBack}
        />
      )}

      {gameWon && (
        <WinSection
          score={score}
          highestScore={highestScore}
          allCards={allCards}
          handleRestart={handleRestart}
          handleGoBack={handleGoBack}
        />
      )}

      {gameInProgress && (
        <div className="main-container">
          <ScoreSection currentScore={score} highestScore={highestScore} />
          <CardsSection
            cards={cards}
            setCards={setCards}
            currentScore={score}
            setScore={setScore}
            setGameLost={setGameLost}
            setGameWon={setGameWon}
          />
        </div>
      )}
    </>
  );
}

export default App;
