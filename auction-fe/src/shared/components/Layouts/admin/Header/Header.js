import { faBell } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { memo } from "react";
import "./Header.css";

const Header = (props) => {
  return (
    <div className="header__admin-container">
      <div className="left-area">
        <h3 className="title">Welcome, Tuấn</h3>
        <p className="sub-title">
          Here what's happening in your Account system today
        </p>
      </div>
      <div className="right-area">
        <div className="notification circle">
          <div className="ring">
            <FontAwesomeIcon icon={faBell} />
          </div>

          <span className="numbers__notify circle">2</span>
        </div>
      </div>
    </div>
  );
};

export default memo(Header);
