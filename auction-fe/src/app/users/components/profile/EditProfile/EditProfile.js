import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

import "./EditProfile.css";
import Image from "../../../../../shared/components/UIElement/Image";
import ProfileUser from "../../../page/profile/ProfileUser";
import CustomFormProvider from "../../../../../shared/components/FormElement/CustomFormProvider";
import { useForm } from "react-hook-form";
import { FormInput } from "../../../../../shared/components/FormElement/Input";
import ButtonFiled from "../../../../../shared/components/FormElement/Button";

const EditProfile = (props) => {
  const methods = useForm();

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
            <form className="form__edit-profile-body-form">
              <div className="form__edit-profile-body-form__group">
                <FormInput
                  fieldName="fullName"
                  control={methods.control}
                  isMui
                  label="Full Name"
                  onFocus={() => {}}
                  requiredForm
                />

                <FormInput
                  fieldName="email"
                  control={methods.control}
                  isMui
                  label="Email"
                  onFocus={() => {}}
                  requiredForm
                />
              </div>

              <div className="form__edit-profile-body-form__group">
                <FormInput
                  fieldName="fullName"
                  control={methods.control}
                  isMui
                  label="Full Name"
                  onFocus={() => {}}
                  requiredForm
                />

                <FormInput
                  fieldName="email"
                  control={methods.control}
                  isMui
                  label="Email"
                  onFocus={() => {}}
                  requiredForm
                />
              </div>

              <div className="form__edit-profile-body-form__group">
                <FormInput
                  fieldName="fullName"
                  control={methods.control}
                  isMui
                  label="Full Name"
                  onFocus={() => {}}
                  requiredForm
                />

                <FormInput
                  fieldName="email"
                  control={methods.control}
                  isMui
                  label="Email"
                  onFocus={() => {}}
                  requiredForm
                />
              </div>

              <div className="form__edit-profile-body-form__group">
                <FormInput
                  fieldName="fullName"
                  control={methods.control}
                  isMui
                  label="Full Name"
                  onFocus={() => {}}
                  requiredForm
                />

                <FormInput
                  fieldName="email"
                  control={methods.control}
                  isMui
                  label="Email"
                  onFocus={() => {}}
                  requiredForm
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
