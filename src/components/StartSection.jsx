import "../styles/cards-section.css";

function StartSection({ handleStart }) {
  return (
    <>
      <div className="menu-container">
        <h1>Welcome, do not click a card twice!</h1>
        <h3>Choose difficulty</h3>
        <div className="button-holder">
          <button onClick={() => handleStart(4)}>Simple</button>
          <button onClick={() => handleStart(6)}>Normal</button>
          <button onClick={() => handleStart(8)}>Complicated</button>
        </div>
      </div>
    </>
  );
}

export default StartSection;
