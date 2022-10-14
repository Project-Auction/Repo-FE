import { useParams } from "react-router";
import "./ProfileUser.css";

import { NavbarProfile } from "../../components/profile";

const ProfileUser = (props) => {
  const userId = useParams().userId;

  return (
    <div className="profile__user-container">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <NavbarProfile />
          </div>
          <div className="col-9"></div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUser;
