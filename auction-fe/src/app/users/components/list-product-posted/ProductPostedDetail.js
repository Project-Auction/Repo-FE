import "./ProductPostedDetail.css";

import { memo, useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

import { useStorageListFiles } from "../../../../firebase/service-firebase";
import { useHttpClient } from "../../../../shared/hook/http-client";
import { FormInput } from "../../../../shared/components/FormElement/Input";
import { UploadMultipleImages } from "../../../../shared/components/FormElement/ImageUploader/ImageUploader";
import {
  VALIDATOR_COMPARE_DATE,
  VALIDATOR_MAX,
  VALIDATOR_MIN,
  VALIDATOR_REQUIRED,
} from "../../../../utils/Validator";
import {
  FormatDateTimeLocal,
  TYPE_DATE_TIME_MONTH,
} from "../../../../shared/format/format-datetime";
import { getCategories } from "../../../../apis/categories";
import Constants from "../../../../utils/Constants";
import ProductPostedDetailPage from "../../page/list-product-posted/ProductPostedDetailPage";
import ButtonField from "../../../../shared/components/FormElement/Button/ButtonField";
import LoadingSpinner from "../../../../shared/components/UIElement/LoadingSpinner/LoadingSpinner";
import SelectField from "../../../../shared/components/FormElement/Select/SelectField";
import FormInputTime from "../../../../shared/components/FormElement/InputTime/FormInputTime";
import TextareaField from "../../../../shared/components/FormElement/TextareaField";

const ProductPostedDetail = () => {
  const productId = useParams().productId;

  const methods = useForm({
    mode: "all",
  });

  const startDateValue = methods.watch("startDate");

  const [product, setProduct] = useState();
  const [categories, setCategories] = useState();

  const {
    handleFetchFiles,
    urls,
    clearUrls,
    isLoading: isLoadingImages,
  } = useStorageListFiles();

  const { sendRequest: sendRequestGetProduct, isLoading: isLoadingGetProduct } =
    useHttpClient({ isAuthor: true, showToast: true });

  const { sendRequest: sendRequestCategory, isLoading: isLoadingCategory } =
    useHttpClient({ showToast: true });

  const fetchCategories = async () => {
    try {
      const retrieveCategories = await getCategories(sendRequestCategory);
      setCategories(retrieveCategories);
    } catch (err) {}
  };

  useEffect(() => {
    try {
      const fetchData = async () => {
        const res = await sendRequestGetProduct({
          url: `http://localhost:8080/api/user/product/product-posted/${productId}`,
          method: "GET",
          urlRedirect: "/error",
        });

        setProduct(res);
      };
      fetchData();
    } catch (error) {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!!product) {
      handleFetchFiles({ nameProduct: product.nameProduct });
    }
    fetchCategories();
    clearUrls();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product]);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      {isLoadingGetProduct && <LoadingSpinner asOverlay />}
      {!isLoadingGetProduct && !!product && (
        <ProductPostedDetailPage>
          <div className="dashboard__right-area-container">
            <h3 className="dashboard__title-user__header">Product Detail</h3>

            <div className="product-posted--detail__container">
              <FormProvider {...methods}>
                <form
                  className="product-posted--detail__form"
                  onSubmit={methods.handleSubmit(onSubmit)}
                >
                  <div className="form__user-group">
                    <FormInput
                      fieldName="nameProduct"
                      label="Product Name (*)"
                      fullWidth
                      onFocus={() => {}}
                      placeholder="Enter product's name"
                      formClass="form__input-post__product-form"
                      defaultValue={product.nameProduct}
                    />

                    <div className="form__user-group d-flex align-items-center">
                      {!isLoadingCategory && categories.length > 0 && (
                        <SelectField
                          fieldName="category"
                          label="Category (*)"
                          fullWidth
                          className="form__input-post__product-form"
                          value={categories[0].id}
                          defaultValue={2}
                          validators={[
                            VALIDATOR_REQUIRED("This field cannot be empty"),
                          ]}
                        >
                          {categories.map((category) => (
                            <option key={category.id} value={category.id}>
                              {category.name}
                            </option>
                          ))}
                        </SelectField>
                      )}

                      <FormInput
                        fieldName="initialPrice"
                        formClass="form__input-post__product-form"
                        fullWidth
                        label="Initial Price (*)"
                        placeholder="Enter Initial Price"
                        onFocus={() => {}}
                        format={Constants.FormInputFormat.MONEY.VALUE}
                        defaultValue={product.initialPrice}
                        validators={[
                          VALIDATOR_REQUIRED("This field cannot be empty"),
                          VALIDATOR_MIN(
                            0,
                            "Initial Price must be between 0 and 10000"
                          ),
                          VALIDATOR_MAX(
                            10000,
                            "Initial Price must be between 0 and 10000"
                          ),
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
                        defaultValue={product.incrementPrice}
                        validators={[
                          VALIDATOR_REQUIRED("This field cannot be empty"),
                          VALIDATOR_MIN(
                            0,
                            "Increment Price must be between 0 and 1000"
                          ),
                          VALIDATOR_MAX(
                            1000,
                            "Increment Price must be between 0 and 1000"
                          ),
                        ]}
                      />
                    </div>

                    <div className="form__user-group d-flex align-items-center">
                      <FormInputTime
                        label="Start Date (*)"
                        fieldName="startDate"
                        dateType="date_timer_picker"
                        className="form__input-post__product-form"
                        defaultValue={FormatDateTimeLocal({
                          value: product.startDate,
                          format: TYPE_DATE_TIME_MONTH,
                        })}
                        validators={[
                          VALIDATOR_REQUIRED("This field cannot be empty"),
                        ]}
                      />
                      <FormInputTime
                        label="End Date (*)"
                        fieldName="endDate"
                        dateType="datetime-local"
                        formClass="ml-4"
                        className="form__input-post__product-form"
                        defaultValue={FormatDateTimeLocal({
                          value: product.endDate,
                          format: TYPE_DATE_TIME_MONTH,
                        })}
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

                  <div className="form__user-group d-flex align-items-center">
                    <TextareaField
                      fieldName="productDescription"
                      label="Product Description (*)"
                      row={5}
                      fullWidth
                      defaultValue={product.productDescription}
                      validators={[
                        VALIDATOR_REQUIRED("This field cannot be empty"),
                      ]}
                    />
                  </div>

                  <div className="form__user-group d-flex align-items-center">
                    {!isLoadingImages && (
                      <UploadMultipleImages
                        data={urls}
                        fieldName="images"
                        className="form__input-post__product__image"
                      />
                    )}
                  </div>

                  <div className="product-posted--detail__footer">
                    <ButtonField dark>Save Product</ButtonField>
                    <ButtonField none borderDark className="ml-4">
                      Reset
                    </ButtonField>
                  </div>
                </form>
              </FormProvider>
            </div>
          </div>
        </ProductPostedDetailPage>
      )}
    </>
  );
};

export default memo(ProductPostedDetail);
