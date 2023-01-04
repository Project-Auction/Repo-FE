import ListProductPosted from "../../page/list-product-posted/ListProductPosted";

import "./ProductPostedDetail.css";
import "../../components/MainUserStyles.css";
import Table from "../../../../shared/components/UIElement/Table/Table";
import { DUMMY_TRANSACTIONS_PRODUCTS } from "../../../../dummy_data/DummyData";
import { createContext } from "react";

/* Set header grid*/
const columns = [
  { key: "date", label: "Date" },
  { key: "orderId", label: "Order Id" },
  { key: "productName", label: "Product Name" },
  { key: "userRegistration", label: "User Registration" },
  { key: "price", label: "Product Price" },
  { key: "status", label: "Status" },
];

/* Set items for table */
const items = DUMMY_TRANSACTIONS_PRODUCTS;

/* Context checkbox */
export const CheckboxTableContext = createContext();

const ProductPostedDetail = () => {
  return (
    <ListProductPosted>
      <div className="dashboard__right-area-container">
        <h3 className="dashboard__title-user__header">Products Posted</h3>
        <form className="product-posted__detail-container">
          <Table
            columns={columns}
            data={items}
            select
            noBorder
            colorCheckbox="#1c1d1f"
          />
        </form>
      </div>
    </ListProductPosted>
  );
};

export default ProductPostedDetail;
