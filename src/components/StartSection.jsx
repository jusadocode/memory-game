import "../styles/start-section.css";
import Tilt from "react-parallax-tilt";

function StartSection({ handleStart }) {
  return (
    <div className="menu-container">
      <h1>Welcome, do not click a card twice!</h1>
      <h3>Choose difficulty</h3>
      <div className="button-holder">
        <Tilt
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          perspective={1000}
          scale={1.1}
        >
          <button className="simple-button" onClick={() => handleStart(4)}>
            Simple
          </button>
        </Tilt>

        <Tilt
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          perspective={1000}
          scale={1.1}
        >
          <button className="normal-button" onClick={() => handleStart(6)}>
            Normal
          </button>
        </Tilt>

        <Tilt
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          perspective={1000}
          scale={1.1}
        >
          <button className="complicated-button" onClick={() => handleStart(8)}>
            Complicated
          </button>
        </Tilt>
      </div>
    </div>
  );
}

export default StartSection;
