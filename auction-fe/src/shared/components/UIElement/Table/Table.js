import { useCallback, useEffect, useState } from "react";

import "./Table.css";

import { useForm } from "react-hook-form";

import CheckboxField from "../../FormElement/Checkbox";
import ButtonField from "../../FormElement/Button";
import Pagination from "../Pagination";
import usePaginate from "../../../hook/usePaginate";

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

  ! header = [{id  , field}]
  */
  const {
    data = [],
    columns = [],
    select,
    striped,
    bordered,
    thPrimary,
    thLight,
    thDark,
    noBorder,
    colorCheckbox = "#fff",
    colorCheckedCheckbox = "#ff3366",
  } = props;
  const classes = `table
  ${bordered && "table-bordered"}  
  ${striped && "table-striped"}
  ${thPrimary && "thead-primary"}
  ${thLight && "thead-light"}
  ${thDark && "thead-dark"}
  ${noBorder && "no-border"}`;

  /* Define to paginate */
  const [currentPage, setCurrentPage] = useState(1);
  const [capacityPage, setCapacityPage] = useState(6);
  const { paginate } = usePaginate();
  const storage = paginate(data, currentPage, capacityPage);

  /* Handle redirect page */
  const handleRedirectPage = useCallback((pageNumber) => {
    setCurrentPage(pageNumber);
  }, []);

  /* Set state checked for Checkbox */
  const [checkedAllState, setCheckedAllState] = useState(false);

  /* To store items selected */
  const [itemsSelected, setItemsSelected] = useState(
    storage.map((item) => ({ ...item, checked: false }))
  );

  //** Used to when Redirect page */
  useEffect(() => {
    setItemsSelected(storage.map((items) => ({ ...items, checked: false })));
    setCheckedAllState(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);
  //** Used to when Redirect page */

  const handleCheckedAll = (e) => {
    const isChecked = e.target.checked;
    setItemsSelected(
      itemsSelected.map((items) => ({ ...items, checked: isChecked }))
    );
    setCheckedAllState(isChecked);
  };

  const handleCheckedItem = (val, e) => {
    /* Handle unchecked */
    const isChecked = e.target.checked;
    setItemsSelected(
      itemsSelected.map((item) =>
        item.id === val.id ? { ...item, checked: isChecked } : item
      )
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(itemsSelected.filter((state) => state.checked));
  };

  return (
    <div className="table__container">
      <div className="table-responsive">
        <table className={classes}>
          <thead className={classes}>
            <tr>
              {select && (
                <th scope="col" className="selecting">
                  <CheckboxField
                    fontSize={22}
                    color={colorCheckbox}
                    checkedColor={colorCheckedCheckbox}
                    onChange={handleCheckedAll}
                    checked={checkedAllState}
                  />
                </th>
              )}
              {columns.map((header, index) => (
                <th scope="col" key={index}>
                  {header.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {itemsSelected.length === storage.length &&
              storage.map((item, pos) => (
                <tr key={pos} className="selecting">
                  {select && (
                    <th>
                      <CheckboxField
                        fontSize={22}
                        color={colorCheckbox}
                        checkedColor={colorCheckedCheckbox}
                        onChange={(e) => handleCheckedItem(item, e)}
                        checked={itemsSelected[pos].checked}
                      />
                    </th>
                  )}
                  {columns.map((column, index) => (
                    <td key={index}>{item[column.key]}</td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {select && checkedAllState && (
        <div className="d-flex justify-content-end">
          <ButtonField
            type="submit"
            onClick={handleSubmit}
            primary
            size="small"
          >
            DELETE ALL
          </ButtonField>
        </div>
      )}

      {/* Pagination */}
      <Pagination
        capacityPage={capacityPage}
        totalData={data.length}
        currentPage={currentPage}
        onRedirect={handleRedirectPage}
      />
      {/* Pagination */}
    </div>
  );
};

export default Table;
