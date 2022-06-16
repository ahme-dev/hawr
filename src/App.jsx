import "./App.css";
import Day from "./components/Day";
import Button from "./components/Button";

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
        <Button img={"#"} click={() => {}} text="About"></Button>
        <Button img={"#"} click={() => {}} text="Location"></Button>
        <Button img={"#"} click={() => {}} text="Colour"></Button>
      </footer>
    </div>
  );
}

export default App;
