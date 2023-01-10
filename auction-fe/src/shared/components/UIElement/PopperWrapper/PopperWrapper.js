import { memo } from "react";
import "./PopperWrapper.css";

function PopperWrapper(props) {
  return (
    <div className={`popper__wrapper ${props.className}`} style={props.style}>
      {props.children}
    </div>
  );
}

export default memo(PopperWrapper);
