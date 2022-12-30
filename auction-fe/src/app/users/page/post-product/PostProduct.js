import { useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

import "./PostProduct.css";
import "../../components/MainUserStyles.css";
import FormProductDetail from "../../components/post-product/FormProductDetail/FormProductDetail";
import FormProductInfo from "../../components/post-product/FormProductInfo/FormProductInfo";
import FormUserInfo from "../../components/post-product/FormUserInfo/FormUserInfo";
import DashboardUser from "../user-dashboard/DashboardUser";
import CustomFormProvider from "../../../../shared/components/FormElement/CustomFormProvider";
import HeaderStep from "../../components/post-product/HeaderStep";
import FooterPostProduct from "./FooterPostProduct";

const PostProduct = (props) => {
  const userId = useParams().userId;

  const methods = useForm({});

  const [steps, setSteps] = useState(0);

  const onSubmit = (data) => {
    console.log("click");
    console.log(data);
  };

  const handleNextStep = () => {
    setSteps(steps + 1);
  };

  const handlePrevStep = () => {
    setSteps(steps - 1);
  };

  const renderFooter = () => {
    return (
      <FooterPostProduct
        steps={steps}
        handleNextStep={handleNextStep}
        handlePrevStep={handlePrevStep}
      />
    );
  };

  const conditionalComponents = () => {
    switch (steps) {
      case 0:
        return <FormProductInfo>{renderFooter()}</FormProductInfo>;

      case 1:
        return <FormProductDetail>{renderFooter()}</FormProductDetail>;

      case 2:
        return <FormUserInfo>{renderFooter()}</FormUserInfo>;

      default:
        return <FormProductInfo />;
    }
  };

  return (
    <>
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
              </form>
            </div>
          </CustomFormProvider>
        </div>
      </DashboardUser>
    </>
  );
};

export default PostProduct;
