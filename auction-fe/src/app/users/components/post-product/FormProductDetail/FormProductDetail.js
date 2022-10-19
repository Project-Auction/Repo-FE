import FormInput from "../../../../../shared/components/FormElement/Input/FormInput";
import { UploadMultipleImages } from "../../../../../shared/components/FormElement/ImageUploader/ImageUploader";
import "./FormProductDetail.css";

const FormProductDetail = (props) => {
  return (
    <div className="form__input-post__product-container">
      <div className="form__input-post__product-group">
        <FormInput
          fieldName="initialPrice"
          formClass="form__input-post__product-form"
          type="number"
          fullWidth
          label="Initial Price (*)"
          placeholder="Enter Price"
        />

        <FormInput
          fieldName="incrementPrice"
          formClass="form__input-post__product-form"
          type="number"
          fullWidth
          label="Increment At Least (*)"
          placeholder="Enter Increment Price"
        />
      </div>

      <div className="form__input-post__product-group">
        <UploadMultipleImages
          multipleImages
          className="form__input-post__product__image"
        />
      </div>
    </div>
  );
};

export default FormProductDetail;
