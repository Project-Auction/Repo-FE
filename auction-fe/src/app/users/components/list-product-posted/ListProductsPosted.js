import MyAdsPage from "../../page/list-product-posted/MyAdsPage";

import "./ListProductsPosted.css";
import "../../components/MainUserStyles.css";
import Table from "../../../../shared/components/UIElement/Table/Table";
import { DUMMY_TRANSACTIONS_PRODUCTS } from "../../../../dummy_data/DummyData";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useHttpClient } from "../../../../shared/hook/http-client";
import LoadingSpinner from "../../../../shared/components/UIElement/LoadingSpinner/LoadingSpinner";

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

const ListProductsPosted = () => {
  /* Check user not logged in */
  const userData = JSON.parse(localStorage.getItem("userData"));
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);

  const { isLoading, sendRequest } = useHttpClient();

  useEffect(() => {
    if (!userData) {
      navigate("/auth");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* Fetch data */
  useEffect(() => {
    try {
      const fetchProducts = async () => {
        const response = await sendRequest(
          `http://localhost:8080/api/user/product/products-posted/${userData.accountId}`,
          "GET",
          {
            "Access-Control-Allow-Origin": "*",
          }
        );

        setProducts(response);
      };

      fetchProducts();
    } catch (err) {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  /* Fetch data */

  return (
    <>
      {isLoading && <LoadingSpinner asOverlay />}

      {!isLoading && (
        <MyAdsPage>
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
        </MyAdsPage>
      )}
    </>
  );
};

export default ListProductsPosted;
