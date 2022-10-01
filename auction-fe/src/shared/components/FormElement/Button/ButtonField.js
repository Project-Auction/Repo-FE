import { Link } from "react-router-dom";
import "./Button.css";

function ButtonFiled(props) {
  const classes = `button button--${props.size || "default"} 
    ${props.danger && "button--danger"}
    ${props.primary && "button--primary"}
    ${props.className}
  ${props.fullWidth && "button--fullWidth"}
  `;

  if (props.to) {
    return (
      <Link className={classes} to={props.to}>
        {props.children}
      </Link>
    );
  }

  if (props.href) {
    return (
      <a className={classes} href={props.href}>
        {props.children}
      </a>
    );
  }

  return (
    <button
      className={classes}
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
}

export default ButtonFiled;
