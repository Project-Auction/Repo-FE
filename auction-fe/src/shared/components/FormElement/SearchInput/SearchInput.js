import "./SearchInput.css";

import { memo, useState } from "react";
import { Controller, useForm, useFormContext } from "react-hook-form";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faClose,
  faFilter,
  faSearch,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";

import { FormInput } from "../Input";
import ButtonField from "../Button/ButtonField";
import PopperWrapper from "../../UIElement/PopperWrapper";

const SearchInput = (props) => {
  /**
   * ! API in BE must be use with @RequestParam
   *? key used to get value in filter
   *? filter to bring filter search
   *? dataFilter used to button filter
   */

  const {
    filter,
    dataFilter = [],
    className,
    onSubmit,
    placeholder,
    searchInputValue,
    isLoading,
    firstFilter,
  } = props;

  /* Check status click filter */
  const [isFilter, setIsFilter] = useState(false);

  const [valueFilter, setValueFilter] = useState("All Category");

  const { setValue } = useFormContext();

  const { control } = useForm();

  return (
    <form className={`search-input__form ${className}`} onSubmit={onSubmit}>
      <div className="search-input__form-group col-8">
        <FontAwesomeIcon
          icon={faSearch}
          className="search-input__icon search__icon"
        />
        <FormInput
          fieldName="searchInput"
          type="text"
          requiredForm
          placeholder={placeholder}
          inputClass="search-input__form-input"
          noBorder
          onFocus={() => {}}
        />

        {isLoading && (
          <FontAwesomeIcon className="spinner-icon" icon={faSpinner} />
        )}
        {!isLoading && !!searchInputValue && (
          <FontAwesomeIcon
            icon={faClose}
            className="search-input__icon close__icon"
            onClick={() => setValue("searchInput", "")}
          />
        )}
      </div>

      {filter && (
        <div className="col-4 d-flex justify-content-end">
          <div className="search-input__form-right-area">
            <ButtonField
              type="button"
              className="search-input__form-filter"
              onClick={() => setIsFilter(!isFilter)}
            >
              <FontAwesomeIcon
                icon={faFilter}
                className="search-input__form-filter-icon"
              />
              <span>Filter</span>
            </ButtonField>

            {isFilter && dataFilter.length > 0 && (
              <div className="popper__search-filter__container">
                <PopperWrapper className="popper__search-filter-wrapper">
                  <header className="popper__search-filter-header">
                    <span>{valueFilter}</span>
                    <FontAwesomeIcon
                      icon={faCaretDown}
                      className="popper__search-filter-header-icon-down"
                    />
                  </header>

                  <Controller
                    name="filterSelect"
                    control={control}
                    render={({ field: { onChange } }) => {
                      const onChangeValue = (e, data) => {
                        const valueSelected =
                          dataFilter[e.target.dataset.index];
                        setValue("filterSelect", valueSelected);
                        onChange(valueSelected);
                        setValueFilter(data.name);
                      };

                      const handleSelectAll = () => {
                        setValue("filterSelect", 0);
                        onChange(0);
                        setValueFilter(firstFilter);
                      };

                      return (
                        <ul className="popper__search-filter-body">
                          <li onClick={handleSelectAll}>{firstFilter}</li>
                          {dataFilter.map((data, index) => (
                            <li
                              key={index}
                              onClick={(e) => onChangeValue(e, data)}
                              data-index={index}
                            >
                              {data.name}
                            </li>
                          ))}
                        </ul>
                      );
                    }}
                  />
                </PopperWrapper>
              </div>
            )}
          </div>
        </div>
      )}
    </form>
  );
};

export default memo(SearchInput);
