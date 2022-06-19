import React from "react";

import "./App.css";
import Day from "./components/Day";
import apiCall from "./api";

import themeImg from "./images/theme.png";
import iconImg from "./images/icon.png";
import sourceImg from "./images/source.png";
import noneImg from "./images/none.png";

function App() {
  let [weather, setWeather] = React.useState({
    first: {
      date: "ئەمڕۆ",
      status: "Unknown",
      temprature: "?",
      image: noneImg,
    },
    second: {
      date: "سبەی",
      status: "Unknown",
      temprature: "?",
      image: noneImg,
    },
    third: {
      date: "دووسبەی",
      status: "Unknown",
      temprature: "?",
      image: noneImg,
    },
  });

  let changeWeather = async () => {
    let fetched = await apiCall();

    setWeather(() => {
      return {
        first: {
          date: "ئەمڕۆ",
          status: fetched["current"].condition.text,
          temprature: fetched["current"].temp_c,
        },
        second: {
          date: "سبەی",
          status: fetched["forecast"]["forecastday"][1]["day"].condition.text,
          temprature: fetched["forecast"]["forecastday"][1]["day"].avgtemp_c,
        },
        third: {
          date: "دووسبەی",
          status: fetched["forecast"]["forecastday"][2]["day"].condition.text,
          temprature: fetched["forecast"]["forecastday"][2]["day"].avgtemp_c,
        },
      };
    });
  };

  return (
    <div className="App">
      <header>
        <div className="clickable">
          <h1>هەور</h1>
          <img src={iconImg}></img>
        </div>
      </header>
      <main>
        <Day
          status={weather.first.status}
          temp={weather.first.temprature}
          date={weather.first.date}
          image={weather.first.image}
        ></Day>
        <Day
          status={weather.second.status}
          temp={weather.second.temprature}
          date={weather.second.date}
          image={weather.first.image}
        ></Day>
        <Day
          status={weather.third.status}
          temp={weather.third.temprature}
          date={weather.third.date}
          image={weather.first.image}
        ></Day>
      </main>
      <footer>
        <div>
          <img src={sourceImg} className="clickable"></img>
          <img src={themeImg} className="clickable"></img>
        </div>
        <h1 onClick={changeWeather} className="clickable">
          شوێن
        </h1>
      </footer>
    </div>
  );
}

export default App;
