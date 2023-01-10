import "./LoadingSpinner.css";
import ReactDOM from "react-dom";
import { memo } from "react";

const LoadingSpinner = (props) => {
  const content = (
    <div className={`${props.asOverlay && "loading-spinner__overlay"}`}>
      <div className="lds-dual-ring"></div>
    </div>
  );

  return ReactDOM.createPortal(
    content,
    document.getElementById("loading-spinner-hook")
  );
};

export default memo(LoadingSpinner);
