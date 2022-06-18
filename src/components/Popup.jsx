import "./Popup.css";

import settings from "../images/settings.png";

function Popup(props) {
  return (
    <div className="Popup">
      <div className="Popup-inner">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={() => {}} className="Popup-button">
          <img src={settings} />
        </button>
      </div>
    </div>
  );
}

export default Popup;
