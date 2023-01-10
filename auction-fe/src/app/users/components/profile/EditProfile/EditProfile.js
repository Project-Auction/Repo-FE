import { useForm } from "react-hook-form";

import "./EditProfile.css";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRED,
} from "../../../../../utils/Validator";
import ProfileUser from "../../../page/profile/ProfileUser";
import CustomFormProvider from "../../../../../shared/components/FormElement/CustomFormProvider";
import { FormInput } from "../../../../../shared/components/FormElement/Input";
import ButtonField from "../../../../../shared/components/FormElement/Button";
import FormInputTime from "../../../../../shared/components/FormElement/InputTime";
import { UploadImage } from "../../../../../shared/components/FormElement/ImageUploader/ImageUploader";
import Constants from "../../../../../utils/Constants";
import { memo } from "react";

const EditProfile = (props) => {
  const methods = useForm({
    mode: "onChange",
    defaultValues: {},
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleGetUrlImage = (value) => {
    console.log(value);
  };

  return (
    <ProfileUser>
      <div className="dashboard__right-area-container">
        <h3 className="dashboard__title-user__header">Profile Settings</h3>

        <div className="form__edit-profile-body">
          <div className="form__edit-profile-body__avatar">
            <UploadImage
              onInput={handleGetUrlImage}
              className="form__edit-profile-body__avatar-img"
            />
          </div>

          <CustomFormProvider {...methods}>
            <form
              className="form__edit-profile-body-form"
              onSubmit={methods.handleSubmit(onSubmit)}
            >
              <div className="form__user-group d-flex-align-items-center">
                <FormInput
                  isMui
                  variant="outlined"
                  fieldName="username"
                  type="text"
                  fullWidth
                  onFocus={() => {}}
                  label="Full Name"
                  noBorder
                  className="mr-4"
                  requiredForm
                  validators={[
                    VALIDATOR_REQUIRED("Full name cannot be empty"),
                    VALIDATOR_MINLENGTH(9, "Full name at least 9 characters"),
                  ]}
                />

                <FormInput
                  isMui
                  fieldName="accountName"
                  type="text"
                  fullWidth
                  onFocus={() => {}}
                  required
                  label="Account Name"
                  requiredForm
                  validators={[
                    VALIDATOR_REQUIRED("Account name cannot be empty"),
                    VALIDATOR_MINLENGTH(
                      9,
                      "Account name at least 9 characters"
                    ),
                  ]}
                />
              </div>

              <div className="form__user-group d-flex-align-items-center">
                <FormInput
                  defaultValue="heelo"
                  isMui
                  fieldName="email"
                  type="email"
                  fullWidth
                  onFocus={() => {}}
                  className="mr-4"
                  label="Email"
                  requiredForm
                  validators={[
                    VALIDATOR_REQUIRED("Email cannot be empty"),
                    VALIDATOR_MINLENGTH(9, "Email at least 9 characters"),
                    VALIDATOR_EMAIL("Email is invalid"),
                  ]}
                />

                <FormInputTime
                  fieldName="dateOfBirth"
                  dataType="date_timer_picker"
                  label="Date of birth"
                  requiredForm
                  validators={[
                    VALIDATOR_REQUIRED("Date of birth cannot be empty"),
                  ]}
                />
              </div>

              <div className="form__user-group d-flex-align-items-center">
                <FormInput
                  isMui
                  fieldName="phoneNumber"
                  type="text"
                  fullWidth
                  onFocus={() => {}}
                  className="mr-4"
                  label="Phone Number"
                  format={Constants.FormInputFormat.PHONE_NUMBER.VALUE}
                  requiredForm
                  validators={[
                    VALIDATOR_REQUIRED("Phone number cannot be empty"),
                    VALIDATOR_MINLENGTH(
                      9,
                      "Phone number at least 9 characters"
                    ),
                  ]}
                />

                <FormInput
                  isMui
                  fieldName="identityNumber"
                  type="text"
                  fullWidth
                  onFocus={() => {}}
                  label="Identity Number"
                  format={Constants.FormInputFormat.IDENTITY_CARD.VALUE}
                  requiredForm
                  validators={[
                    VALIDATOR_REQUIRED("Identity numbers cannot be empty"),
                    VALIDATOR_MINLENGTH(
                      9,
                      "Identity numbers at least 9 characters"
                    ),
                  ]}
                />
              </div>

              <ButtonField type="submit" primary className="btn__submit">
                Update Profile
              </ButtonField>
            </form>
          </CustomFormProvider>
        </div>
      </div>
    </ProfileUser>
  );
};

export default memo(EditProfile);
