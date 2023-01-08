import "./FormChangePassword.css";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

import { FormInput } from "../../../../shared/components/FormElement/Input";
import { useHttpClient } from "../../../../shared/hook/http-client";
import ButtonField from "../../../../shared/components/FormElement/Button/ButtonField";
import CustomFormProvider from "../../../../shared/components/FormElement/CustomFormProvider";
import ChangePasswordPage from "../../page/password-auth/ChangePasswordPage";
import {
  VALIDATOR_MATCHING,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRED,
} from "../../../../utils/Validator";
import LoadingSpinner from "../../../../shared/components/UIElement/LoadingSpinner/LoadingSpinner";

const FormChangePassword = (props) => {
  /* Get user id to change password */
  const userId = useParams().userId;
  const methods = useForm();
  const {
    sendRequest: sendRequestMatchingPwd,
    error: errorMatchPwd,
    clearError: clearMatchPwd,
  } = useHttpClient(false);

  const {
    sendRequest: sendRequestSubmit,
    isLoading: isLoadingSubmit,
    error: errorSubmit,
    clearError: clearErrorSubmit,
  } = useHttpClient(false);

  const password = methods.watch("newPassword");

  const onSubmit = async (data) => {
    const formDataMatchPwd = new FormData();
    const formDataSubmit = new FormData();

    formDataMatchPwd.append("oldPassword", data.oldPassword);
    formDataSubmit.append("newPassword", data.newPassword);

    clearErrorSubmit();
    clearMatchPwd();

    try {
      const [response1, response2] = await Promise.all([
        sendRequestMatchingPwd({
          url: `http://localhost:8080/api/auth/matching-password/${userId}`,
          method: "POST",
          data: formDataMatchPwd,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Methods": "POST",
          },
        }),
        sendRequestSubmit({
          url: `http://localhost:8080/api/auth/update-password/${userId}`,
          method: "PATCH",
          data: formDataSubmit,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Methods": "PATCH",
          },
        }),
      ]);
      methods.reset();
      toast("Change password successfully!", { type: "success" });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {isLoadingSubmit && <LoadingSpinner asOverlay />}
      <ChangePasswordPage>
        <div className="dashboard__right-area-container">
          <h3 className="dashboard__title-user__header">Change Password</h3>

          <CustomFormProvider {...methods}>
            <form
              className="form__user-body"
              onSubmit={methods.handleSubmit(onSubmit)}
            >
              <div className="form__user-group small">
                <FormInput
                  fieldName="oldPassword"
                  type="password"
                  fullWidth
                  onFocus={() => {}}
                  label="Old Password"
                  requiredForm
                  endAdornment
                  autoComplete="false"
                  alertDanger={errorMatchPwd}
                  validators={[
                    VALIDATOR_REQUIRED("Password cannot be empty"),
                    VALIDATOR_MINLENGTH(6, " Password at least 6 characters"),
                  ]}
                />
              </div>

              <div className="form__user-group small">
                <FormInput
                  fieldName="newPassword"
                  type="password"
                  fullWidth
                  onFocus={() => {}}
                  label="New Password"
                  requiredForm
                  endAdornment
                  autoComplete="false"
                  alertDanger={errorSubmit}
                  validators={[
                    VALIDATOR_REQUIRED("Password cannot be empty"),
                    VALIDATOR_MINLENGTH(6, " Password at least 6 characters"),
                  ]}
                />
              </div>

              <div className="form__user-group small">
                <FormInput
                  fieldName="confirmPassword"
                  type="password"
                  fullWidth
                  onFocus={() => {}}
                  label="Confirm New Password"
                  requiredForm
                  endAdornment
                  autoComplete="false"
                  validators={[
                    VALIDATOR_REQUIRED("Password cannot be empty"),
                    VALIDATOR_MINLENGTH(6, " Password at least 6 characters"),
                    VALIDATOR_MATCHING(password, "Password not matching"),
                  ]}
                />
              </div>

              <div className="form__user-group d-flex align-items-center">
                <ButtonField type="submit" primary className="btn__submit">
                  Update Profile
                </ButtonField>
                <ButtonField to="/confirm-email" none className="ml-4">
                  I forgot my password
                </ButtonField>
              </div>
            </form>
          </CustomFormProvider>
        </div>
      </ChangePasswordPage>
    </>
  );
};

export default FormChangePassword;
