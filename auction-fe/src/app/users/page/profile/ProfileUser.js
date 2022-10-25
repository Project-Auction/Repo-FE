import { useParams } from "react-router";
import "./ProfileUser.css";

import DashboardUser from "../user-dashboard/DashboardUser";

const ProfileUser = (props) => {
  const userId = useParams().userId;

  return (
    <>
      <DashboardUser currentPage="Profile User" userId={userId}>
        {props.children}
      </DashboardUser>
    </>
  );
};

export default ProfileUser;
