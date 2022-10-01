import { useEffect } from "react";
import Footer from "../../../../shared/components/Layouts/Footer";
import MainNavigation from "../../../../shared/components/UIElement/Navigation/MainNavigation";
import HomeSideLeft from "../../components/HomeSideLeft/HomeSideLeft";
import ProductList from "../../components/ProductList";
import { DUMMY_PRODUCTS } from "./Home";

import "./HomeCatalog.css";

const HomeCatalog = () => {
  /* Scroll to top */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <MainNavigation />
      <div className="home__catalog-container section">
        {/* Content */}
        <div className="row ml-0 mr-0">
          <div className="col-4">
            <HomeSideLeft />
          </div>
          <div className="col-8 pr-0">
            <div className="row">
              <ProductList items={DUMMY_PRODUCTS} className="col-4" />
            </div>
          </div>
        </div>
        {/* Content */}
      </div>
      <Footer />
    </>
  );
};

export default HomeCatalog;
