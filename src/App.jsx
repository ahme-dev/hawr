import React from "react";

import "./App.css";
import Day from "./components/Day";

import settingsImg from "./images/settings.png";
import cloudyImg from "./images/clouds.png";
import iconImg from "./images/icon.png";

function App() {
  return (
    <div className="App">
      <header>
        <img src={iconImg} className="clickable"></img>
        <h1 className="clickable">Hawr</h1>
      </header>
      <main>
        <Day
          status="Sunny"
          temp="20*"
          date="Today 28/6"
          image={cloudyImg}
        ></Day>
        <Day
          status="Sunny"
          temp="20*"
          date="Today 28/6"
          image={cloudyImg}
        ></Day>
        <Day
          status="Sunny"
          temp="20*"
          date="Today 28/6"
          image={cloudyImg}
        ></Day>
      </main>
      <footer>
        <img src={settingsImg} className="clickable"></img>
        <h1 className="clickable">Location</h1>
      </footer>
    </div>
  );
}

export default App;
