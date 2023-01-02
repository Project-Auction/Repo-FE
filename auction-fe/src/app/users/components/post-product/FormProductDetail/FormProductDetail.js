import { useWatch } from "react-hook-form";

import "./FormProductDetail.css";
import "../../MainUserStyles.css";

import { UploadMultipleImages } from "../../../../../shared/components/FormElement/ImageUploader/ImageUploader";
import FormInput from "../../../../../shared/components/FormElement/Input/FormInput";
import TextareaField from "../../../../../shared/components/FormElement/TextareaField";
import FormInputTime from "../../../../../shared/components/FormElement/InputTime/FormInputTime";
import Constants from "../../../../../utils/Constants";
import {
  VALIDATOR_COMPARE_DATE,
  VALIDATOR_MAX,
  VALIDATOR_MIN,
  VALIDATOR_REQUIRED,
} from "../../../../../utils/Validator";

const FormProductDetail = () => {
  const startDateValue = useWatch({
    name: "startDate",
  });

  return (
    <>
      <div className="form__input-post__product-container">
        <div className="form__user-group d-flex align-items-center">
          <FormInput
            fieldName="initialPrice"
            formClass="form__input-post__product-form"
            fullWidth
            label="Initial Price (*)"
            placeholder="Enter Initial Price"
            onFocus={() => {}}
            format={Constants.FormInputFormat.MONEY.VALUE}
            validators={[
              VALIDATOR_REQUIRED("This field cannot be empty"),
              VALIDATOR_MIN(0, "Initial Price must be between 0 and 10000"),
              VALIDATOR_MAX(10000, "Initial Price must be between 0 and 10000"),
            ]}
          />

          <FormInput
            fieldName="incrementPrice"
            formClass="form__input-post__product-form"
            fullWidth
            label="Increment At Least (*)"
            placeholder="Enter Increment Price"
            onFocus={() => {}}
            format={Constants.FormInputFormat.MONEY.VALUE}
            validators={[
              VALIDATOR_REQUIRED("This field cannot be empty"),
              VALIDATOR_MIN(0, "Increment Price must be between 0 and 1000"),
              VALIDATOR_MAX(1000, "Increment Price must be between 0 and 1000"),
            ]}
          />
        </div>

        <div className="form__user-group d-flex align-items-center">
          <UploadMultipleImages
            fieldName="images"
            className="form__input-post__product__image"
            // validators={[VALIDATOR_REQUIRED("This field cannot be empty")]}
          />
        </div>

        <div className="form__user-group d-flex align-items-center">
          <TextareaField
            label="Product Description (*)"
            row={5}
            fieldName="description"
            fullWidth
            validators={[VALIDATOR_REQUIRED("This field cannot be empty")]}
          />
        </div>

        <div className="form__user-group d-flex align-items-center">
          <FormInputTime
            label="Start Date (*)"
            fieldName="startDate"
            dateType="date_timer_picker"
            className="form__input-post__product-form"
            validators={[VALIDATOR_REQUIRED("This field cannot be empty")]}
          />
          <FormInputTime
            label="Start Date (*)"
            fieldName="endDate"
            dateType="date_timer_picker"
            formClass="ml-4"
            className="form__input-post__product-form"
            validators={[
              VALIDATOR_REQUIRED("This field cannot be empty"),
              VALIDATOR_COMPARE_DATE(
                startDateValue,
                "Start date must be before end date"
              ),
            ]}
          />
        </div>
      </div>
    </>
  );
};

export default FormProductDetail;
