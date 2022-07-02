import React from "react";

import "./App.css";
import Day from "./components/Day";
import Popup from "./components/Popup";
import { apiForecast, apiLocation } from "./api";
import translPhrase from "./transl";

import themeImg from "./images/theme.png";
import iconImg from "./images/icon.png";
import sourceImg from "./images/source.png";
import sunnyImg from "./images/sunny.png";
import noneImg from "./images/none.png";

function App() {
  const [popup, setPopup] = React.useState(false);

  let [location, setLocation] = React.useState("Slemani");
  let [locations, setLocations] = React.useState(["بە لاتینی بگەڕێ"]);

  let [theme, setTheme] = React.useState(() => {
    const saved = localStorage.getItem("themeLocal");
    const val = JSON.parse(saved);
    return val || 0;
  });

  let randomTheme = () => {
    while (true) {
      let randNum = Math.floor(Math.random() * 4);
      if (theme === randNum) continue;
      setTheme(() => randNum);
      return;
    }
  };

  React.useEffect(() => {
    localStorage.setItem("themeLocal", theme);
  }, [theme]);

  let [weather, setWeather] = React.useState(() => {
    const saved = localStorage.getItem("weatherLocal");
    const val = JSON.parse(saved);
    return (
      val || {
        first: {
          day: "ئەمڕۆ",
          date: "?",
          status: "نەزانراو",
          temprature: "?",
          image: noneImg,
        },
        second: {
          day: "سبەی",
          date: "?",
          status: "نەزانراو",
          temprature: "?",
          image: noneImg,
        },
        third: {
          day: "دووسبەی",
          date: "?",
          status: "نەزانراو",
          temprature: "?",
          image: noneImg,
        },
      }
    );
  });

  let changeWeather = async () => {
    let info = await apiForecast();

    if (info === false) return;

    setWeather(() => {
      return {
        first: {
          day: "ئەمڕۆ",
          date: info["forecast"]["forecastday"][0].date,
          status: translPhrase(
            info["forecast"]["forecastday"][0].day.condition.text
          ),
          temprature: info["forecast"]["forecastday"][0].day.avgtemp_c,
          image: sunnyImg,
        },
        second: {
          day: "سبەی",
          date: info["forecast"]["forecastday"][1].date,
          status: translPhrase(
            info["forecast"]["forecastday"][1].day.condition.text
          ),
          temprature: info["forecast"]["forecastday"][1].day.avgtemp_c,
          image: sunnyImg,
        },
        third: {
          day: "دووسبەی",
          date: info["forecast"]["forecastday"][2].date,
          status: translPhrase(
            info["forecast"]["forecastday"][2].day.condition.text
          ),
          temprature: info["forecast"]["forecastday"][2].day.avgtemp_c,
          image: sunnyImg,
        },
      };
    });
  };

  let getLocation = async (n) => {
    let info = await apiLocation(n);

    if (info === false) return;

    let responses = [];
    info.map((e) => {
      responses.push(e.name + " " + e.country);
    });

    setLocations(() => responses);
  };

  React.useEffect(() => {
    localStorage.setItem("weatherLocal", JSON.stringify(weather));
  }, [weather]);

  return (
    <div className="App">
      <header>
        <div className="clickable">
          <img src={iconImg}></img>
          <h1>هەور</h1>
        </div>
      </header>
      <main>
        <Day
          status={weather.first.status}
          temp={weather.first.temprature}
          day={weather.first.day}
          date={weather.first.date}
          image={weather.first.image}
          theme={theme}
        ></Day>
        <Day
          status={weather.second.status}
          temp={weather.second.temprature}
          day={weather.second.day}
          date={weather.second.date}
          image={weather.second.image}
          theme={theme}
        ></Day>
        <Day
          status={weather.third.status}
          temp={weather.third.temprature}
          day={weather.third.day}
          date={weather.third.date}
          image={weather.third.image}
          theme={theme}
        ></Day>
      </main>
      <footer>
        <h1
          onClick={() => {
            setPopup(() => true);
          }}
          className="clickable"
        >
          {translPhrase(location)}
        </h1>

        <div>
          <img
            onClick={() => {
              randomTheme();
            }}
            src={themeImg}
            className="clickable"
          ></img>

          <img
            src={sourceImg}
            onClick={() => {
              window.open("https://github.com/ahmedkabd/hawr");
            }}
            className="clickable"
          ></img>
        </div>
      </footer>
      <Popup
        on={popup}
        items={locations}
        search={(n) => getLocation(n)}
        select={(n) => alert(n)}
        close={() => setPopup(() => false)}
        theme={theme}
      ></Popup>
    </div>
  );
}

export default App;
