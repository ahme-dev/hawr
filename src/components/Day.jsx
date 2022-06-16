import "./Day.css";
import cloudy from "../images/clouds.png";

function Day() {
  return (
    <div className="Day">
      <img className="Day-img" src={cloudy}></img>
      <div className="Day-text">
        <h1>Cloudy</h1>
        <h3>28*</h3>
        <p>Sunday 28/6</p>
      </div>
    </div>
  );
}

export default Day;
