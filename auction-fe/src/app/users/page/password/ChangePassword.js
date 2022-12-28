import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

import "./FormPassword.css";

import { useHttpClient } from "../../../../shared/hook/http-client";
import { FormInput } from "../../../../shared/components/FormElement/Input";
import ButtonField from "../../../../shared/components/FormElement/Button/ButtonField";
import CustomFormProvider from "../../../../shared/components/FormElement/CustomFormProvider";
import HeaderBreadcrumbs from "../../../../shared/components/UIElement/HeaderBreadcrumbs";
import MainNavigation from "../../../../shared/components/UIElement/Navigation/MainNavigation";
import {
  VALIDATOR_MATCHING,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRED,
} from "../../../../utils/Validator";
import { toast } from "react-toastify";

const ChangePassword = () => {
  /* Token from server to change password */
  const token = useParams().token;

  const methods = useForm();
  const navigate = useNavigate();
  const { sendRequest } = useHttpClient();

  /* Get passwords to validate matching */
  const password = methods.watch("passwordNew");

  useEffect(() => {
    /* Check token existing! */
    try {
      const checkToken = async () => {
        const response = await sendRequest(
          `http://localhost:8080/api/auth/check-token-password/${token}`,
          "GET",
          {},
          {},
          "/"
        );
      };

      checkToken();
    } catch (err) {
      console.error(err);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSendRequest = async (data) => {
    const formData = new FormData();
    formData.append("password", data.passwordNew);
    formData.append("token", token);

    try {
      const response = await sendRequest(
        "http://localhost:8080/api/auth/reset-password",
        "PATCH",
        formData,
        {
          "Content-Type": "application/json",
          "Access-Control-Allow-Methods": "PATCH",
        }
      );

      toast("Update successfully!", { type: "success" });
      navigate("/");
    } catch (err) {}
  };

  return (
    <>
      <MainNavigation noHeaderInner />
      <HeaderBreadcrumbs currentPage="Update Password" />
      <div className="form__password-user-container section">
        <CustomFormProvider {...methods}>
          <form
            className="form__password-user-form"
            onSubmit={methods.handleSubmit(handleSendRequest)}
          >
            <div className="form__password-user-form__header">
              <h3>Form Change Password</h3>
            </div>

            <div className="form__password-user-form__body">
              <span className="title">Create a new secure password.</span>

              <div className="form__password-user-group">
                <FormInput
                  fieldName="passwordNew"
                  isMui
                  type="password"
                  fullWidth
                  endAdornment
                  requiredForm
                  onFocus={() => {}}
                  label="New Password"
                  validators={[
                    VALIDATOR_REQUIRED("Confirm password cannot be empty"),
                    VALIDATOR_MINLENGTH(6, "Password at least 6 characters"),
                  ]}
                />
              </div>

              <div className="form__password-user-group">
                <FormInput
                  isMui
                  fieldName="confirmPassword"
                  type="password"
                  fullWidth
                  onFocus={() => {}}
                  label="Confirm Password"
                  requiredForm
                  endAdornment
                  validators={[
                    VALIDATOR_REQUIRED("Confirm password cannot be empty"),
                    VALIDATOR_MATCHING(password, "Password not matching"),
                    VALIDATOR_MINLENGTH(6, "Password at least 6 characters"),
                  ]}
                />
              </div>
            </div>

            <div className="form__password-user-form__footer">
              <ButtonField type="submit" primary fullWidth>
                Change Password
              </ButtonField>
            </div>
          </form>
        </CustomFormProvider>
      </div>
    </>
  );
};

export default ChangePassword;
