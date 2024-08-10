import { useEffect, useState } from "react";

import "../styles/cards-section.css";

function ScoreSection({ currentScore, highestScore }) {
  return (
    <>
      <div className="score-wrapper">
        <p>Score: {currentScore}</p>
      </div>
    </>
  );
}

export default ScoreSection;
