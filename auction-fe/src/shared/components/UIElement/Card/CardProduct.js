import { Link } from "react-router-dom";

import "./Card.css";
import ButtonField from "../../FormElement/Button";
import useCountDown from "../../../hook/useCountDown";

/*
  ? Show on Home to "SUBMIT A BID" 
*/

function CardProduct(props) {
  /* Convert to Date */
  const TIME_IN_SYSTEM = new Date(props.endDate).getTime();

  const [days, hours, minutes, seconds] = useCountDown(TIME_IN_SYSTEM);

  return (
    <div className={`card__wrapper card__product ${props.className}`}>
      <div className={`card__content ${props.contentClass}`}>
        <div className="card__img-group">
          <img
            className={`card__content-img ${props.imageClass}`}
            src={props.image}
            alt={props.name}
          />

          {props.headerTitle && (
            <div className={`card__title-status ${props.headerClass}`}>
              <h2>{props.headerTitle}</h2>
            </div>
          )}

          <ButtonField className="card__btn-bid" primary>
            SUBMIT A BID
          </ButtonField>
        </div>

        <Link to={`${props.codeProduct}/detail`} className="info">
          <span className="category">Vehicles</span>

          <h3 className="product__name">BMW 5 Series GT Car</h3>

          <div className="range__money">
            <p className="price">
              Start Price:
              <span>$550.00</span>
            </p>

            <p className="price">
              Current Price:
              <span>$550.00</span>
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

export default CardProduct;
