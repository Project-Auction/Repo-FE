import HeadlessTippy from "@tippyjs/react/headless";

import React, { useEffect, useRef, useState } from "react";
import { Controller } from "react-hook-form";

import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { faXmarkCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./SearchInput.css";

import { useHttpClient } from "../../../hook/http-client";
import PopperWrapper from "../../UIElement/PopperWrapper";
import InputFiled from "../Input/InputField";
import useDebounce from "../../../hook/useDebounce";
import { toast } from "react-toastify";

const SearchInput = ({ control, name, inputClass, placeholder, ...props }) => {
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
          <PopperWrapper>
            <h1>hii</h1>
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
