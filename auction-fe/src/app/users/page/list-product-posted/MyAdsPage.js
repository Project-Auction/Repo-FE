import DashboardUser from "../user-dashboard/DashboardUser";

const MyAdsPage = (props) => {
  return (
    <>
      <DashboardUser userId={1} currentPage="History Posted">
        {props.children}
      </DashboardUser>
    </>
  );
};

export default MyAdsPage;
