import "./Table.css";

import CheckboxField from "../../FormElement/Checkbox";
import { useState } from "react";

const Table = (props) => {
  const classes = `table 
  ${props.bordered && "table-bordered"}  
  ${props.striped && "table-striped"}`;

  const [selectedAll, setSelectedAll] = useState(false);

  const handleSelectingAll = () => {
    setSelectedAll((prev) => !prev);
  };

  return (
    <div className="table__container table-responsive">
      <table className={classes}>
        <thead
          className={`${props.thPrimary ? "thead-primary" : "thead-light"}`}
        >
          <tr>
            {props.select && (
              <th scope="col" className="selecting">
                <CheckboxField
                  fontSize={22}
                  color="#fff"
                  checkedColor="#fff"
                  onChange={handleSelectingAll}
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
          {props.items.map((item, index) => (
            <tr key={index}>
              {props.select && (
                <th>
                  <CheckboxField
                    fontSize={22}
                    color="#000"
                    checked={selectedAll}
                  />
                </th>
              )}
              <th scope="row">{index + 1}</th>
              <td>{item.name}</td>
              <td>{item.headerTitle}</td>
              <td>{item.initialPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
