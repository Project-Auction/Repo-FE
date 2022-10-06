import { useState } from "react";

import "./Table.css";

import { useForm } from "react-hook-form";

import CheckboxField from "../../FormElement/Checkbox";
import SelectFilter from "../Filter/SelectFilter";
import InputFiled from "../../FormElement/Input";
import ButtonFiled from "../../FormElement/Button";
import CustomFormProvider from "../../FormElement/CustomFormProvider";
import SelectField from "../../FormElement/Select/SelectField";

export const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const Table = (props) => {
  /*
  ? props.select to use Checkbox in table
  ? props.filter to use feature search with filter in table
  ? props.search to use search in table
  */
  const {
    items,
    header,
    filter,
    select,
    striped,
    bordered,
    thPrimary,
    thLight,
  } = props;

  const methods = useForm();

  const classes = `table 
  ${bordered && "table-bordered"}  
  ${striped && "table-striped"}
  ${thPrimary && "thead-primary"}
  ${thLight && "thead-light"}`;

  /* Set state checked for Checkbox */
  const [checkedState, setCheckedState] = useState(
    new Array(items.length).fill(false)
  );

  /* To store items selected */
  const [itemsSelected, setItemsSelected] = useState([]);

  /* Handle select all */
  const handleCheckedAll = (event) => {
    if (event.target.checked) {
      setItemsSelected(items);
    } else {
      setItemsSelected([]);
    }
    const updateCheckedState = checkedState.fill(event.target.checked);
    setCheckedState(updateCheckedState.map((state) => state));
  };

  /* Handle select each elements */
  const handleChange = (item, pos, event) => {
    const updateCheckedState = checkedState.map((state, index) =>
      pos === index ? !state : state
    );

    setCheckedState(updateCheckedState);

    setItemsSelected((prev) => [...prev, item]);

    /* Remove elements when unchecked */
    if (!event.target.checked) {
      setItemsSelected((prev) => prev.filter((val) => val !== item));
    }
  };

  /* Handle Submit */
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(itemsSelected);
  };

  return (
    <div className="table__container table-responsive">
      <CustomFormProvider {...methods}>
        <form>
          {filter && (
            <div className="table__filter-container">
              <div className="row align-items-center">
                <div className="col-5">
                  {/* Search Input */}
                  <InputFiled
                    element="input"
                    fieldName="searchInputTable"
                    required
                    placeholder="Nhập tên khách hàng"
                    fullWidth
                    className="table__filter-input"
                    onFocus={() => {}}
                  />
                  {/* Search Input */}
                </div>

                <div className="col-7 d-flex align-items-center">
                  <SelectField
                    fieldName="selectInputTable"
                    width="150px"
                    items={options}
                    defaultValue={options[0].value}
                    label="Tìm kiếm"
                    variant="outlined"
                  />

                  <SelectFilter
                    options={options}
                    isMulti
                    autoFocus
                    isSearchable
                    className="search-filter"
                  />
                </div>
              </div>
            </div>
          )}

          <table className={classes}>
            <thead className={classes}>
              <tr>
                {select && (
                  <th scope="col" className="selecting">
                    <CheckboxField
                      fontSize={22}
                      color="#000"
                      checkedColor="#ff3366"
                      onChange={(e) => handleCheckedAll(e)}
                    />
                  </th>
                )}
                {header.map((header, index) => (
                  <th scope="col" key={index}>
                    {header.field}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {items.map((item, pos) => (
                <tr key={pos}>
                  {select && (
                    <th>
                      <CheckboxField
                        fontSize={22}
                        color="#000"
                        checkedColor="#ff3366"
                        onChange={(e) => handleChange(item, pos, e)}
                        checked={checkedState[pos]}
                      />
                    </th>
                  )}
                  <th scope="row">{item.codeProduct}</th>
                  <td>{item.name}</td>
                  <td>{item.headerTitle}</td>
                  <td>{item.initialPrice}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {props.select && (
            <ButtonFiled
              type="submit"
              onClick={handleSubmit}
              primary
              size="small"
            >
              Xóa
            </ButtonFiled>
          )}
        </form>
      </CustomFormProvider>
    </div>
  );
};

export default Table;
