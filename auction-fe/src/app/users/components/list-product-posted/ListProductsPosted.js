import "./ListProductsPosted.css";

import { createContext, memo, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";

import MyAdsPage from "../../page/list-product-posted/MyAdsPage";
import Table from "../../../../shared/components/UIElement/Table/Table";
import "./ListProductsPosted.css";
import "../../components/MainUserStyles.css";
import { useHttpClient } from "../../../../shared/hook/http-client";
import LoadingSpinner from "../../../../shared/components/UIElement/LoadingSpinner/LoadingSpinner";

/* Set header grid*/
const columns = [
  { key: "createDate", label: "Date Request" },
  { key: "productId", label: "Product ID" },
  { key: "nameProduct", label: "Product Name" },
  { key: "initialPrice", label: "Product Price" },
  { key: "biddingStatus", label: "Status" },
];

/* Context checkbox */
export const CheckboxTableContext = createContext();

const ListProductsPosted = () => {
  /* Check user not logged in */
  const userData = JSON.parse(localStorage.getItem("userData"));
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);

  const { isLoading, sendRequest } = useHttpClient({
    showToast: true,
    isAuthor: true,
  });

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

  console.log(products);

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
                data={products}
                select
                noBorder
                colorCheckbox="#1c1d1f"
                action={
                  <>
                    <FontAwesomeIcon
                      icon={faPenToSquare}
                      className="icon circle"
                    />
                    <FontAwesomeIcon icon={faTrash} className="icon circle" />
                  </>
                }
              />
            </form>
          </div>
        </MyAdsPage>
      )}
    </>
  );
};

export default memo(ListProductsPosted);
