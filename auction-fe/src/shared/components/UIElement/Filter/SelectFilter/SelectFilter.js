import Select from "react-select";

import './SelectFilter.css'

const SelectFilter = ({
  className,
  isDisabled,
  name,
  isMulti,
  isSearchable,
  onChange,
  options,
  placeholder,
  value,
  autoFocus,
  defaultValue,
  defaultInputValue,
}) => {
  return (
    <Select
      options={options}
      onChange={onChange}
      isSearchable={isSearchable}
      isMulti={isMulti}
      name={name}
      value={value}
      placeholder={placeholder}
      isDisabled={isDisabled}
      autoFocus={autoFocus}
      defaultValue={defaultValue}
      defaultInputValue={defaultInputValue}
      className={`search-filter ${className}`}
    />
  );
};

export default SelectFilter;
