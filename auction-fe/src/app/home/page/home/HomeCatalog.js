import { memo, useCallback, useState } from "react";

import Footer from "../../../../shared/components/Layouts/Footer";
import MainNavigation from "../../../../shared/components/UIElement/Navigation/MainNavigation";
import Pagination from "../../../../shared/components/UIElement/Pagination";
import usePaginate from "../../../../shared/hook/usePaginate";
import HomeSideLeft from "../../components/HomeSideLeft/HomeSideLeft";
import ProductList from "../../../product/components/ProductList";
import { DUMMY_PRODUCTS } from "./Home";

import "./HomeCatalog.css";

const HomeCatalog = () => {
  /* Define to paginate */
  const [currentPage, setCurrentPage] = useState(1);
  const [capacityPage, setCapacityPage] = useState(6);
  const { paginate } = usePaginate();
  const storage = paginate(DUMMY_PRODUCTS, currentPage, capacityPage);

  /* Handle redirect page */
  const handleRedirectPage = useCallback((pageNumber) => {
    setCurrentPage(pageNumber);
  }, []);

  return (
    <>
      <MainNavigation />
      <div className="home__catalog-container section">
        {/* Content */}
        <div className="row ml-0 mr-0">
          <div className="col-4">
            <HomeSideLeft className="home__catalog-side-left" />
          </div>
          <div className="col-8 pr-0">
            <div className="row">
              <ProductList
                items={storage}
                className="col-4 home__catalog-item"
              />
            </div>

            {/*Pagination */}
            <div className="mt-4">
              <Pagination
                capacityPage={capacityPage}
                totalData={DUMMY_PRODUCTS.length}
                currentPage={currentPage}
                onRedirect={handleRedirectPage}
              />
            </div>
            {/*Pagination */}
          </div>
        </div>
        {/* Content */}
      </div>
      <Footer />
    </>
  );
};

export default memo(HomeCatalog);
