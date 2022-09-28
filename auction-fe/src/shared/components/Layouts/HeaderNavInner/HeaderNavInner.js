import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

import "./HeaderNavInner.css";
import InputField from "../../FormElement/Input";
import ButtonFiled from "../../FormElement/Button";

function HeaderNavInner() {
  return (
    <div className="header__inner-wrapper">
      <div className="header__inner-logo">
        <img
          src="https://livedemo00.template-help.com/wt_64509/images/logo-default-173x55.png"
          alt="Logo"
        />
      </div>

      <div className="header__inner-search">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
        <InputField
          element="input"
          inputClass="header__inner-search-input"
          placeholder="Tìm kiếm..."
          type="text"
        />
        <ButtonFiled primary className="header__inner-search-button">
          SEARCH
        </ButtonFiled>
      </div>

      <div className="header__inner-cart circle">
        <FontAwesomeIcon icon={faCartShopping} className="icon" />

        <div className="quantity-bought circle">2</div>
      </div>
    </div>
  );
}

export default HeaderNavInner;
