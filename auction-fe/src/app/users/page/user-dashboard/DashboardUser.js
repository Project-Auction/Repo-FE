import Footer from "../../../../shared/components/Layouts/Footer";
import HeaderBreadcrumbs from "../../../../shared/components/UIElement/HeaderBreadcrumbs";
import MainNavigation from "../../../../shared/components/UIElement/Navigation/MainNavigation";
import NavbarUser from "../../components/Navbar";

const DashboardUser = (props) => {
  return (
    <>
      <MainNavigation />

      <HeaderBreadcrumbs currentPage={props.currentPage} />

      <div className="profile__user-container section">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <NavbarUser />
            </div>
            <div className="col-9">{props.children}</div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DashboardUser;
