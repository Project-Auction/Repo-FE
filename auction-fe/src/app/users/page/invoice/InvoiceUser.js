import { useParams } from "react-router-dom";
import DashboardUser from "../user-dashboard/DashboardUser";
import "./InvoiceUser.css";

const InvoiceUser = (props) => {
  const userId = useParams().userId;

  return (
    <>
      <DashboardUser currentPage="Invoice" userId={userId}>
        <div className="dashboard__right-area-container">
          <h3 className="dashboard__title-user__header">Invoices</h3>

          <div className="invoice__list-user-container"></div>
        </div>
      </DashboardUser>
    </>
  );
};

export default InvoiceUser;
