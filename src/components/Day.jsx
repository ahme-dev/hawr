import { useState } from "react";
import "./Day.css";

let themes = ["blue", "red", "green", "yellow"];

function Day(props) {
  return (
    <div className={`Day clickable theme-${themes[props.theme]}`}>
      <img className="Day-img" src={props.image}></img>
      <div className="Day-text">
        <h1>{props.status}</h1>
        <h3>{props.temp}</h3>
        <h2>{props.day}</h2>
        <p>{props.date.slice(5, 10)}</p>
      </div>
    </div>
  );
}

export default Day;
