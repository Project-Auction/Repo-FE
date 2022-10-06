import { Controller, useForm } from "react-hook-form";

import InputFiled from "../../../FormElement/Input";
import SelectField from "../../../FormElement/Select/SelectField";

const FormSearchTable = (props) => {
  /*
    ? In form jus have search by input , category and status
    ? FormSearch used for contain InputSearch , SearchFilter, SelectFiled
    ? Allow other components use useWatch to follow data 
    */

  const methods = useForm();

  return (
    <form>
      {/* Input Search */}
      <Controller
        name="searchInput"
        control={methods.control}
        render={({ field: { onChange } }) => (
          <InputFiled
            element="input"
            type="text"
            onChange={onChange}
            placeholder={props.placeholderInput}
          />
        )}
      />
      {/* Input Search */}

      {/* Dropdown search */}
      <Controller
        name="dropdownSearch"
        control={methods.control}
        render={({ field: { onChange } }) => (
          <SelectField
            onChange={onChange}
            items={props.items}
            label={props.label}
          />
        )}
      />
      {/* Dropdown search */}
    </form>
  );
};

export default FormSearchTable;
