import { memo, useContext } from "react";
import { AuthContext } from "../../../../shared/context/auth-context";
import DashboardUser from "../user-dashboard/DashboardUser";

const ProductPostedDetailPage = (props) => {
  const authContext = useContext(AuthContext);

  return (
    <>
      <DashboardUser
        currentPage="Detail Product Posted"
        prevPageHeader={[
          {
            name: "Home",
            redirectPath: `/`,
          },
          {
            name: "List Product Posted",
            redirectPath: `/${authContext.accountId}/myAds`,
          },
        ]}
      >
        {props.children}
      </DashboardUser>
    </>
  );
};

export default memo(ProductPostedDetailPage);
