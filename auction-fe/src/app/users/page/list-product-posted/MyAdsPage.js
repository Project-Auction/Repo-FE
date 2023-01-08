import DashboardUser from "../user-dashboard/DashboardUser";

const MyAdsPage = (props) => {
  return (
    <>
      <DashboardUser currentPage="History Posted">
        {props.children}
      </DashboardUser>
    </>
  );
};

export default MyAdsPage;
