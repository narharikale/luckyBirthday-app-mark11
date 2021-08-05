import { useState } from "react";
import "./styles.css";
import happy from "/src/images/congo.gif";
import lose from "/src/images/lose.gif";

let dateInput = "";
let luckyNoInput = 0;

const happyImg = (
  <img alt="happyImage" src={happy} height="100px" width="60%" />
);
const loseImg = <img alt="happyImage" src={lose} height="100px" width="60%" />;

export default function App() {
  const [result, setresult] = useState(["output will appear here", ""]);

  function onCheckHandler() {
    const dateArray = dateInput.split("-");
    let sumofdates = 0;

    dateArray.map((string) => {
      for (let i = 0; i < string.length; i++) {
        sumofdates = sumofdates + Number(string[i]);
      }
    });

    if (luckyNoInput > 0) {
      if (sumofdates % luckyNoInput === 0) {
        setresult(["yes you are lucky person 🎉", happyImg]);
      } else {
        setresult(["ohhh you have to work hard to become lucky 😑", loseImg]);
      }
    } else {
      setresult(["enter valid lucky no", ""]);
    }
  }

  return (
    <div className="App">
      <div className="notice" style={{ color: "white" }}>
        <span style={{ color: "red" }}>privacy notice!! </span>
        we are not storing your data{" "}
        <span role="img" aria-labelledby="crossIcon">
          🙈
        </span>
      </div>
      <h1 style={{ margin: "1rem" }}>is your birthdate lucky ?&#129395;</h1>

      <label>select your birth date : </label>
      <input
        type="date"
        onChange={(e) => {
          dateInput = e.target.value;
        }}
      />
      <label>enter your lucky no: </label>

      <input
        type="number"
        onChange={(e) => {
          luckyNoInput = e.target.value;
        }}
      />

      <button onClick={onCheckHandler}>Check</button>
      <div style={{ margin: "2rem" }} className="output">
        {result[0]}
        <div style={{ margin: "1rem" }}>{result[1]}</div>
      </div>
      <footer>
        <div className="GitDiv">
          <a className="link" href="https://github.com/narharikale">
            <i class="lni lni-github-original social-links"></i>
          </a>

          <a
            className="link"
            href="https://in.linkedin.com/in/narhari-kale-5571a2191"
          >
            <i class="lni lni-linkedin-original social-links"></i>
          </a>

          <a className="link" href="https://twitter.com/NarhariKale4">
            <i class="lni lni-twitter-original social-links"></i>
          </a>
        </div>
      </footer>
    </div>
  );
}
