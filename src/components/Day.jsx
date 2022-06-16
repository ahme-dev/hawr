import "./Day.css";

function Day(props) {
  return (
    <div className="Day">
      <img className="Day-img" src={props.image}></img>
      <div className="Day-text">
        <h1>{props.status}</h1>
        <h3>{props.temp}</h3>
        <p>{props.date}</p>
      </div>
    </div>
  );
}

export default Day;
