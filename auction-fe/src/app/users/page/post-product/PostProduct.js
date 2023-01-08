import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import "./PostProduct.css";
import "../../components/MainUserStyles.css";

import { useStorageFile } from "../../../../firebase/service-firebase";
import { useHttpClient } from "../../../../shared/hook/http-client";
import { getCategoriesById } from "../../../../apis/categories";
import FormProductDetail from "../../components/post-product/FormProductDetail/FormProductDetail";
import FormProductInfo from "../../components/post-product/FormProductInfo/FormProductInfo";
import FormUserInfo from "../../components/post-product/FormUserInfo/FormUserInfo";
import DashboardUser from "../user-dashboard/DashboardUser";
import CustomFormProvider from "../../../../shared/components/FormElement/CustomFormProvider";
import HeaderStep from "../../components/post-product/HeaderStep";
import ButtonField from "../../../../shared/components/FormElement/Button/ButtonField";
import LoadingSpinner from "../../../../shared/components/UIElement/LoadingSpinner/LoadingSpinner";

const PostProduct = (props) => {
  const userId = useParams().userId;
  const userData = JSON.parse(localStorage.getItem("userData"));

  const navigate = useNavigate();

  const { handleStorageFiles, progress } = useStorageFile();

  const { sendRequest: sendRequestPostProduct } = useHttpClient();

  const { sendRequest: sendRequestCategory, isLoading: isLoadingCategory } =
    useHttpClient();

  const { isLoading: isLoadingUserInfo, sendRequest: sendRequestUserInfo } =
    useHttpClient();

  //! Used to check login */
  useEffect(() => {
    if (!userData) {
      navigate("/auth");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //! Used to check login */

  /* Get user info */
  useEffect(() => {
    try {
      const fetchUser = async () => {
        const response = await sendRequestUserInfo({
          url: `http://localhost:8080/api/home/user/${userId}`,
          method: "GET",
        });

        methods.setValue("userName", response.name);
        methods.setValue("phoneNumber", response.phoneNumber);
      };

      fetchUser();
    } catch (err) {
      navigate("/auth");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sendRequestUserInfo, userId]);
  /* Get user info */

  /* Set default value for form */
  const methods = useForm({
    mode: "all",
  });

  const [steps, setSteps] = useState(0);

  /* Send request post product */
  const onSubmit = async (data) => {
    /* Find and get category */
    const categorySelected = await getCategoriesById(
      sendRequestCategory,
      data.category
    );

    try {
      const res = await sendRequestPostProduct({
        url: `http://localhost:8080/api/auth/post-product/${userData.accountId}`,
        method: "POST",
        data: JSON.stringify({
          ...data,
          category: categorySelected,
        }),
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Methods": "POST",
          "Access-Control-Allow-Origin": "*",
        },
      });
      toast("Post Product successfully!", { type: "success" });
      /* Adding images to Firebase just add it after product created successfully */
      data.images.map((file) => handleStorageFiles(file, data.nameProduct));

      navigate(`${userId}/myAds`);
    } catch (err) {
      console.err(err);
    }
  };
  /* Send request post product */

  const handleNextStep = () => {
    setSteps(steps + 1);
  };

  const handlePrevStep = () => {
    setSteps(steps - 1);
  };

  const conditionalComponents = () => {
    switch (steps) {
      case 0:
        return <FormProductInfo />;

      case 1:
        return <FormProductDetail />;

      case 2:
        return <FormUserInfo userId={userId} />;

      default:
        return <FormProductInfo />;
    }
  };

  return (
    <>
      {isLoadingUserInfo && progress !== 100 && <LoadingSpinner asOverlay />}
      {!isLoadingUserInfo && (
        <DashboardUser currentPage="Post Product">
          <div className="form__step-container">
            <header className="form__step-header">
              <h3 className="title">Post Product</h3>
            </header>

            <CustomFormProvider {...methods}>
              <div className="form__user-body">
                <div className="form__step-form-header">
                  <HeaderStep
                    isActive={steps + 1 === 1}
                    numberStep="01"
                    subTitleStep={"Ad Information"}
                  />
                  <HeaderStep
                    isActive={steps + 1 === 2}
                    numberStep="02"
                    subTitleStep={"Ad details"}
                  />
                  <HeaderStep
                    isActive={steps + 1 === 3}
                    numberStep="03"
                    subTitleStep={"User Information"}
                  />
                </div>
                <form
                  className="form__step-form"
                  onSubmit={methods.handleSubmit(onSubmit)}
                >
                  {conditionalComponents()}

                  {/* Footer */}
                  <div className="form__step-form-footer">
                    {steps > 0 && (
                      <ButtonField
                        type="button"
                        onClick={handlePrevStep}
                        className="btn__redirect-form prev"
                      >
                        Prev Step
                      </ButtonField>
                    )}

                    {steps < 2 && (
                      <ButtonField
                        disabled={!methods.formState.isValid}
                        type="button"
                        onClick={handleNextStep}
                        className="btn__redirect-form next"
                        dark
                      >
                        Next Step
                      </ButtonField>
                    )}
                    {steps === 2 && (
                      <ButtonField
                        disabled={!methods.formState.isValid}
                        type="submit"
                        className="btn__redirect-form next"
                        dark
                      >
                        Submit
                      </ButtonField>
                    )}
                  </div>
                  {/* Footer */}
                </form>
              </div>
            </CustomFormProvider>
          </div>
        </DashboardUser>
      )}
    </>
  );
};

export default PostProduct;
