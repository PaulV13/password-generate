import { useEffect, useState } from "react";
import { ReactComponent as CopyIcon } from "./assets/copy_icon.svg";
import { ReactComponent as ArrowIcon } from "./assets/arrow_right_icon.svg";
import { ReactComponent as CheckIcon } from "./assets/check_icon.svg";
import toast, { Toaster } from "react-hot-toast";
import "./normalize.css";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [options, setOptions] = useState([]);
  const [strength, setStrength] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    selectedStrength();
  }, [options]);

  const getPorcentage = (length) => {
    if (length === 8) {
      return 0;
    }
    if (length === 9) {
      return 15;
    }
    if (length === 10) {
      return 30;
    }
    if (length === 11) {
      return 40;
    }
    if (length === 12) {
      return 50;
    }
    if (length === 13) {
      return 60;
    }
    if (length === 14) {
      return 70;
    }
    if (length === 15) {
      return 85;
    }
    if (length === 16) {
      return 100;
    }
  };

  const handleChangeLength = (e) => {
    setLength(e.target.valueAsNumber);
  };

  const getBackgroundSize = () => {
    return {
      backgroundSize: `${getPorcentage(length)}% 100%`,
    };
  };

  const selectedOptions = (e) => {
    const check = e.target.value;
    if (options.includes(check)) {
      const newArray = options.filter((option) => option != check);
      setOptions(newArray);
    } else {
      const newArray = [...options];
      newArray.push(e.target.value);
      setOptions(newArray);
    }
  };

  const selectedStrength = () => {
    if (options.length === 0) {
      setStrength("");
    }
    if (options.length === 1) {
      setStrength("LOW");
    }
    if (options.length === 2) {
      setStrength("MEDIUM-LOW");
    }
    if (options.length === 3) {
      setStrength("MEDIUM");
    }
    if (options.length === 4) {
      setStrength("HIGH");
    }
  };

  const copyToCliboard = () => {
    toast("Copied password", {
      duration: 1000,
      style: {
        background: "#24232A",
        color: "#fff",
        border: "2px solid #A5FFAF",
      },
      icon: <CheckIcon className="check_icon" />,
    });
    navigator.clipboard.writeText(password);
  };

  const generatePassword = () => {
    let characters = "";

    if (options.includes("uppercase")) {
      characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (options.includes("lowercase")) {
      characters += "abcdefghijklmnopqrstuvwxyz";
    }
    if (options.includes("numbers")) {
      characters += "0123456789";
    }
    if (options.includes("symbols")) {
      characters += "!`~@#$%^&*()_-+={}[];:',.<>?/";
    }

    let password = "";
    for (let i = 0; i < length; i++) {
      password += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }

    setPassword(password);
  };

  return (
    <div className="container">
      <h2 className="title">Password Generator</h2>
      <section className="password-generate">
        <div className="password">{password}</div>
        {password && (
          <CopyIcon className="copy_icon" onClick={copyToCliboard} />
        )}
      </section>
      <section className="card">
        <div className="card-character-length">
          <p>Character Length</p>
          <p className="card-character-number">{length}</p>
        </div>
        <input
          min={8}
          max={16}
          type="range"
          className="range"
          value={length}
          onChange={handleChangeLength}
          style={getBackgroundSize()}
        />
        <div className="checkbox-container">
          <input
            type="checkbox"
            id="checkbox-uppercase"
            onChange={selectedOptions}
            value="uppercase"
          />
          <label htmlFor="checkbox-uppercase">Include Uppercase Letters</label>
        </div>
        <div className="checkbox-container">
          <input
            type="checkbox"
            id="checkbox-lowercase"
            onChange={selectedOptions}
            value="lowercase"
          />
          <label htmlFor="checkbox-lowercase">Include Lowercase Letters</label>
        </div>
        <div className="checkbox-container">
          <input
            type="checkbox"
            id="checkbox-numbers"
            onChange={selectedOptions}
            value="numbers"
          />
          <label htmlFor="checkbox-numbers">Include Numbers</label>
        </div>
        <div className="checkbox-container">
          <input
            type="checkbox"
            id="checkbox-symbols"
            onChange={selectedOptions}
            value="symbols"
          />
          <label htmlFor="checkbox-symbols">Include Symbols</label>
        </div>
        <div className="card-strength">
          <div className="strength">STRENGTH</div>
          <div className="card-strength-icons">
            <div>{strength}</div>
            <span
              className={`strength-icon ${options.length >= 1 ? "active" : ""}`}
            ></span>
            <span
              className={`strength-icon ${options.length >= 2 ? "active" : ""}`}
            ></span>
            <span
              className={`strength-icon ${options.length >= 3 ? "active" : ""}`}
            ></span>
            <span
              className={`strength-icon ${
                options.length === 4 ? "active" : ""
              }`}
            ></span>
          </div>
        </div>
        <Toaster />
        <button
          disabled={options.length === 0 ? true : false}
          className="btn-generate"
          onClick={generatePassword}
        >
          <span> GENERATE </span>
          <ArrowIcon className="arrow_icon" />
        </button>
      </section>
    </div>
  );
}

export default App;
