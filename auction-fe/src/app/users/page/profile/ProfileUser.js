import { useParams } from "react-router";
import "./ProfileUser.css";

import { NavbarProfile } from "../../components/profile";
import MainNavigation from "../../../../shared/components/UIElement/Navigation/MainNavigation";
import HeaderBreadcrumbs from "../../../../shared/components/UIElement/HeaderBreadcrumbs/HeaderBreadcrumbs";

const ProfileUser = (props) => {
  const userId = useParams().userId;

  return (
    <>
      <MainNavigation />

      <HeaderBreadcrumbs currentPage="Profile User" />

      <div className="profile__user-container section">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <NavbarProfile />
            </div>
            <div className="col-9"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileUser;
