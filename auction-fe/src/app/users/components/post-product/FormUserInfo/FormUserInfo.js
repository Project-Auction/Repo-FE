import { memo, useState } from "react";

import "./FormUserInfo.css";
import FormInput from "../../../../../shared/components/FormElement/Input/FormInput";
import CheckboxField from "../../../../../shared/components/FormElement/Checkbox";
import Constants from "../../../../../utils/Constants";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRED,
} from "../../../../../utils/Validator";

const FormUserInfo = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <>
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
            validators={[
              VALIDATOR_REQUIRED("Full name cannot be empty"),
              VALIDATOR_MINLENGTH(9, "Full name at least 9 characters"),
            ]}
          />

          <FormInput
            fieldName="phoneNumber"
            formClass="form__input-post__product-form"
            type="text"
            fullWidth
            label="Phone Number (*)"
            placeholder="Enter Phone Number"
            onFocus={() => {}}
            format={Constants.FormInputFormat.PHONE_NUMBER.VALUE}
            requiredForm
            validators={[
              VALIDATOR_REQUIRED("Phone number cannot be empty"),
              VALIDATOR_MINLENGTH(9, "Phone number at least 9 characters"),
            ]}
          />
        </div>

        <div className="form__input-post__product-group">
          <CheckboxField
            onChange={handleCheckboxChange}
            defaultChecked={false}
            checkedColor="#1c1d1f"
          />
          <span style={{ fontSize: "1.5rem", color: "#888" }}>
            I agree to all Terms of Use & Posting Rules
          </span>
        </div>
        {!isChecked && (
          <p className="alert alert-danger mb-4 w-50 text-center">
            You must be confirm Privacy Policy before Submit
          </p>
        )}
      </div>
    </>
  );
};

export default memo(FormUserInfo);
