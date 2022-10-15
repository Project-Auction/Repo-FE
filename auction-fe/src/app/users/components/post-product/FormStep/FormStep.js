import { useForm } from "react-hook-form";
import CustomFormProvider from "../../../../../shared/components/FormElement/CustomFormProvider/CustomFormProvider";

import HeaderStep from "../HeaderStep";
import "./FormStep.css";
import DashboardUser from "../../../page/user-dashboard/DashboardUser";

const FormStep = (props) => {
  const methods = useForm();

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
                <HeaderStep numberStep="01" isActive subTitleStep={"Ad Information"} />
                <HeaderStep numberStep="02" subTitleStep={"Ad details"} />
                <HeaderStep numberStep="03" subTitleStep={"User Information"} />
              </div>
              <form className="form__step-form">{props.children}</form>
            </div>
          </CustomFormProvider>
        </div>
      </DashboardUser>
    </>
  );
};

export default FormStep;
