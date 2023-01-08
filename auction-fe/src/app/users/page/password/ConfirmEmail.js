import "./FormPassword.css";

import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import { useHttpClient } from "../../../../shared/hook/http-client";
import { FormInput } from "../../../../shared/components/FormElement/Input";
import { VALIDATOR_EMAIL } from "../../../../utils/Validator";
import ButtonField from "../../../../shared/components/FormElement/Button/ButtonField";
import CustomFormProvider from "../../../../shared/components/FormElement/CustomFormProvider";
import Footer from "../../../../shared/components/Layouts/Footer";
import HeaderBreadcrumbs from "../../../../shared/components/UIElement/HeaderBreadcrumbs";
import MainNavigation from "../../../../shared/components/UIElement/Navigation/MainNavigation";
import LoadingSpinner from "../../../../shared/components/UIElement/LoadingSpinner/LoadingSpinner";

const ConfirmEmail = () => {
  const methods = useForm();
  const { sendRequest, isLoading } = useHttpClient();

  const handleSendRequest = async (data) => {
    try {
      const formData = new FormData();
      formData.append("email", data.emailConfirm);

      const response = await sendRequest({
        url: "http://localhost:8080/api/auth/forgot-password",
        method: "POST",
        data: formData,
      });

      toast(
        "We have sent the link to reset password. Please check your email!",
        { type: "success" }
      );
    } catch (err) {}
  };

  return (
    <>
      {isLoading && <LoadingSpinner asOverlay />}
      <MainNavigation noHeaderInner />
      <HeaderBreadcrumbs currentPage="Confirm Email" />

      <div className="form__password-user-container section">
        <CustomFormProvider {...methods}>
          <form
            className="form__password-user-form"
            onSubmit={methods.handleSubmit(handleSendRequest)}
          >
            <div className="form__password-user-form__header">
              <h3>Find Your Account</h3>
            </div>

            <div className="form__password-user-form__body">
              <span className="title">
                Enter the email associated with your account and we'll send you
                to link reset password.
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

            <div className="form__password-user-form__footer">
              <ButtonField type="submit" primary fullWidth>
                Confirm
              </ButtonField>
            </div>
            <p className="text">
              <span>Already have an account?</span>
              <Link to="/auth">Sign In</Link>
            </p>
          </form>
        </CustomFormProvider>
      </div>

      <Footer />
    </>
  );
};

export default ConfirmEmail;
