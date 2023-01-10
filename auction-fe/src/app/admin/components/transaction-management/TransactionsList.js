import { memo } from "react";
import { useForm } from "react-hook-form";

import CustomFormProvider from "../../../../shared/components/FormElement/CustomFormProvider";
import { FormInput } from "../../../../shared/components/FormElement/Input";
import SelectField from "../../../../shared/components/FormElement/Select/SelectField";
import Table from "../../../../shared/components/UIElement/Table/Table";
import { DUMMY_PRODUCTS } from "../../../home/page/home/Home";
import Admin from "../../page/Admin";

import "./TransactionsList.css";

/* Set values default select options */
const selectOptionsDefault = [
  { label: "Transaction status", value: "statusTrade" },
  { label: "Sort by customer's name", value: "sortByName" },
  { label: "Sort by quantity", value: "sortByQuantity" },
];

/* Set header grid*/
const headerGrid = [
  { id: 1, field: "Tên" },
  { id: 2, field: "Tên" },
  { id: 3, field: "Tên" },
  { id: 4, field: "Tên" },
];

/* Set items for table */
const items = DUMMY_PRODUCTS;

const TransactionsList = () => {
  const methods = useForm();

  return (
    <Admin>
      <div className="transaction__management-container">
        <h3 className="title">Transaction Management</h3>

        <div className="header__search-filter">
          <CustomFormProvider {...methods}>
            <FormInput
              label="Search by name"
              fieldName="productName"
              fullWidth
              placeholder="Search product's by name"
              inputClass="transaction__header-search-input"
              formClass="transaction__header-search-form"
              onFocus={() => {}}
            />

            <SelectField
              label="Filter"
              fieldName="filter"
              items={selectOptionsDefault}
              width={340}
              className="transaction__header-search-input transaction__header-search-filter__input"
            />
          </CustomFormProvider>
        </div>

        <div className="content__table">
          <Table
            select
            header={headerGrid}
            items={items}
            striped
            thDark
            colorCheckbox="#dadada"
          />
        </div>
      </div>
    </Admin>
  );
};

export default memo(TransactionsList);
