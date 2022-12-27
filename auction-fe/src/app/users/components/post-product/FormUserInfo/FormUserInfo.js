import FormInput from "../../../../../shared/components/FormElement/Input/FormInput";
import SelectField from "../../../../../shared/components/FormElement/Select/SelectField";
import { options } from "../../../../../shared/components/UIElement/Table/Table";
import CheckboxField from "../../../../../shared/components/FormElement/Checkbox";
import "./FormUserInfo.css";

const FormUserInfo = () => {
  return (
    <div className="form__input-post__product-container">
      <div className="form__input-post__product-group">
        <FormInput
          fieldName="userName"
          formClass="form__input-post__product-form"
          type="text"
          fullWidth
          label="Full Name (*)"
          placeholder="Enter Name"
          onFocus={() => {}}
          readOnly
        />

        <FormInput
          fieldName="incrementPrice"
          formClass="form__input-post__product-form"
          type="text"
          fullWidth
          label="Phone Number (*)"
          placeholder="Enter Phone Number"
          onFocus={() => {}}
          readOnly
        />
      </div>

      <div className="form__input-post__product-group">
        <SelectField
          fieldName="category"
          label="Category (*)"
          items={options}
          fullWidth
          className="form__input-post__product-form"
        />

        <SelectField
          fieldName="category"
          label="Category (*)"
          items={options}
          fullWidth
          className="form__input-post__product-form"
        />
      </div>

      <div className="form__input-post__product-group">
        <CheckboxField checkedColor="#1c1d1f" />
        <span style={{ fontSize: "1.5rem", color: "#888" }}>
          I agree to all Terms of Use & Posting Rules
        </span>
      </div>
    </div>
  );
};

export default FormUserInfo;
