import { useState } from "react";
import { useForm } from "react-hook-form";

import "./PostProduct.css";
import FormProductDetail from "../../components/post-product/FormProductDetail/FormProductDetail";
import FormProductInfo from "../../components/post-product/FormProductInfo/FormProductInfo";
import FormUserInfo from "../../components/post-product/FormUserInfo/FormUserInfo";
import ButtonFiled from "../../../../shared/components/FormElement/Button";
import DashboardUser from "../user-dashboard/DashboardUser";
import CustomFormProvider from "../../../../shared/components/FormElement/CustomFormProvider";
import HeaderStep from "../../components/post-product/HeaderStep";

const PostProduct = (props) => {
  const methods = useForm();

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
        return <FormUserInfo />;

      default:
        return <FormProductInfo />;
    }
  };

  return (
    <>
      <DashboardUser currentPage="Post Product">
        <div className="form__step-container">
          <header className="form__step-header">
            <h3 className="title">Post Product</h3>
          </header>

          <CustomFormProvider {...methods}>
            <div className="form__step-form-body">
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
              </form>
            </div>

            <div className="form__step-form-footer">
              {steps > 0 && (
                <ButtonFiled
                  type="button"
                  onClick={handlePrevStep}
                  className="btn__redirect-form prev"
                >
                  Prev Step
                </ButtonFiled>
              )}

              {steps < 2 && (
                <ButtonFiled
                  type={`${steps < 2 ? "button" : "submit"}`}
                  onClick={handleNextStep}
                  className="btn__redirect-form next"
                  dark
                >
                  Next Step
                </ButtonFiled>
              )}
            </div>
          </CustomFormProvider>
        </div>
      </DashboardUser>
    </>
  );
};

export default PostProduct;
