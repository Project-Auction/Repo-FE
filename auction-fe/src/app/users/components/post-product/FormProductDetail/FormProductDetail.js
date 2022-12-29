import "./FormProductDetail.css";
import "../../MainUserStyles.css";

import { UploadMultipleImages } from "../../../../../shared/components/FormElement/ImageUploader/ImageUploader";
import FormInput from "../../../../../shared/components/FormElement/Input/FormInput";
import TextareaField from "../../../../../shared/components/FormElement/TextareaField";
import FormInputTime from "../../../../../shared/components/FormElement/InputTime/FormInputTime";

const FormProductDetail = (props) => {
  return (
    <div className="form__input-post__product-container">
      <div className="form__user-group d-flex align-items-center">
        <FormInput
          fieldName="initialPrice"
          formClass="form__input-post__product-form"
          type="number"
          fullWidth
          label="Initial Price (*)"
          placeholder="Enter Price"
          format="money"
          onFocus={() => {}}
        />

        <FormInput
          fieldName="incrementPrice"
          formClass="form__input-post__product-form"
          type="number"
          fullWidth
          label="Increment At Least (*)"
          placeholder="Enter Increment Price"
          onFocus={() => {}}
        />
      </div>

      <div className="form__user-group d-flex align-items-center">
        <UploadMultipleImages
          multipleImages
          className="form__input-post__product__image"
        />
      </div>

      <div className="form__user-group d-flex align-items-center">
        <TextareaField
          label="Product Description (*)"
          row={5}
          fieldName="description"
          fullWidth
        />
      </div>

      <div className="form__user-group d-flex align-items-center">
        <FormInputTime
          label="Start Date (*)"
          fieldName="startDate"
          dateType="date_timer_picker"
          className="form__input-post__product-form"
        />
        <FormInputTime
          label="End Date (*)"
          fieldName="endDate"
          dateType="date_timer_picker"
          className="form__input-post__product-form"
        />
      </div>
    </div>
  );
};

export default FormProductDetail;
