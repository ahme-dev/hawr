import "./Popup.css";

import settings from "../images/settings.png";

function Popup(props) {
  return (
    <div className={"Popup" + " " + props.visibility}>
      <div className="Popup-inner">
        <h1 className="Popup-title">{props.title}</h1>
        <div className="Popup-content">{props.content}</div>
        <button onClick={props.click} className="Popup-close">
          <img src={settings} />
        </button>
      </div>
    </div>
  );
}

export default Popup;
