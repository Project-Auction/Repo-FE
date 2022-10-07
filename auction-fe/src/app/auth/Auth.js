import { useForm } from "react-hook-form";

import "./Auth.css";

import CustomFormProvider from "../../shared/components/FormElement/CustomFormProvider";
import InputFiled from "../../shared/components/FormElement/Input";
import ButtonFiled from "../../shared/components/FormElement/Button";
import MainNavigation from "../../shared/components/UIElement/Navigation/MainNavigation";
import Footer from "../../shared/components/Layouts/Footer";

const Auth = () => {
  const methods = useForm();

  const onSubmit = (data) => {};

  return (
    <>
      <MainNavigation noHeaderInner />

      <div className="form__auth-container">
        <div className="row align-items-center">
          <div className="col-5">
            <div className="form__auth-left-area">
              <div className="form__auth-img-group">
                <img
                  src="https://www.chilindo.com/assets/svgIcon/orangeLandingHeader.svg"
                  alt=""
                />

                <div className="message">
                  <h3>DTU AUCTION</h3>
                  <p>This is a reputable auction site</p>
                  <p>Sign up to join with us</p>
                  <p>
                    If you have any questions. <span>Click here</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-7">
            <CustomFormProvider {...methods}>
              <form
                onSubmit={methods.handleSubmit(onSubmit)}
                className="form__auth-right-area"
              >
                <div className="form__auth-group">
                  <InputFiled
                    fieldName="username"
                    element="input"
                    type="text"
                    fullWidth
                    onFocus={() => {}}
                    required
                    formClass="mr-4"
                    label="Full Name (*)"
                  />

                  <InputFiled
                    fieldName="accountName"
                    element="input"
                    type="text"
                    fullWidth
                    onFocus={() => {}}
                    required
                    label="Account Name (*)"
                  />
                </div>

                <div className="form__auth-group">
                  <InputFiled
                    fieldName="email"
                    element="input"
                    type="email"
                    fullWidth
                    onFocus={() => {}}
                    required
                    formClass="mr-4"
                    label="Email (*)"
                  />

                  <InputFiled
                    fieldName="dateOfBirth"
                    element="input"
                    type="date"
                    fullWidth
                    onFocus={() => {}}
                    required
                    label="Date Of Birth (*)"
                  />
                </div>

                <div className="form__auth-group">
                  <InputFiled
                    fieldName="phoneNumber"
                    element="input"
                    type="text"
                    fullWidth
                    onFocus={() => {}}
                    required
                    formClass="mr-4"
                    label="Phone Number (*)"
                    format="phone_number"
                  />

                  <InputFiled
                   fieldName="identityNumber"
                   element="input"
                   type="text"
                   fullWidth
                   onFocus={() => {}}
                   required
                   label="Identity Number (*)"
                   format="money"
                  />
                </div>

                <div className="form__auth-group">
                  <InputFiled
                    fieldName="password"
                    element="input"
                    type="text"
                    fullWidth
                    onFocus={() => {}}
                    required
                    formClass="mr-4"
                    label="Password (*)"
                  />

                  <InputFiled
                    fieldName="confirmPassword"
                    element="input"
                    type="text"
                    fullWidth
                    onFocus={() => {}}
                    required
                    label="Confirm Password (*)"
                  />
                </div>

                <div className="footer d-flex align-items-center">
                  <ButtonFiled primary fullWidth className="mr-4">
                    REGISTER
                  </ButtonFiled>
                  <ButtonFiled green fullWidth>
                    BACK TO SIGN IN
                  </ButtonFiled>
                </div>
              </form>
            </CustomFormProvider>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Auth;
