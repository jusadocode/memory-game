import { useEffect, useState } from "react";

import "../styles/cards-section.css";

function WinSection({
  score,
  highestScore,
  allCards,
  handleRestart,
  handleGoBack,
}) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <>
      <div>
        <h1 className={animate ? "win-text" : ""}>You Won!</h1>
        <p>Score: {score}</p>
        <h4>
          {highestScore < score
            ? `New highest score reached!`
            : `Highest score: ${highestScore}`}
        </h4>
        <img src={allCards[1].img} alt="" />
        <div className="button-holder">
          <button onClick={handleRestart}>Try again</button>
          <button onClick={handleGoBack}>Back to menu</button>
        </div>
      </div>
    </>
  );
}

export default WinSection;
