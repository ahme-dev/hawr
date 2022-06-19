import React from "react";

import "./App.css";
import Day from "./components/Day";

import settings from "./images/settings.png";
import cloudy from "./images/clouds.png";
import icon from "./images/icon.png";
import apiCall from "./api";

function App() {
  let [weather, setWeather] = React.useState({
    first: {
      date: "Today",
      status: "Unknown",
      temprature: "?",
    },
    second: {
      date: "Tomorrow",
      status: "Unknown",
      temprature: "?",
    },
    third: {
      date: "Overmorrow",
      status: "Unknown",
      temprature: "?",
    },
  });

  let changeWeather = async () => {
    let fetched = await apiCall();

    setWeather(() => {
      return {
        first: {
          date: "Today",
          status: fetched["current"].condition.text,
          temprature: fetched["current"].temp_c,
        },
        second: {
          date: "Tomorrow",
          status: fetched["forecast"]["forecastday"][1]["day"].condition.text,
          temprature: fetched["forecast"]["forecastday"][1]["day"].avgtemp_c,
        },
        third: {
          date: "Overmorrow",
          status: fetched["forecast"]["forecastday"][2]["day"].condition.text,
          temprature: fetched["forecast"]["forecastday"][2]["day"].avgtemp_c,
        },
      };
    });
  };

  return (
    <div className="App">
      <header>
        <img src={icon} className="clickable"></img>
        <h1 className="clickable">Hawr</h1>
      </header>
      <main>
        <Day
          status={weather.first.status}
          temp={weather.first.temprature}
          date={weather.first.date}
          image={cloudy}
        ></Day>
        <Day
          status={weather.second.status}
          temp={weather.second.temprature}
          date={weather.second.date}
          image={cloudy}
        ></Day>
        <Day
          status={weather.third.status}
          temp={weather.third.temprature}
          date={weather.third.date}
          image={cloudy}
        ></Day>
      </main>
      <footer>
        <img src={settings} className="clickable"></img>
        <h1 onClick={changeWeather} className="clickable">
          Location
        </h1>
      </footer>
    </div>
  );
}

export default App;
