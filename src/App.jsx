import "./App.css";
import Day from "./components/Day";
import Button from "./components/Button";
import settingsImg from "./images/settings.png";

function App() {
  return (
    <div className="App">
      <header>
        <Day></Day>
      </header>
      <main>
        <Day></Day>
        <Day></Day>
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
