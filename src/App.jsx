import { useState } from "react";
import "./normalize.css";
import "./App.css";
import { ReactComponent as CopyIcon } from "./assets/copy_icon.svg";
import { ReactComponent as ArrowIcon } from "./assets/arrow_right_icon.svg";

function App() {
  const [length, setLength] = useState(10);

  const handleChangeLength = (e) => {
    setLength(e.target.valueAsNumber);
  };

  const getBackgroundSize = () => {
    return {
      backgroundSize: `${(length * 100) / 20}% 100%`,
    };
  };

  return (
    <div className="container">
      <h2 className="title">Password Generate</h2>
      <section className="password-generate">
        <div>Pv1f45%sEr*00</div>
        <CopyIcon className="copy_icon" />
      </section>
      <section className="card">
        <div className="card-character-length">
          <p>Character Length</p>
          <p className="card-character-number">{length}</p>
        </div>
        <input
          min={0}
          max={20}
          type="range"
          className="range"
          value={length}
          onChange={handleChangeLength}
          style={getBackgroundSize()}
        />
        <div className="checkbox-container">
          <input type="checkbox" id="checkbox-uppercase" />
          <label htmlFor="checkbox-uppercase">Include Uppercase letters</label>
        </div>
        <div className="checkbox-container">
          <input type="checkbox" id="checkbox-lowercase" />
          <label htmlFor="checkbox-lowercase">Include Lowercase letters</label>
        </div>
        <div className="checkbox-container">
          <input type="checkbox" id="checkbox-numbers" />
          <label htmlFor="checkbox-numbers">Include Numbers</label>
        </div>
        <div className="checkbox-container">
          <input type="checkbox" id="checkbox-symbols" />
          <label htmlFor="checkbox-symbols">Include Symbols</label>
        </div>
        <div className="card-strength">
          <div className="strength">STRENGTH</div>
          <div className="card-strength-icons">
            <div>MEDIUM</div>
            <span className="strength-icon active"></span>
            <span className="strength-icon"></span>
            <span className="strength-icon"></span>
            <span className="strength-icon"></span>
          </div>
        </div>

        <button className="btn-generate">
          <span> GENERATE </span>
          <ArrowIcon className="arrow_icon" />
        </button>
      </section>
    </div>
  );
}

export default App;
