import { Link } from "react-router-dom";
import ButtonField from "../../FormElement/Button";

import "./Card.css";

function CardProduct(props) {
  return (
    <div className={`card__wrapper card__product ${props.className}`}>
      {props.headerTitle && (
        <div className={`card__header ${props.headerClass}`}>
          <h2 className="card__header-title">{props.headerTitle}</h2>
        </div>
      )}

      <div className={`card__content ${props.contentClass}`}>
        <div className="card__img-group">
          <img
            className={`card__content-img ${props.imageClass}`}
            src={props.src}
            alt={props.name}
          />

          <ButtonField className="card__btn-bid" primary>
            SUBMIT A BID
          </ButtonField>
        </div>

        <div className="info">
          <Link className="name">{props.name}</Link>
          <div className="detail__price">
            {props.startPrice && (
              <div className="price">
                <span>Start Price</span>
                <p>{props.startPrice}</p>
              </div>
            )}

            {props.currentPrice && (
              <div className="price">
                <span>Current Price</span>
                <p>{props.currentPrice}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardProduct;
