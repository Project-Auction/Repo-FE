import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

import "./PostProduct.css";
import "../../components/MainUserStyles.css";

import FormProductDetail from "../../components/post-product/FormProductDetail/FormProductDetail";
import FormProductInfo from "../../components/post-product/FormProductInfo/FormProductInfo";
import FormUserInfo from "../../components/post-product/FormUserInfo/FormUserInfo";
import DashboardUser from "../user-dashboard/DashboardUser";
import CustomFormProvider from "../../../../shared/components/FormElement/CustomFormProvider";
import HeaderStep from "../../components/post-product/HeaderStep";
import ButtonField from "../../../../shared/components/FormElement/Button/ButtonField";
import { useHttpClient } from "../../../../shared/hook/http-client";
import LoadingSpinner from "../../../../shared/components/UIElement/LoadingSpinner/LoadingSpinner";

const PostProduct = (props) => {
  const userId = useParams().userId;

  const navigate = useNavigate();

  const { isLoading, sendRequest } = useHttpClient();
  useEffect(() => {
    const fetchUser = async () => {
      const response = await sendRequest(
        `http://localhost:8080/api/home/user/${userId}`,
        "GET"
      );

      methods.setValue("userName", response.name);
      methods.setValue("phoneNumber", response.phoneNumber);
    };

    fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sendRequest, userId]);

  /* Used to check login */
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));

    if (!userData) {
      navigate("/auth");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* Set default value for form */
  const methods = useForm({
    mode: "all",
  });

  const [steps, setSteps] = useState(0);

  const onSubmit = (data) => {
    console.log(data);
  };

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
      {isLoading && <LoadingSpinner asOverlay />}
      {!isLoading && (
        <DashboardUser userId={userId} currentPage="Post Product">
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
