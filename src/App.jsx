import "./normalize.css";
import "./App.css";
import { ReactComponent as CopyIcon } from "./assets/copy_icon.svg";
import { ReactComponent as ArrowIcon } from "./assets/arrow_right_icon.svg";

function App() {
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
          <p className="card-character-number">10</p>
        </div>
        <div className="checkbox-container">
          <input type="checkbox" id="checkbox-uppercase" />
          <label for="checkbox-uppercase">Include Uppercase letters</label>
        </div>
        <div className="checkbox-container">
          <input type="checkbox" id="checkbox-lowercase" />
          <label for="checkbox-lowercase">Include Lowercase letters</label>
        </div>
        <div className="checkbox-container">
          <input type="checkbox" id="checkbox-numbers" />
          <label for="checkbox-numbers">Include Numbers</label>
        </div>
        <div className="checkbox-container">
          <input type="checkbox" id="checkbox-symbols" />
          <label for="checkbox-symbols">Include Symbols</label>
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
