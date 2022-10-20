import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import "./Auth.css";

import { FormInput } from "../../shared/components/FormElement/Input";
import FormInputTime from "../../shared/components/FormElement/InputTime";
import CustomFormProvider from "../../shared/components/FormElement/CustomFormProvider";
import ButtonFiled from "../../shared/components/FormElement/Button";
import MainNavigation from "../../shared/components/UIElement/Navigation/MainNavigation";
import Footer from "../../shared/components/Layouts/Footer";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MATCHING,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRED,
} from "../../utils/Validator";
import { useHttpClient } from "../../shared/hook/http-client";
import RegionDropdown from "./RegionDropdown";

const Auth = () => {
  const methods = useForm({
    mode: "onChange",
    shouldUnregister: true,
  });

  const { sendRequest, error, isLoading, clearError } = useHttpClient();

  const [isLoginMode, setIsLoginMode] = useState(false);

  /* Get passwords to validate matching */
  const password = methods.watch("password");

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
                      fieldName="username"
                      type="text"
                      fullWidth
                      onFocus={() => {}}
                      label="Full Name"
                      requiredForm
                      noBorder
                      className="mr-4"
                      variant="outlined"
                      validators={[
                        VALIDATOR_REQUIRED("Full name cannot be empty"),
                        VALIDATOR_MINLENGTH(
                          9,
                          "Full name at least 9 characters"
                        ),
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
                    validators={[
                      VALIDATOR_REQUIRED("Email cannot be empty"),
                      VALIDATOR_MINLENGTH(9, "Email at least 9 characters"),
                      VALIDATOR_EMAIL("Email is invalid"),
                    ]}
                  />

                  {!isLoginMode && (
                    <FormInputTime
                      fieldName="dateOfBirth"
                      dataType="date_timer_picker"
                      label="Date of birth"
                      requiredForm
                      validators={[
                        VALIDATOR_REQUIRED("Date of birth cannot be empty"),
                      ]}
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
                      className="mr-4"
                      label="Phone Number"
                      format="phone_number"
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
                      format="identity_card"
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
                    endAdornment
                    validators={[
                      VALIDATOR_REQUIRED("Password cannot be empty"),
                      VALIDATOR_MINLENGTH(6, "Password at least 6 characters"),
                    ]}
                  />

                  {!isLoginMode && (
                    <FormInput
                      isMui
                      fieldName="confirmPassword"
                      type="text"
                      fullWidth
                      onFocus={() => {}}
                      label="Confirm Password"
                      requiredForm
                      endAdornment
                      validators={[
                        VALIDATOR_REQUIRED("Confirm password cannot be empty"),
                        VALIDATOR_MATCHING(password, "Password not matching"),
                        VALIDATOR_MINLENGTH(
                          6,
                          "Password at least 6 characters"
                        ),
                      ]}
                    />
                  )}
                </div>

                {/* Region */}
                <RegionDropdown />
                {/* Region */}

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
                  <ButtonFiled type="submit" green fullWidth>
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
