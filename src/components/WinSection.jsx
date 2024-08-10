import { useEffect, useState } from "react";

import "../styles/cards-section.css";

function WinSection({
  score,
  highestScore,
  allCards,
  handleRestart,
  handleGoBack,
}) {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h1>You won!</h1>
        <p>Score: {score}</p>
        <p>
          {highestScore < score
            ? `New highest score reached!`
            : `Highest score: ${highestScore}`}
        </p>
        <img src={allCards[1].images.original.url} alt="" />
        <button onClick={handleRestart}>Try again</button>
        <button onClick={handleGoBack}>Back to menu</button>
      </div>
    </>
  );
}

export default WinSection;
