import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import "./Auth.css";

import { FormInput } from "../../shared/components/FormElement/Input";
import FormInputTime from "../../shared/components/FormElement/InputTime";
import CustomFormProvider from "../../shared/components/FormElement/CustomFormProvider";
import ButtonFiled from "../../shared/components/FormElement/Button";
import MainNavigation from "../../shared/components/UIElement/Navigation/MainNavigation";
import Footer from "../../shared/components/Layouts/Footer";

const Auth = () => {
  const methods = useForm({
    mode: "onBlur",
    shouldUnregister: true,
  });

  const [isLoginMode, setIsLoginMode] = useState(false);

  const handleSwitchMode = () => {
    setIsLoginMode((prev) => !prev);
  };

  const onSubmit = (data) => {
    console.log(data);
  };

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
                  <p>This is website auction reputable currently</p>
                  <p>Register to join with us</p>
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
                <h3 className="title">
                  {!isLoginMode ? "Register" : "Login"}
                  <span className="sub-title">
                    You can login using your socials media account or email
                    address.
                  </span>
                </h3>

                <div className="form__auth-socials">
                  <div className="item facebook">
                    <i className="fa-brands fa-facebook icon"></i>
                    <span>Login with Facebook</span>
                  </div>

                  <div className="item google">
                    <i className="fa-brands fa-google icon"></i>
                    <span>Login with Google</span>
                  </div>
                </div>

                <span className="option">OR</span>

                {!isLoginMode && (
                  <div className="form__auth-group">
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
                      required
                      messageRequired="Username cannot be empty"
                    />
                    <FormInput
                      isMui
                      fieldName="accountName"
                      type="text"
                      fullWidth
                      onFocus={() => {}}
                      required
                      label="Account Name"
                    />
                  </div>
                )}

                <div className="form__auth-group">
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

                  {!isLoginMode && (
                    <FormInputTime
                      fieldName="dateOfBirth"
                      dataType="date_timer_picker"
                      label="Date of birth"
                    />
                  )}
                </div>

                {!isLoginMode && (
                  <div className="form__auth-group">
                    <FormInput
                      isMui
                      fieldName="phoneNumber"
                      type="text"
                      fullWidth
                      onFocus={() => {}}
                      required
                      className="mr-4"
                      label="Phone Number"
                      format="phone_number"
                    />

                    <FormInput
                      isMui
                      fieldName="identityNumber"
                      type="text"
                      fullWidth
                      onFocus={() => {}}
                      required
                      label="Identity Number"
                    />
                  </div>
                )}

                <div className="form__auth-group">
                  <FormInput
                    isMui
                    fieldName="password"
                    type="text"
                    fullWidth
                    onFocus={() => {}}
                    className="mr-4"
                    label="Password"
                    requiredForm
                    messageRequired="Password cannot be empty"
                    minLengthForm={6}
                    minLengthMessage="Password at least be 6 characters"
                  />

                  {!isLoginMode && (
                    <FormInput
                      isMui
                      fieldName="confirmPassword"
                      type="text"
                      fullWidth
                      onFocus={() => {}}
                      required
                      label="Confirm Password"
                    />
                  )}
                </div>

                <div className="forget-password">
                  <div className="d-flex align-items-center justify-content-center">
                    <input type="checkbox" />
                    <span>Remember Me</span>
                  </div>

                  <div className="d-flex align-items-center justify-content-center">
                    <Link>Forgot password?</Link>
                  </div>
                </div>

                <div className="footer">
                  <ButtonFiled green fullWidth>
                    {!isLoginMode ? "Register" : "Login"}
                  </ButtonFiled>

                  <p>
                    Already have an account?
                    <span onClick={handleSwitchMode}>
                      {!isLoginMode ? "Login now" : "Register now"}
                    </span>
                  </p>
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
