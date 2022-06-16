import "./Button.css";

function Button(props) {
  return (
    <div onClick={props.click} className="Button">
      <h3>{props.text}</h3>
    </div>
  );
}

export default Button;
