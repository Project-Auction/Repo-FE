import { Link } from "react-router-dom";
import "./ProductItem.css";

const ProductItem = (props) => {
  return (
    <div className="product__item">
      <div className="product__item-img">
        <img src={props.image} alt={props.name} />
      </div>

      <div className="product__item-info">
        <Link to={props.to} className="name">
          {props.name}
        </Link>

        <p className="price">$350</p>
      </div>
    </div>
  );
};

export default ProductItem;
