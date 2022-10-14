import { IconButton, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

import "./FormInput.css";

import {
  formatCurrency,
  formatIdentityCard,
  formatPhoneNumber,
} from "../../../format/format-input";
import { forwardRef, useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import { validateEmail } from "../../../../utils/validate_form";
import CustomFormInput from "./CustomFormInput";
import Constants from "../../../../utils/Constants";

const FormInput = forwardRef((props, ref) => {
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
    endAdornment,
    onFocus,
    inputClass,
    formClass,
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
              onChange(value);
            } else if (format === Constants.FormInputFormat.MONEY.VALUE) {
              value = formatCurrency(e.target.value);
              onChange(value);
            } else if (
              format === Constants.FormInputFormat.IDENTITY_CARD.VALUE
            ) {
              value = formatIdentityCard(e.target.value);
              onChange(value);
            } else {
              value = e.target.value;
              onChange(value);
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
                  type={
                    (!endAdornment && "text") ||
                    (isShowPassword && endAdornment ? "text" : "password")
                  }
                  required={requiredForm}
                  ref={ref}
                  onChange={onChangeValue}
                  helperText={helperText || (!!error && error.message)}
                  error={!!error}
                  value={value}
                  autoComplete={autoComplete}
                  margin={margin}
                  fullWidth={fullWidth}
                  className={className}
                  InputProps={
                    ({ classes: inputClass },
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
                    })
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
                  fullWidth={fullWidth}
                  onFocus={onFocus}
                  ref={ref}
                  inputClass={inputClass}
                  formClass={formClass}
                  placeholder={placeholder}
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
});

export default FormInput;
