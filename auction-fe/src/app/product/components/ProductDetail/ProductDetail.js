import { useParams } from "react-router-dom";

import "./ProductDetail.css";
import SwiperSlider from "../../../../shared/components/UIElement/SwiperSlider";
import { productImages } from "../../../../assets";
import ProductDetailInfo from "../ProductDetailInfo";

const ProductDetail = (props) => {
  const productId = useParams().productId;

  return (
    <div className="product__detail-container section">
      <div className="container">
        <div className="row">
          <div className="col-7">
            <div className="product__detail-images">
              <SwiperSlider images={productImages} />
            </div>
          </div>
          <div className="col-5">
            <div className="product__detail-info-auction">
              <ProductDetailInfo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
