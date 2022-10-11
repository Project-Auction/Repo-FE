import { useForm } from "react-hook-form";

import CustomFormProvider from "../../../../shared/components/FormElement/CustomFormProvider";
import { FormInput } from "../../../../shared/components/FormElement/Input";
import SelectField from "../../../../shared/components/FormElement/Select/SelectField";
import Admin from "../../page/Admin";

import "./TransactionsList.css";

/* Set values default select options */
const selectOptionsDefault = [
  { label: "Transaction status", value: "statusTrade" },
  { label: "Sort by customer's name", value: "sortByName" },
  { label: "Sort by quantity", value: "sortByQuantity" },
];

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
              className="transaction__header-search-input"
            />
          </CustomFormProvider>
        </div>
      </div>
    </Admin>
  );
};

export default TransactionsList;
