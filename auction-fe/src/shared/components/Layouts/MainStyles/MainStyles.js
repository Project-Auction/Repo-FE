import { memo } from "react";
import "./MainStyles.css";

function MainStyles(props) {
  return <div className="main-wrapper">{props.children}</div>;
}

export default memo(MainStyles);
