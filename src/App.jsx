import "./normalize.css";
import "./App.css";
import { ReactComponent as CopyIcon } from "./assets/copy_icon.svg";

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
        <div className="checkbox">
          <input type="checkbox" />
          <span>Include Uppercase letters</span>
        </div>
        <div className="checkbox">
          <input type="checkbox" />
          <span>Include Lowercase letters</span>
        </div>
        <div className="checkbox">
          <input type="checkbox" />
          <span>Include Numbers</span>
        </div>
        <div className="checkbox">
          <input type="checkbox" />
          <span>Include Symbols</span>
        </div>
        <div className="card-strength">
          <div className="strength">STRENGTH</div>
          <div className="card-strength-icons">
            <div>MEDIUM</div>
            <span className="strength-icon"></span>
            <span className="strength-icon"></span>
            <span className="strength-icon"></span>
            <span className="strength-icon"></span>
          </div>
        </div>

        <button className="btn-generate"> Generate </button>
      </section>
    </div>
  );
}

export default App;