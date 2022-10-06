import { useState } from "react";

import "./Table.css";

import CheckboxField from "../../FormElement/Checkbox";
import SelectFilter from "../Filter/SelectFilter";
import InputFiled from "../../FormElement/Input";
import { FormProvider, useForm } from "react-hook-form";

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
  const classes = `table 
  ${props.bordered && "table-bordered"}  
  ${props.striped && "table-striped"}
  ${props.thPrimary && "thead-primary"}
  ${props.thLight && "thead-light"}`;

  /* Set state checked for Checkbox */
  const [checkedState, setCheckedState] = useState(
    new Array(props.items.length).fill(false)
  );

  /* To store items selected */
  const [itemsSelected, setItemsSelected] = useState([]);

  /* Handle select all */
  const handleCheckedAll = (event) => {
    if (event.target.checked) {
      setItemsSelected(props.items);
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

  const methods = useForm();

  return (
    <div className="table__container table-responsive">
      <form>
        {/* Search */}

        {/*
         Dropdown search 
        */}

        {props.filter && (
          <SelectFilter
            options={options}
            isMulti
            autoFocus
            isSearchable
            className="search-filter"
          />
        )}

        <table className={classes}>
          <thead className={classes}>
            <tr>
              {props.select && (
                <th scope="col" className="selecting">
                  <CheckboxField
                    fontSize={22}
                    color="#000"
                    checkedColor="#ff3366"
                    onChange={(e) => handleCheckedAll(e)}
                  />
                </th>
              )}
              {props.header.map((header, index) => (
                <th scope="col" key={index}>
                  {header.field}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {props.items.map((item, pos) => (
              <tr key={pos}>
                {props.select && (
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
        <button type="submit" onClick={handleSubmit}>
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default Table;
