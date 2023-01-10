import "./ListProductsPosted.css";

import { createContext, memo, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";

import { useHttpClient } from "../../../../shared/hook/http-client";
import { SearchInput } from "../../../../shared/components/FormElement/SearchInput";
import { getCategories } from "../../../../apis/categories";
import {
  FormatDateTimeLocal,
  TYPE_DATE_MONTH,
} from "../../../../shared/format/format-datetime";
import useDebounce from "../../../../shared/hook/useDebounce";
import MyAdsPage from "../../page/list-product-posted/MyAdsPage";
import Table from "../../../../shared/components/UIElement/Table/Table";
import "./ListProductsPosted.css";
import "../../components/MainUserStyles.css";
import LoadingSpinner from "../../../../shared/components/UIElement/LoadingSpinner/LoadingSpinner";
import CustomFormProvider from "../../../../shared/components/FormElement/CustomFormProvider";
import CheckboxField from "../../../../shared/components/FormElement/Checkbox/CheckboxField";
import usePaginate from "../../../../shared/hook/usePaginate";
import useCheckbox from "../../../../shared/hook/useCheckbox";
import Pagination from "../../../../shared/components/UIElement/Pagination/Pagination";

/* Set header grid*/
const columns = [
  { label: "Date Request" },
  { label: "Product ID" },
  { label: "Product Name" },
  { label: "Product Price" },
  { label: "Status" },
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
    checkedAllState,
    itemsSelected,
    setItemsSelected,
    setCheckedAllState,
    handleCheckedAll,
    handleCheckedItem,
  } = useCheckbox({ data: products, keyCompare: "productId" });

  /* Define to paginate */
  const [currentPage, setCurrentPage] = useState(1);
  const [capacityPage, setCapacityPage] = useState(6);
  const { paginate } = usePaginate();
  const storage = paginate(products, currentPage, capacityPage);

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
    useHttpClient({ showToast: true });

  /* Handle redirect page */
  const handleRedirectPage = useCallback((pageNumber) => {
    setCurrentPage(pageNumber);
  }, []);

  const fetchCategories = async () => {
    try {
      const retrievedCategories = await getCategories(sendRequestCategories);
      setCategories(retrievedCategories);
    } catch (err) {}
  };

  const fetchProducts = async () => {
    try {
      const response = await sendRequestGetProducts({
        url: `http://localhost:8080/api/user/product/products-posted/${userData.accountId}`,
        method: "GET",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        urlRedirect: "/",
      });

      setProducts(response);
    } catch (err) {}
  };

  //*Search and filter
  const fetchData = useCallback(
    async () => {
      const response = await sendRequestSearch({
        url: `http://localhost:8080/api/user/product/search?q=${searchInputValue}&categoryId=${
          filterSelectValue === undefined ? 0 : parseInt(filterSelectValue)
        }`,
        method: "GET",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET",
        },
      });

      setProducts(response);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [filterSelectValue, debounceValue]
  );
  //*Search and filter

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

  //* Used to when update props data */
  useEffect(() => {
    setItemsSelected(storage.map((item) => ({ ...item, checked: false })));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products]);
  //* Used to when update props data */

  //** Used to when Redirect page */
  useEffect(() => {
    setItemsSelected(storage.map((items) => ({ ...items, checked: false })));
    setCheckedAllState(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);
  //** Used to when Redirect page */

  //* Fetch data*/
  useEffect(() => {
    if (!userData && products.length === 0) {
      navigate("/auth");
    }

    fetchCategories();
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //* Fetch data*/

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      {(isLoadingGetProducts || isLoadingCategories) && (
        <LoadingSpinner asOverlay />
      )}

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
            <form className="product-posted__detail-form">
              <Table
                select
                noBorder
                className="table-product__posted"
                colorCheckbox="#1c1d1f"
              >
                <thead>
                  <tr>
                    <th scope="col" className="selecting">
                      <CheckboxField
                        fontSize={22}
                        color="#1c1d1f"
                        checkedColor="#ff3366"
                        onChange={handleCheckedAll}
                        checked={checkedAllState}
                      />
                    </th>
                    {columns.map((header, index) => (
                      <th scope="col" key={index}>
                        {header.label}
                      </th>
                    ))}
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {itemsSelected.length === storage.length &&
                    storage.map((item, pos) => (
                      <tr key={pos} className="selecting">
                        <th>
                          <CheckboxField
                            fontSize={22}
                            color="#1c1d1f"
                            checkedColor="#ff3366"
                            onChange={(e) => handleCheckedItem(item, e)}
                            checked={itemsSelected[pos].checked}
                          />
                        </th>

                        <td>
                          {FormatDateTimeLocal({
                            value: item.createdDay,
                            format: TYPE_DATE_MONTH,
                          })}
                        </td>
                        <td>{item.productId}</td>
                        <td>{item.nameProduct}</td>
                        <td>{item.initialPrice}</td>
                        <td>
                          {item.biddingStatus ? (
                            <span className="font-weight-bold text-success">
                              Approval
                            </span>
                          ) : (
                            <span className="font-weight-bold text-danger">
                              Not approved yet
                            </span>
                          )}
                        </td>
                        <td className="d-flex align-items-center">
                          <>
                            <FontAwesomeIcon
                              icon={faPenToSquare}
                              className="icon circle"
                              onClick={() =>
                                navigate(`/${item.productId}/posted-detail`)
                              }
                            />
                            <FontAwesomeIcon
                              icon={faTrash}
                              className="icon circle"
                            />
                          </>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </Table>
              <Pagination
                capacityPage={capacityPage}
                totalData={products.length}
                currentPage={currentPage}
                onRedirect={handleRedirectPage}
              />
            </form>
          </div>
        </div>
      </MyAdsPage>
    </>
  );
};

export default memo(ListProductsPosted);
