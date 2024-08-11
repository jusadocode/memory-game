import { useEffect, useState } from "react";
import "../styles/cards-section.css";

function FailSection({
  score,
  highestScore,
  deathCard,
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
        <h1 className={animate ? "loss-text" : ""}>You Lost!</h1>
        <p>Scored: {score}</p>
        <p>
          {highestScore < score
            ? `New highest score reached!`
            : `Highest score: ${highestScore}`}
        </p>
        <img src={deathCard.img} alt="" />
        <div className="button-holder">
          <button onClick={handleRestart}>Try again</button>
          <button onClick={handleGoBack}>Back to menu</button>
        </div>
      </div>
    </>
  );
}

export default FailSection;
