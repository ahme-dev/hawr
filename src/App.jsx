import "./App.css";
import Day from "./components/Day";
import Button from "./components/Button";

import settingsImg from "./images/settings.png";
import cloudy from "./images/clouds.png";

function App() {
  return (
    <div className="App">
      <header>
        <Day status="Sunny" temp="20*" date="Today 28/6" image={cloudy}></Day>
      </header>
      <main>
        <Day status="Sunny" temp="20*" date="Today 28/6" image={cloudy}></Day>
        <Day status="Sunny" temp="20*" date="Today 28/6" image={cloudy}></Day>
      </main>
      <footer>
        <Button image={settingsImg} click={() => {}}></Button>
        <Button image={settingsImg} click={() => {}}></Button>
        <Button image={settingsImg} click={() => {}}></Button>
      </footer>
    </div>
  );
}

export default App;
