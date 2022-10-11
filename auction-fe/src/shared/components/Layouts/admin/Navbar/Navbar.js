import { faComments } from "@fortawesome/free-regular-svg-icons";
import {
  faChartLine,
  faHouse,
  faRightLeft,
  faTableList,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = (props) => {
  return (
    <nav className="navbar__admin-container">
      <div className="header">
        <h3 className="title">
          DTU Auction
          <span>Dashboard</span>
        </h3>
      </div>
      <ul className="navbar__admin-list">
        <li className="navbar__admin-item">
          <NavLink to="/admin" end>
            <FontAwesomeIcon icon={faHouse} className="icon" />
            Overview
            <div className="separate-hover"></div>
          </NavLink>
        </li>
        <li className="navbar__admin-item">
          <NavLink to="/admin/transition">
            <FontAwesomeIcon icon={faRightLeft} className="icon" />
            Trade Management
            <div className="separate-hover"></div>
          </NavLink>
        </li>
        <li className="navbar__admin-item">
          <NavLink to="/admin/statistic">
            <FontAwesomeIcon icon={faChartLine} className="icon" />
            Products Statistic
            <div className="separate-hover"></div>
          </NavLink>
        </li>

        <li className="navbar__admin-item">
          <NavLink to="/admin/products/list">
            <FontAwesomeIcon icon={faTableList} className="icon" />
            List Products
            <div className="separate-hover"></div>
          </NavLink>
        </li>

        <li className="navbar__admin-item">
          <NavLink to="/admin/consultant">
            <FontAwesomeIcon icon={faComments} className="icon" />
            Consultant
            <div className="separate-hover"></div>
          </NavLink>
        </li>

        <li className="navbar__admin-item">
          <NavLink to="/admin/members">
            <FontAwesomeIcon icon={faUsers} className="icon" />
            Member Management
            <div className="separate-hover"></div>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
