import "./Navbar.css";

import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faHouse, faReceipt } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-regular-svg-icons";

import ButtonFiled from "../../../../../shared/components/FormElement/Button";
import AccountItem from "../../../../../shared/components/UIElement/AccountItem";
import CardField from "../../../../../shared/components/UIElement/Card/CardField";

const Navbar = () => {
  return (
    <div className="navbar__profile-user-container">
      <CardField className="navbar__profile-user-wrapper">
        <div className="navbar__profile-user__header">
          <AccountItem
            src="https://demo.graygrids.com/themes/classigrids-demo/assets/images/dashboard/user-image.jpg"
            userName="Steve Aldridge"
            email="@username"
          />
        </div>

        <ul className="navbar__profile-user__body">
          <li className="navbar__profile-user__item">
            <NavLink end to={`/${3}/profile`}>
              <FontAwesomeIcon icon={faHouse} className="icon" />
              Dashboard
              <div className="separate-hover"></div>
            </NavLink>
          </li>

          <li className="navbar__profile-user__item">
            <NavLink end to={`/${3}/edit`}>
              <FontAwesomeIcon icon={faEdit} className="icon" />
              Edit Profile
              <div className="separate-hover"></div>
            </NavLink>
          </li>

          <li className="navbar__profile-user__item">
            <NavLink end to={`/${3}/myAds`}>
              <FontAwesomeIcon icon={faBolt} className="icon" />
              Dashboard
              <div className="separate-hover"></div>
            </NavLink>
          </li>

          <li className="navbar__profile-user__item">
            <NavLink end to={`/${3}/invoices`}>
              <FontAwesomeIcon icon={faReceipt} className="icon" />
              Invoice
              <div className="separate-hover"></div>
            </NavLink>
          </li>

          <li className="navbar__profile-user__item">
            <ButtonFiled danger>Logout</ButtonFiled>
          </li>
        </ul>
      </CardField>
    </div>
  );
};

export default Navbar;
