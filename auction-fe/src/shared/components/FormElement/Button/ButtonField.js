import { memo } from "react";
import { Link } from "react-router-dom";
import "./Button.css";

function ButtonField(props) {
  const classes = `button button--${props.size || "default"} 
    ${props.danger && "button--danger"}
    ${props.primary && "button--primary"}
    ${props.dark && "button--dark"}
    ${props.className}
    ${props.fullWidth && "button--fullWidth"}
    ${props.green && "button--green"}
    ${props.border && "button--border"}
    ${props.borderDark && "button-border--dark"}
    ${props.none && "button--none"}
    ${props.disabled && "button--disabled"} 
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

export default memo(ButtonField);
