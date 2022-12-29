import "./FormChangePassword.css";
import { useForm } from "react-hook-form";

import { FormInput } from "../../../../shared/components/FormElement/Input";
import ButtonField from "../../../../shared/components/FormElement/Button/ButtonField";
import CustomFormProvider from "../../../../shared/components/FormElement/CustomFormProvider";
import ChangePasswordPage from "../../page/password-auth/ChangePasswordPage";
import {
  VALIDATOR_MATCHING,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRED,
} from "../../../../utils/Validator";

const FormChangePassword = (props) => {
  const methods = useForm();

  const password = methods.watch("newPassword");

  const onSubmit = (data) => {};

  return (
    <ChangePasswordPage>
      <div className="dashboard__right-area-container">
        <h3 className="dashboard__title-user__header">Profile Settings</h3>

        <CustomFormProvider {...methods}>
          <form
            className="form__user-body"
            onSubmit={methods.handleSubmit(onSubmit)}
          >
            <div className="form__user-group small">
              <FormInput
                isMui
                fieldName="oldPassword"
                type="password"
                fullWidth
                onFocus={() => {}}
                label="Old Password"
                requiredForm
                endAdornment
                autoComplete="false"
                validators={[
                  VALIDATOR_REQUIRED("Password cannot be empty"),
                  VALIDATOR_MINLENGTH(6, " Password at least 6 characters"),
                ]}
              />
            </div>

            <div className="form__user-group small">
              <FormInput
                isMui
                fieldName="passwordNew"
                type="password"
                fullWidth
                onFocus={() => {}}
                label="New Password"
                requiredForm
                endAdornment
                autoComplete="false"
                validators={[
                  VALIDATOR_REQUIRED("Password cannot be empty"),
                  VALIDATOR_MINLENGTH(6, " Password at least 6 characters"),
                ]}
              />
            </div>

            <div className="form__user-group small">
              <FormInput
                isMui
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

            <div className="form__user-group">
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
  );
};

export default FormChangePassword;
