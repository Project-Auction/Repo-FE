import { useForm } from "react-hook-form";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import "./EditProfile.css";
import Image from "../../../../../shared/components/UIElement/Image";
import ProfileUser from "../../../page/profile/ProfileUser";
import CustomFormProvider from "../../../../../shared/components/FormElement/CustomFormProvider";
import { FormInput } from "../../../../../shared/components/FormElement/Input";
import ButtonFiled from "../../../../../shared/components/FormElement/Button";
import FormInputTime from "../../../../../shared/components/FormElement/InputTime";

const EditProfile = (props) => {
  const formSchema = Yup.object().shape({
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password")],
      "Password not matching"
    ),
  });

  const methods = useForm({
    mode: "onChange",
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <ProfileUser>
      <div className="form__edit-profile-container">
        <header className="form__edit-profile-header">
          <h3>Profile Settings</h3>
        </header>

        <div className="form__edit-profile-body">
          <div className="form__edit-profile-body__avatar">
            <Image
              src="https://demo.graygrids.com/themes/classigrids-demo/assets/images/dashboard/user-image.jpg"
              alt="Avatar"
              className="image"
              circle
            />

            <FontAwesomeIcon icon={faCamera} className="icon" />
          </div>

          <CustomFormProvider {...methods}>
            <form
              className="form__edit-profile-body-form"
              onSubmit={methods.handleSubmit(onSubmit)}
            >
              <div className="form__edit-profile-body-form__group">
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
                  messageRequired="Username cannot be empty"
                  minLengthForm={6}
                  minLengthMessage="Username at least 6 characters"
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
                  messageRequired="Account name cannot be empty"
                  minLengthForm={6}
                  minLengthMessage="Account name at least 6 characters"
                />
              </div>

              <div className="form__edit-profile-body-form__group">
                <FormInput
                  isMui
                  fieldName="email"
                  type="email"
                  fullWidth
                  onFocus={() => {}}
                  className="mr-4"
                  label="Email"
                  requiredForm
                  messageRequired="Email cannot be empty"
                  minLengthForm={6}
                  minLengthMessage="Email at least be 6 characters"
                  emailRequired
                />

                <FormInputTime
                  fieldName="dateOfBirth"
                  dataType="date_timer_picker"
                  label="Date of birth"
                  requiredForm
                  messageRequired="Date of birth cannot be empty"
                />
              </div>

              <div className="form__edit-profile-body-form__group">
                <FormInput
                  isMui
                  fieldName="phoneNumber"
                  type="text"
                  fullWidth
                  onFocus={() => {}}
                  className="mr-4"
                  label="Phone Number"
                  format="phone_number"
                  requiredForm
                  messageRequired="Phone number cannot be empty"
                  minLengthForm={9}
                  minLengthMessage="Phone number at least be 9 characters"
                />

                <FormInput
                  isMui
                  fieldName="identityNumber"
                  type="text"
                  fullWidth
                  onFocus={() => {}}
                  label="Identity Number"
                  format="identity_card"
                  requiredForm
                  messageRequired="Identity number cannot be empty"
                  minLengthForm={9}
                  minLengthMessage="Identity number at least be 9 characters"
                />
              </div>

              <ButtonFiled type="submit" primary className="btn__submit">
                Update Profile
              </ButtonFiled>
            </form>
          </CustomFormProvider>
        </div>
      </div>
    </ProfileUser>
  );
};

export default EditProfile;
