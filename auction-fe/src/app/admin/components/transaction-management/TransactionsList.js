import { useForm } from "react-hook-form";

import CustomFormProvider from "../../../../shared/components/FormElement/CustomFormProvider";
import { FormInput } from "../../../../shared/components/FormElement/Input";
import SelectField from "../../../../shared/components/FormElement/Select/SelectField";
import Admin from "../../page/Admin";

import "./TransactionsList.css";

/* Set values default select options */
const selectOptionsDefault = [
  { label: "Tình trạng giao dịch", value: "statusTrade" },
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
              defaultValue={selectOptionsDefault[0]}
              width={340}
            />
          </CustomFormProvider>
        </div>
      </div>
    </Admin>
  );
};

export default TransactionsList;
