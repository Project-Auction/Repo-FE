import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

import { useForm } from "react-hook-form";

import "./HeaderNavInner.css";
import ButtonFiled from "../../FormElement/Button";
import PopperWrapper from "../../UIElement/PopperWrapper";
import SearchInput from "../../FormElement/SearchInput";

function HeaderNavInner() {
  const methods = useForm();

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
        <SearchInput
          control={methods.control}
          name="searchInput"
          inputClass="header__inner-search-input"
          placeholder="Search..."
        />
        <ButtonFiled primary className="header__inner-search-button">
          SEARCH
        </ButtonFiled>
      </div>

      <div className="header__inner-cart circle">
        <FontAwesomeIcon icon={faCartShopping} className="icon" />

        <div className="quantity-bought circle">2</div>

        {/* Info cart */}
        <div className="info__cart-container">
          <PopperWrapper className="info__cart-wrapper">
            {/* No cart */}
            <div className="no-cart">
              <img
                src="https://raw.githubusercontent.com/nguyenhoanganhtuan1206/SE397/main/se397/src/main/resources/static/assets/img/product/no_cart.png"
                alt="No Cart"
              />

              <p className="message">No Product Available</p>
            </div>
            {/* No cart */}

            {/* Has cart */}
            {/* <div className="info__cart-header">
              <div class="quantity">
                <span>3 Items</span>
              </div>

              <span>View Cart</span>
            </div>

            <ul className="info__cart-body">
              <li className="info__cart-body__item">
                <div className="img">
                  <img
                    src="https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
                    alt="Product"
                  />
                </div>

                <div className="info__cart-body__item-detail">
                  <div className="header d-flex justify-content-between">
                    <h3 className="name">Macbook Pro</h3>

                    <FontAwesomeIcon
                      icon={faXmark}
                      className="close-icon circle"
                    />
                  </div>

                  <span className="price">1 x 300.000 VND</span>
                </div>
              </li>

              <li className="info__cart-body__item">
                <div className="img">
                  <img
                    src="https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
                    alt="Product"
                  />
                </div>

                <div className="info__cart-body__item-detail">
                  <div className="header d-flex justify-content-between">
                    <h3 className="name">Macbook Pro</h3>

                    <FontAwesomeIcon
                      icon={faXmark}
                      className="close-icon circle"
                    />
                  </div>

                  <span className="price">1 x 300.000 VND</span>
                </div>
              </li>
            </ul>

            <div className="info__cart-footer">
              <div className="total-price">
                <span>Total</span>
                <p>120.000 VND</p>
              </div>

              <ButtonFiled primary fullWidth className="checkout">
                Checkout
              </ButtonFiled>
            </div> */}
            {/* Has cart */}
          </PopperWrapper>
        </div>
        {/* Info cart */}
      </div>
    </div>
  );
}

export default HeaderNavInner;
