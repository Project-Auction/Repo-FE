import { memo } from "react";

import "./Table.css";

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
  ? actionPortion to use Action like button,...
  */
  const {
    striped,
    bordered,
    thPrimary,
    thLight,
    className,
    thDark,
    noBorder,
    children,
  } = props;

  const classes = `table ${className}
  ${bordered && "table-bordered"}  
  ${striped && "table-striped"}
  ${thPrimary && "thead-primary"}
  ${thLight && "thead-light"}
  ${thDark && "thead-dark"}
  ${noBorder && "no-border"}`;

  return (
    <div className="table__container">
      <div className="table-responsive">
        <table className={classes}>{children}</table>
      </div>
    </div>
  );
};

export default memo(Table);
