import "./ProductPostedDetail.css";
import { memo, useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

import { FormInput } from "../../../../shared/components/FormElement/Input";
import { UploadMultipleImages } from "../../../../shared/components/FormElement/ImageUploader/ImageUploader";
import ProductPostedDetailPage from "../../page/list-product-posted/ProductPostedDetailPage";
import ButtonField from "../../../../shared/components/FormElement/Button/ButtonField";
import { useStorageListFiles } from "../../../../firebase/service-firebase";
import LoadingSpinner from "../../../../shared/components/UIElement/LoadingSpinner/LoadingSpinner";
import { useHttpClient } from "../../../../shared/hook/http-client";

const ProductPostedDetail = () => {
  const productId = useParams().productId;
  const methods = useForm();

  const [product, setProduct] = useState();

  const { handleFetchFiles, urls, clearUrls, isLoading } =
    useStorageListFiles();

  const { sendRequest: sendRequestGetProduct, isLoading: isLoadingGetProduct } =
    useHttpClient({ isAuthor: true, showToast: true });

  useEffect(() => {
    try {
      const fetchData = async () => {
        const res = sendRequestGetProduct({
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
    handleFetchFiles({ nameProduct: "Macbook M1" });
    clearUrls();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {(isLoading || isLoadingGetProduct) && <LoadingSpinner asOverlay />}
      {!isLoading && !isLoadingGetProduct && (
        <ProductPostedDetailPage>
          <div className="dashboard__right-area-container">
            <h3 className="dashboard__title-user__header">Product Detail</h3>

            <div className="product-posted--detail__container">
              <FormProvider {...methods}>
                <form className="product-posted--detail__form">
                  <div className="form__user-group">
                    <FormInput
                      fieldName="nameProduct"
                      label="Product Name (*)"
                      fullWidth
                      onFocus={() => {}}
                      placeholder="Enter product's name"
                      formClass="form__input-post__product-form"
                    />

                    <div className="form__user-group d-flex align-items-center">
                      <FormInput
                        fieldName="nameProduct"
                        label="Category (*)"
                        fullWidth
                        onFocus={() => {}}
                        placeholder="Enter product's name"
                        formClass="form__input-post__product-form"
                      />

                      <FormInput
                        fieldName="nameProduct"
                        label="Product Name (*)"
                        fullWidth
                        onFocus={() => {}}
                        placeholder="Enter product's name"
                        formClass="form__input-post__product-form"
                      />
                    </div>

                    <div className="form__user-group d-flex align-items-center">
                      <FormInput
                        fieldName="nameProduct"
                        label="Category (*)"
                        fullWidth
                        onFocus={() => {}}
                        placeholder="Enter product's name"
                        formClass="form__input-post__product-form"
                      />

                      <FormInput
                        fieldName="nameProduct"
                        label="Product Name (*)"
                        fullWidth
                        onFocus={() => {}}
                        placeholder="Enter product's name"
                        formClass="form__input-post__product-form"
                      />
                    </div>
                  </div>

                  <div className="form__user-group d-flex align-items-center">
                    {!isLoading && (
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
