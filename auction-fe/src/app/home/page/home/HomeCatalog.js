import Footer from "../../../../shared/components/Layouts/Footer";
import MainNavigation from "../../../../shared/components/UIElement/Navigation/MainNavigation";
import HomeSideLeft from "../../components/HomeSideLeft/HomeSideLeft";

import "./HomeCatalog.css";

const HomeCatalog = () => {
  return (
    <>
      <MainNavigation />
      <div className="home__catalog-container section">
        {/* Content */}
        <div className="row ml-0 mr-0">
          <div className="col-4">
            <HomeSideLeft />
          </div>
          <div className="col-8 pr-0"></div>
        </div>
        {/* Content */}
      </div>
      <Footer />
    </>
  );
};

export default HomeCatalog;
