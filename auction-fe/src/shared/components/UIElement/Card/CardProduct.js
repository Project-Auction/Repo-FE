import { Link } from "react-router-dom";
import ButtonField from "../../FormElement/Button";

import "./Card.css";

/*
  ? Show on Home to "SUBMIT A BID" 
*/

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
            src={props.image}
            alt={props.name}
          />

          <ButtonField className="card__btn-bid" primary>
            SUBMIT A BID
          </ButtonField>
        </div>

        <Link to={`${props.codeProduct}/detail`} className="info">
          <h3 className="name">{props.name}</h3>
          <div className="detail__price">
            {props.initialPrice && (
              <div className="price">
                <span>Start Price</span>
                <p>{props.initialPrice}</p>
              </div>
            )}

            {props.currentPrice && (
              <div className="price">
                <span>Current Price</span>
                <p>{props.currentPrice}</p>
              </div>
            )}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default CardProduct;
