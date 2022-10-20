import { useParams } from "react-router-dom";
import InvoiceList from "../../components/invoice/InvoicesList";
import DashboardUser from "../user-dashboard/DashboardUser";
import "./InvoiceUser.css";

const InvoiceUser = (props) => {
  const userId = useParams().userId;

  return (
    <>
      <DashboardUser currentPage="Invoice">
        <InvoiceList />
      </DashboardUser>
    </>
  );
};

export default InvoiceUser;
