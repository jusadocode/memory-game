import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../styles/cards-section.css";
import shuffle from "../helperFunctions/math-utilities";
import Tilt from "react-parallax-tilt";

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
  const [isShuffling, setIsShuffling] = useState(false);

  const getRandomRotation = (min, max) => Math.random() * (max - min) + min;

  const handleCardClick = (card) => {
    if (isCardAlreadyClicked(card)) {
      console.log("Already clicked", card.title);
      setGameLost(true);
      return;
    }

    const updatedScore = currentScore + 1;
    setScore(updatedScore);

    if (updatedScore === cards.length) {
      setGameWon(true);
      return;
    }

    randomizeCards();
    handleShuffling();
    cardsClicked.push(card.title);
    setCardsClicked([...cardsClicked]);
  };

  const randomizeCards = () => {
    const newCards = shuffle([...cards]);
    setCards(newCards);
  };

  const wiggleAnimation = {
    start: { rotate: 0, x: 0 },
    end: {
      rotate: getRandomRotation(-360, 360),
      x: [0, 20, -10, 20, -10, 0],
    },
  };

  function handleShuffling() {
    setIsShuffling(true);

    setTimeout(() => {
      setIsShuffling(false);
    }, 1000);
  }

  useEffect(() => {
    handleShuffling();
    randomizeCards();
  }, []);

  return (
    <>
      {isShuffling ? (
        <>
          <motion.div
            className="box"
            variants={wiggleAnimation}
            initial="start"
            animate="end"
            transition={{ type: "spring" }}
            style={{
              width: "12rem",
              height: "12rem",
              borderRadius: 30,
              backgroundColor: "transparent",
              border: "3px solid green",
            }}
          />
          <p>Shuffling...</p>
        </>
      ) : (
        <div className="cards-wrapper">
          {cards.map((card, index) => (
            <Tilt
              key={index}
              glareEnable={true}
              glareMaxOpacity={0.6}
              glareColor="green"
              glarePosition="bottom"
              tiltReverse="true"
            >
              <div
                className="card"
                key={index}
                onClick={() => handleCardClick(card)}
              >
                <img src={card.fixedImg} alt={card.alt_text} />
              </div>
            </Tilt>
          ))}
        </div>
      )}
    </>
  );
}

export default CardsSection;
