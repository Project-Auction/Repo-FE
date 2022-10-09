import { IconButton, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

import "./FormInput.css";

import {
  formatCurrency,
  formatPhoneNumber,
} from "../../../format/format-input";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import { validateEmail } from "../../../../utils/validate_form";
import CustomFormInput from "./CustomFormInput";
import Constants from "../../../../utils/Constants";
import { useState } from "react";

const FormInput = (props) => {
  const {
    isMui,
    fieldName,
    defaultValue,
    placeholder,
    variant,
    format,
    label,
    helperText,
    autoComplete,
    margin,
    readOnly,
    noBorder,
    type,
    fullWidth,
    className,
    requiredForm,
    messageRequired,
    minLengthForm,
    minLengthMessage,
    maxLengthForm,
    maxLengthMessage,
    emailRequired,
    matchingMessage,
    endAdornment
  } = props;
  const { control } = useFormContext();

  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setIsShowPassword((prev) => !prev);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Controller
        name={fieldName}
        control={control}
        render={({
          field: { onChange, value = "" },
          fieldState: { error },
        }) => {
          const onChangeValue = (e) => {
            if (format === Constants.FormInputFormat.PHONE_NUMBER.VALUE) {
              value = formatPhoneNumber(e.target.value);
              onChange(e.target.value);
            } else if (format === Constants.FormInputFormat.MONEY.VALUE) {
              value = formatCurrency(e.target.value);
              onChange(e.target.value);
            } else {
              value = e.target.value;
              onChange(e.target.value);
            }
          };

          return (
            <>
              {isMui ? (
                <TextField
                  label={label}
                  variant={variant}
                  placeholder={placeholder}
                  defaultValue={defaultValue}
                  type={isShowPassword ? "text" : "password"}
                  onChange={onChangeValue}
                  helperText={helperText || (!!error && error.message)}
                  error={!!error}
                  value={value}
                  autoComplete={autoComplete}
                  margin={margin}
                  fullWidth={fullWidth}
                  className={className}
                  InputProps={
                    endAdornment && {
                      endAdornment: (
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {!isShowPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      ),
                    }
                  }
                />
              ) : (
                <CustomFormInput
                  label={label}
                  readOnly={readOnly}
                  onChange={onChangeValue}
                  defaultValue={defaultValue}
                  error={error}
                  noBorder={noBorder}
                  required={requiredForm}
                  type={type}
                  value={value}
                />
              )}
            </>
          );
        }}
        rules={{
          validate: {
            validateRequired: (value) => {
              if (!value) {
                return requiredForm && messageRequired;
              }
            },
            validateEmail: (value) => {
              if (emailRequired) {
                return validateEmail(value) || "Email is invalid";
              }
            },
            validateMinlength: (value) => {
              if (!!minLengthForm && value.length < minLengthForm) {
                return minLengthMessage;
              }
            },
            validateMatch: (value) => {
              if (!!matchingMessage) {
              }
            },
            validateMaxLength: (value) => {
              if (!!maxLengthForm && value.length < maxLengthForm) {
                return maxLengthMessage;
              }
            },
          },
        }}
      />
    </>
  );
};

export default FormInput;
