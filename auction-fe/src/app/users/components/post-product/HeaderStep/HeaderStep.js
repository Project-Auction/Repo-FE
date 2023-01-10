import { memo } from "react";
import "./HeaderStep.css";

const HeaderStep = ({
  numberStep,
  titleStep = "Step",
  subTitleStep,
  isActive,
}) => {
  return (
    <div className={`header__step-form-container ${isActive && "active"}`}>
      <span className="header__step-form-numbers circle">{numberStep}</span>

      <div className="title">
        <h3 className="header__step-form-title">{titleStep}</h3>
        <span className="header__step-form-sub">{subTitleStep}</span>
      </div>
    </div>
  );
};

export default memo(HeaderStep);
