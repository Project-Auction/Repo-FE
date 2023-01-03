import DashboardUser from "../user-dashboard/DashboardUser";

const ListProductPosted = (props) => {
  return (
    <>
      <DashboardUser userId={1} currentPage="History Posted">
        {props.children}
      </DashboardUser>
    </>
  );
};

export default ListProductPosted;
