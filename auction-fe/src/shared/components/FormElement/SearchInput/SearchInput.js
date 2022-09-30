import HeadlessTippy from "@tippyjs/react/headless";

import React, { useEffect, useRef, useState } from "react";

import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { faXmarkCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./SearchInput.css";

import { useHttpClient } from "../../../hook/http-client";
import PopperWrapper from "../../UIElement/PopperWrapper";
import InputFiled from "../Input/InputField";
import useDebounce from "../../../hook/useDebounce";
import { toast } from "react-toastify";
import ProductItem from "../../UIElement/ProductItem";

const SearchInput = ({ inputClass, placeholder }) => {
  const inputRef = useRef();

  const [searchInput, setSearchInput] = useState("");

  const debounceValue = useDebounce(searchInput, 600);

  const [searchResult, setSearchResult] = useState([]);

  const [isShowResult, setIsShowResult] = useState(true);

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
        const res = await sendRequest(
          `http://localhost:8080/api/users/search=${debounceValue}`,
          "GET"
        );

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
      visible={isShowResult && searchResult.length > 0}
      interactive
      placement="bottom"
      onClickOutside={handleClickOutside}
      render={(attrs) => (
        <div className="search-result" tabIndex="-1" {...attrs}>
          <PopperWrapper className="popper__search">
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
          </PopperWrapper>
        </div>
      )}
    >
      <div className="form-input__search">
        <InputFiled
          element="input"
          type="text"
          onChange={handleOnChange}
          inputClass={inputClass}
          placeholder={placeholder}
          onFocus={(isFocused) => {
            setIsShowResult(isFocused);
          }}
          ref={inputRef}
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

export default SearchInput;
