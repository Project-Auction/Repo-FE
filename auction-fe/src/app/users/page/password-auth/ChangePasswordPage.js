import { useParams } from "react-router";
import "./ChangePasswordPage.css";

import DashboardUser from "../user-dashboard/DashboardUser";

const ChangePasswordPage = (props) => {
  const userId = useParams().userId;

  return (
    <>
      <DashboardUser currentPage="Update Password" userId={userId}>
        {props.children}
      </DashboardUser>
    </>
  );
};

export default ChangePasswordPage;
