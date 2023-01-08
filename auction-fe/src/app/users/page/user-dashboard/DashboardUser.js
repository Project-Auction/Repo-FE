import { memo, useContext } from "react";
import Footer from "../../../../shared/components/Layouts/Footer";
import HeaderBreadcrumbs from "../../../../shared/components/UIElement/HeaderBreadcrumbs";
import MainNavigation from "../../../../shared/components/UIElement/Navigation/MainNavigation";
import { AuthContext } from "../../../../shared/context/auth-context";
import NavbarUser from "../../components/Navbar";

const DashboardUser = ({ currentPage, children, prevPageHeader = [] }) => {
  const authContext = useContext(AuthContext);

  return (
    <>
      <MainNavigation />

      <HeaderBreadcrumbs currentPage={currentPage} prevPage={prevPageHeader} />

      <div className="profile__user-container section">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <NavbarUser userId={authContext.accountId} />
            </div>
            <div className="col-9">{children}</div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default memo(DashboardUser);
