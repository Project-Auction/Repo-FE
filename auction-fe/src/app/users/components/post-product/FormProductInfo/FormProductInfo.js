import { memo, useEffect, useState } from "react";
import "./FormProductInfo.css";

import { getCategories } from "../../../../../apis/categories";
import { useHttpClient } from "../../../../../shared/hook/http-client";
import FormInput from "../../../../../shared/components/FormElement/Input/FormInput";
import SelectField from "../../../../../shared/components/FormElement/Select/SelectField";
import LoadingSpinner from "../../../../../shared/components/UIElement/LoadingSpinner/LoadingSpinner";
import {
  VALIDATOR_MAXLENGTH,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRED,
} from "../../../../../utils/Validator";

const FormProductInfo = () => {
  const [categories, setCategories] = useState([]);

  const { sendRequest, isLoading } = useHttpClient();

  /* Get categories */
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const retrievedCategories = await getCategories(sendRequest);
        setCategories(retrievedCategories);
      } catch (err) {}
    };

    fetchCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {isLoading && <LoadingSpinner asOverlay />}

      {!isLoading && (
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
              value={categories[0].id}
              validators={[VALIDATOR_REQUIRED("This field cannot be empty")]}
            >
              <option>----Please choose category for your product---</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
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

export default memo(FormProductInfo);
