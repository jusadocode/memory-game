import "../styles/start-section.css";

function StartSection({ handleStart }) {
  return (
    <>
      <div className="menu-container">
        <h1>Welcome, do not click a card twice!</h1>
        <h3>Choose difficulty</h3>
        <div className="button-holder">
          <button className="simple-button" onClick={() => handleStart(4)}>
            Simple
          </button>
          <button className="normal-button" onClick={() => handleStart(6)}>
            Normal
          </button>
          <button className="complicated-button" onClick={() => handleStart(8)}>
            Complicated
          </button>
        </div>
      </div>
    </>
  );
}

export default StartSection;
