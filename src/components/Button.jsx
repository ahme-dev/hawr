import "./Button.css";

function Button(props) {
  return (
    <div onClick={props.click} className="Button">
      {props.image && <img src={props.image}></img>}
      {props.text && <h3>{props.text}</h3>}
    </div>
  );
}

export default Button;
