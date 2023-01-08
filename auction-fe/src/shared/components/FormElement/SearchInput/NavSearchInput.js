import HeadlessTippy from "@tippyjs/react/headless";

import React, { memo, useEffect, useRef, useState } from "react";

import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { faXmarkCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast } from "react-toastify";

import "./NavSearchInput.css";

import { useHttpClient } from "../../../hook/http-client";
import PopperWrapper from "../../UIElement/PopperWrapper";
import useDebounce from "../../../hook/useDebounce";
import ProductItem from "../../UIElement/ProductItem";
import { FormInput } from "../Input";

const NavSearchInput = ({ inputClass, placeholder }) => {
  const inputRef = useRef();

  const [searchInput, setSearchInput] = useState("");

  const debounceValue = useDebounce(searchInput, 600);

  const [searchResult, setSearchResult] = useState([]);

  const [isShowResult, setIsShowResult] = useState(false);

  const { sendRequest, isLoading } = useHttpClient();

  const handleOnChange = (value) => {
    setSearchInput(value);
  };

  const handleClickOutside = () => {
    setIsShowResult(false);
  };

  const handleClearResult = () => {
    setIsShowResult(false);
    setSearchResult([]);
    setSearchInput("");
    inputRef.current.value = "";
    inputRef.current.focus();
  };

  useEffect(() => {
    if (!debounceValue.trim()) {
      setSearchResult([]);
      return;
    }

    const fetchSearch = async () => {
      try {
        const res = await sendRequest({
          url: `http://localhost:8080/api/api/users/search=${debounceValue}`,
          method: "GET",
        });

        setSearchResult(res);
      } catch (err) {
        toast(err.response.data.message, { type: "error" });
      }
    };
    fetchSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounceValue]);

  return (
    <HeadlessTippy
      appendTo={() => document.body}
      visible={isShowResult}
      interactive
      placement="bottom"
      onClickOutside={handleClickOutside}
      render={(attrs) => (
        <div className="search-result" tabIndex="-1" {...attrs}>
          <PopperWrapper className="popper__search">
            {searchResult.length > 0 && (
              <>
                <ProductItem
                  image="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1026&q=80"
                  name="Macbook"
                  price="50000"
                />

                <ProductItem
                  image="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1026&q=80"
                  name="Macbook"
                  price="50000"
                />

                <ProductItem
                  image="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1026&q=80"
                  name="Macbook"
                  price="50000"
                />
              </>
            )}
            {searchResult.length === 0 && (
              <div className="popper__no-result">
                <img
                  src="https://raw.githubusercontent.com/nguyenhoanganhtuan1206/SE397/main/se397/src/main/resources/static/assets/img/product/no_cart.png"
                  alt="No product"
                />

                <p className="message">No Product Available</p>
              </div>
            )}
          </PopperWrapper>
        </div>
      )}
    >
      <div className="form-input__search">
        <FormInput
          fieldName="searchInput"
          element="input"
          type="text"
          onChange={handleOnChange}
          inputClass={inputClass}
          placeholder={placeholder}
          onFocus={(isFocused) => {
            setIsShowResult(isFocused);
          }}
          fullWidth
          ref={inputRef}
          noBorder
        />
        {!isLoading && !!searchInput && (
          <FontAwesomeIcon
            className="close-icon circle"
            icon={faXmarkCircle}
            onClick={handleClearResult}
          />
        )}
        {isLoading && (
          <FontAwesomeIcon className="spinner-icon" icon={faSpinner} />
        )}
      </div>
    </HeadlessTippy>
  );
};

export default memo(NavSearchInput);
