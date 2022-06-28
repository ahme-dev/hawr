import { useState } from "react";
import "./Popup.css";

let themes = ["blue", "red", "green", "yellow"];

function Popup(props) {
  const [input, setInput] = useState("");

  return props.on ? (
    <div className="Popup-outer">
      <div className="Popup">
        <div className={`Popup-content theme-${themes[props.theme]}`}>
          <div className="Popup-search">
            <input
              onKeyPress={(e) => {
                e.key === "Enter" ? props.search(input) : false;
              }}
              type="text"
              value={input}
              onInput={(e) => setInput(e.target.value)}
            ></input>
          </div>
          <div className="Popup-result">
            {props.items.map((item) => (
              <h3
                onClick={() => {
                  props.select(item);
                }}
              >
                {item}
              </h3>
            ))}
          </div>
        </div>
        <div className="Popup-close">
          <button
            onClick={props.close}
            className={`Popup-content theme-${themes[props.theme]}`}
          ></button>
        </div>
      </div>
    </div>
  ) : (
    false
  );
}

export default Popup;
