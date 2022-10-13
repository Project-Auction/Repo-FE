import { useParams } from "react-router-dom";

import "./ProductDetail.css";
import { productImages } from "../../../../assets";
import Footer from "../../../../shared/components/Layouts/Footer";
import MainNavigation from "../../../../shared/components/UIElement/Navigation/MainNavigation";
import SwiperSlider from "../../../../shared/components/UIElement/SwiperSlider";
import ProductDetailInfo from "../ProductDetailInfo";
import HeaderBreadcrumbs from "../../../../shared/components/UIElement/HeaderBreadcrumbs";

const ProductDetail = (props) => {
  const productId = useParams().productId;

  return (
    <>
      <MainNavigation />

      <HeaderBreadcrumbs />

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

      <Footer />
    </>
  );
};

export default ProductDetail;
