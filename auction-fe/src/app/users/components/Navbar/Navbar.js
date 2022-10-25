import "./Navbar.css";

import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faHouse,
  faPlusCircle,
  faReceipt,
} from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-regular-svg-icons";

import { useContext } from "react";
import { AuthContext } from "../../../../shared/context/auth-context";
import ButtonFiled from "../../../../shared/components/FormElement/Button";
import AccountItem from "../../../../shared/components/UIElement/AccountItem";
import CardField from "../../../../shared/components/UIElement/Card/CardField";

const Navbar = () => {
  const authContext = useContext(AuthContext);

  return (
    <div className="navbar__profile-user-container">
      <CardField className="navbar__profile-user-wrapper">
        <div className="navbar__profile-user__header">
          <AccountItem
            src=""
            userName={authContext.username}
            email={authContext.email}
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
              My Products
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
            <NavLink end to={`/${3}/post-product`}>
              <FontAwesomeIcon icon={faPlusCircle} className="icon" />
              Post Product
              <div className="separate-hover"></div>
            </NavLink>
          </li>

          <li className="navbar__profile-user__item">
            <ButtonFiled danger onClick={authContext.logout}>
              Logout
            </ButtonFiled>
          </li>
        </ul>
      </CardField>
    </div>
  );
};

export default Navbar;
