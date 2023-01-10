import { Link } from "react-router-dom";

import "./Card.css";
import ButtonField from "../../FormElement/Button";
import useCountDown from "../../../hook/useCountDown";
import { formatCurrency } from "../../../format/format-input";
import { memo } from "react";

/*
  ? Show on Home to "SUBMIT A BID" 
*/

function CardProduct(props) {
  const {
    className,
    endDate,
    contentClass,
    imageClass,
    image,
    name,
    headerClass,
    headerTitle,
    codeProduct,
    initialPrice,
    currentPrice,
  } = props;

  /* Convert to Date */
  const TIME_IN_SYSTEM = new Date(endDate).getTime();

  const [days, hours, minutes, seconds] = useCountDown(TIME_IN_SYSTEM);

  if (days + hours + minutes + seconds > 0) {
    return (
      <div className={`card__wrapper card__product ${className}`}>
        <div className={`card__content ${contentClass}`}>
          <div className="card__img-group">
            <img
              className={`card__content-img ${imageClass}`}
              src={image}
              alt={name}
            />

            {headerTitle && (
              <div className={`card__title-status ${headerClass}`}>
                <h2>{headerTitle}</h2>
              </div>
            )}

            <ButtonField className="card__btn-bid" primary>
              SUBMIT A BID
            </ButtonField>
          </div>

          <Link to={`${codeProduct}/detail`} className="info">
            <span className="category">Vehicles</span>

            <h3 className="product__name">BMW 5 Series GT Car</h3>

            <div className="range__money">
              <p className="price">
                Start Price:
                <span>{formatCurrency(initialPrice)}</span>
              </p>

              <p className="price">
                Current Price:
                <span>{formatCurrency(currentPrice)}</span>
              </p>
            </div>
          </Link>

          <div className="card__content-footer">
            <p className="remaining__time-group">
              {days}
              <span>Days</span>
            </p>

            <span className="dots">:</span>

            <p className="remaining__time-group">
              {hours}
              <span>Hours</span>
            </p>

            <span className="dots">:</span>

            <p className="remaining__time-group">
              {minutes}
              <span>Minutes</span>
            </p>

            <span className="dots">:</span>

            <p className="remaining__time-group">
              {seconds}
              <span>Seconds</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default memo(CardProduct);
