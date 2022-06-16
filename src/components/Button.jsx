import "./Button.css";

function Button(props) {
  return (
    <div onClick={props.click} className="Button">
      <img src={props.image}></img>
    </div>
  );
}

export default Button;
