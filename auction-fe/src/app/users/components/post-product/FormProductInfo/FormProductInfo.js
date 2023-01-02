import { useEffect, useState } from "react";
import "./FormProductInfo.css";

import FormInput from "../../../../../shared/components/FormElement/Input/FormInput";
import SelectField from "../../../../../shared/components/FormElement/Select/SelectField";
import ErrorModal from "../../../../../shared/components/UIElement/ErrorModal";
import LoadingSpinner from "../../../../../shared/components/UIElement/LoadingSpinner/LoadingSpinner";
import { useHttpClient } from "../../../../../shared/hook/http-client";
import {
  VALIDATOR_MAXLENGTH,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRED,
} from "../../../../../utils/Validator";

const FormProductInfo = () => {
  const [categories, setCategories] = useState([]);

  const { sendRequest, error, clearError, isLoading } = useHttpClient(false);

  /* Get categories */
  useEffect(() => {
    try {
      const fetchCategories = async () => {
        const response = await sendRequest(
          "http://localhost:8080/api/home/categories",
          "GET"
        );

        setCategories(response);
      };

      fetchCategories();
    } catch (err) {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sendRequest]);

  return (
    <>
      {isLoading && <LoadingSpinner asOverlay />}

      {!isLoading && <ErrorModal error={error} onClear={clearError} />}

      {!error && !isLoading && (
        <div className="form__input-post__product-container">
          <FormInput
            fieldName="nameProduct"
            label="Product Name (*)"
            fullWidth
            onFocus={() => {}}
            placeholder="Enter product's name"
            formClass="form__input-post__product-form"
            validators={[
              VALIDATOR_REQUIRED("This field cannot be empty"),
              VALIDATOR_MINLENGTH(3, "This field between 3 and 50 characters"),
              VALIDATOR_MAXLENGTH(50, "This field between 3 and 50 characters"),
            ]}
          />

          {!isLoading && categories.length > 0 && (
            <SelectField
              fieldName="category"
              label="Category (*)"
              fullWidth
              className="form__input-post__product-form"
              value={categories[0]}
              validators={[VALIDATOR_REQUIRED("This field cannot be empty")]}
            >
              <option>----Please choose category for your product---</option>
              {categories.map((category) => (
                <option key={category.id} value={JSON.stringify(category)}>
                  {category.name}
                </option>
              ))}
            </SelectField>
          )}
        </div>
      )}
    </>
  );
};

export default FormProductInfo;
