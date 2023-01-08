import "./ListProductsPosted.css";

import { createContext, memo, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, useWatch } from "react-hook-form";

import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";

import { useHttpClient } from "../../../../shared/hook/http-client";
import { SearchInput } from "../../../../shared/components/FormElement/SearchInput";
import { getCategories } from "../../../../apis/categories";
import useDebounce from "../../../../shared/hook/useDebounce";
import MyAdsPage from "../../page/list-product-posted/MyAdsPage";
import Table from "../../../../shared/components/UIElement/Table/Table";
import "./ListProductsPosted.css";
import "../../components/MainUserStyles.css";
import LoadingSpinner from "../../../../shared/components/UIElement/LoadingSpinner/LoadingSpinner";
import CustomFormProvider from "../../../../shared/components/FormElement/CustomFormProvider";

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
  const methods = useForm({
    defaultValues: {
      searchInput: "",
      filterSelect: 0,
    },
  });

  const searchInputValue = methods.watch("searchInput");
  const filterSelectValue = methods.watch("filterSelect").id;

  const debounceValue = useDebounce(searchInputValue, 800);

  /* Check user not logged in */
  const userData = JSON.parse(localStorage.getItem("userData"));
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const {
    isLoading: isLoadingGetProducts,
    sendRequest: sendRequestGetProducts,
  } = useHttpClient({
    showToast: true,
    isAuthor: true,
  });

  const { sendRequest: sendRequestSearch, isLoading: isLoadingSearch } =
    useHttpClient({
      showToast: true,
      isAuthor: true,
    });

  const { sendRequest: sendRequestCategories, isLoading: isLoadingCategories } =
    useHttpClient();

  /* Get categories */
  useEffect(() => {
    if (!userData) {
      navigate("/auth");
    }

    const fetchCategories = async () => {
      try {
        const retrievedCategories = await getCategories(sendRequestCategories);
        setCategories(retrievedCategories);
      } catch (err) {}
    };

    fetchCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //*Search and filter
  const fetchData = useCallback(
    async () => {
      const response = await sendRequestSearch(
        `http://localhost:8080/api/user/product/search?q=${searchInputValue}&categoryId=${
          filterSelectValue === undefined ? 0 : parseInt(filterSelectValue)
        }`,
        "GET",
        {},
        {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET",
        }
      );

      setProducts(response);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [filterSelectValue, debounceValue]
  );

  useEffect(() => {
    if (
      debounceValue.trim() ||
      filterSelectValue === undefined ||
      filterSelectValue
    ) {
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounceValue, filterSelectValue]);
  //*Search and filter

  /* Fetch data */
  useEffect(() => {
    try {
      const fetchProducts = async () => {
        const response = await sendRequestGetProducts(
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

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      {(isLoadingGetProducts || isLoadingCategories) && (
        <LoadingSpinner asOverlay />
      )}

      {(!isLoadingGetProducts || !isLoadingCategories) && (
        <MyAdsPage>
          <div className="dashboard__right-area-container">
            <h3 className="dashboard__title-user__header">Products Posted</h3>

            <div className="product-posted__detail-container">
              {/* Search Input */}
              <CustomFormProvider {...methods}>
                <SearchInput
                  filter
                  dataFilter={categories}
                  onSubmit={methods.handleSubmit(onSubmit)}
                  placeholder="Enter Product Name"
                  isLoading={isLoadingSearch}
                  searchInputValue={debounceValue}
                  firstFilter="All Category"
                />
              </CustomFormProvider>
              {/* Search Input */}

              <form className="product-posted__detail-form">
                <Table
                  columns={columns}
                  data={products}
                  select
                  noBorder
                  className="table-product__posted"
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
          </div>
        </MyAdsPage>
      )}
    </>
  );
};

export default memo(ListProductsPosted);
