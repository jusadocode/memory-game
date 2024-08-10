import { useEffect, useState } from "react";

import "../styles/cards-section.css";
import shuffle from "../helperFunctions/math-utilities";

function CardsSection({
  cards,
  setCards,
  currentScore,
  setScore,
  setGameLost,
  setGameWon,
}) {
  const isCardAlreadyClicked = (card) => cardsClicked.includes(card.title);

  const [cardsClicked, setCardsClicked] = useState([]);

  const handleCardClick = (card) => {
    if (isCardAlreadyClicked(card)) {
      console.log("Already clicked", card.title);
      setGameLost(true);
      return;
    }

    cardsClicked.push(card.title);

    setCardsClicked([...cardsClicked]);

    const updatedScore = currentScore + 1;
    setScore(updatedScore);

    if (updatedScore === cards.length) {
      setGameWon(true);
      return;
    }

    randomizeCards();
  };

  const randomizeCards = () => {
    const newCards = shuffle([...cards]);
    setCards(newCards);
  };

  useEffect(() => {
    randomizeCards();
  }, []);

  return (
    <>
      <div className="cards-wrapper">
        {cards.map((card, index) => (
          <div
            className="card"
            key={index}
            onClick={() => handleCardClick(card)}
          >
            <img src={card.fixedImg} alt={card.alt_text} />
          </div>
        ))}
      </div>
    </>
  );
}

export default CardsSection;
