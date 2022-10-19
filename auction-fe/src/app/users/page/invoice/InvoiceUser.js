import DashboardUser from "../user-dashboard/DashboardUser";
import "./InvoiceUser.css";

const InvoiceUser = (props) => {
  return <DashboardUser currentPage="Invoice">{props.children}</DashboardUser>;
};

export default InvoiceUser;
