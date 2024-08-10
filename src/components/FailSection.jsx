import "../styles/cards-section.css";

function FailSection({
  score,
  highestScore,
  deathCard,
  handleRestart,
  handleGoBack,
}) {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h1>You Lost!</h1>
        <p>Scored: {score}</p>
        <p>
          {highestScore < score
            ? `New highest score reached!`
            : `Highest score: ${highestScore}`}
        </p>
        <img src={deathCard.img} alt="" />
        <button onClick={handleRestart}>Try again</button>
        <button onClick={handleGoBack}>Back to menu</button>
      </div>
    </>
  );
}

export default FailSection;
