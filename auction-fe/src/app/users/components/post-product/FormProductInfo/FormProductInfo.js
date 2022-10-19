import FormInput from "../../../../../shared/components/FormElement/Input/FormInput";
import SelectField from "../../../../../shared/components/FormElement/Select/SelectField";
import { options } from "../../../../../shared/components/UIElement/Table/Table";
import "./FormProductInfo.css";

const FormProductInfo = (props) => {
  return (
    <div className="form__input-post__product-container">
      <FormInput
        fieldName="codeProduct"
        label="Code Product (*)"
        fullWidth
        onFocus={() => {}}
        placeholder="Enter product's code"
        formClass="form__input-post__product-form"
      />

      <FormInput
        fieldName="productName"
        label="Product Name (*)"
        fullWidth
        onFocus={() => {}}
        placeholder="Enter product's name"
        formClass="form__input-post__product-form"
      />

      <SelectField
        fieldName="category"
        label="Category (*)"
        items={options}
        fullWidth
        className="form__input-post__product-form"
      />
    </div>
  );
};

export default FormProductInfo;
