import { useForm } from "react-hook-form";

import "./ConfirmEmail.css";

import { FormInput } from "../../../../shared/components/FormElement/Input";
import { VALIDATOR_EMAIL } from "../../../../utils/Validator";
import ButtonField from "../../../../shared/components/FormElement/Button/ButtonField";
import CustomFormProvider from "../../../../shared/components/FormElement/CustomFormProvider";
import Footer from "../../../../shared/components/Layouts/Footer";
import HeaderBreadcrumbs from "../../../../shared/components/UIElement/HeaderBreadcrumbs";
import MainNavigation from "../../../../shared/components/UIElement/Navigation/MainNavigation";

const ConfirmEmail = () => {
  const methods = useForm();

  return (
    <>
      <MainNavigation noHeaderInner />
      <HeaderBreadcrumbs currentPage="Confirm Email" />

      <div className="confirm__email-user-container section">
        <CustomFormProvider {...methods}>
          <form className="confirm__email-user-form">
            <div className="confirm__email-user-form__header">
              <h3>Find Your Account</h3>
            </div>

            <div className="confirm__email-user-form__body">
              <span className="title">
                Please enter your email address to search for your account
              </span>

              <FormInput
                fieldName="emailConfirm"
                isMui
                type="email"
                fullWidth
                onFocus={() => {}}
                placeholder="Enter email address"
                validators={[VALIDATOR_EMAIL("Email is invalid")]}
              />
            </div>

            <div className="confirm__email-user-form__footer">
              <ButtonField to="/auth">Cancel</ButtonField>
              <ButtonField type="submit" primary>
                Search
              </ButtonField>
            </div>
          </form>
        </CustomFormProvider>
      </div>

      <Footer />
    </>
  );
};

export default ConfirmEmail;
