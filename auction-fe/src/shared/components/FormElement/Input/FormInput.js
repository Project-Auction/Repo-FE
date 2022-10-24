import { IconButton, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

import "./FormInput.css";

import {
  formatCurrentUS,
  formatIdentityCard,
  formatPhoneNumber,
} from "../../../format/format-input";
import { forwardRef, useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import CustomFormInput from "./CustomFormInput";
import Constants from "../../../../utils/Constants";
import { validateForm } from "../../../../utils/Validator";

const FormInput = forwardRef((props, ref) => {
  const {
    validators = [],
    fieldName,
    defaultValue,
    placeholder,
    isMui = false,
    variant,
    format,
    label,
    helperText,
    autoComplete,
    margin,
    readOnly = false,
    noBorder,
    type,
    fullWidth,
    className,
    requiredForm,
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
        control={control}
        name={fieldName}
        rules={{
          validate: {
            validate: (value) => {
              if (validators.length >= 1) {
                return validateForm(value, validators);
              }
            },
          },
        }}
        render={({
          field: { onChange, value = "", ref },
          fieldState: { error },
        }) => {
          const onChangeValue = (e) => {
            onChange(e.target.value);
          };

          const convertValue = (val) => {
            if (format === Constants.FormInputFormat.PHONE_NUMBER.VALUE) {
              return formatPhoneNumber(val);
            } else if (format === Constants.FormInputFormat.MONEY.VALUE) {
              return formatCurrentUS(val);
            } else if (
              format === Constants.FormInputFormat.IDENTITY_CARD.VALUE
            ) {
              return formatIdentityCard(val);
            } else {
              return val;
            }
          };

          return (
            <>
              {isMui ? (
                <TextField
                  label={label}
                  inputRef={ref}
                  placeholder={placeholder}
                  defaultValue={defaultValue}
                  type={
                    (!endAdornment && "text") ||
                    (isShowPassword && endAdornment ? "text" : "password")
                  }
                  ref={ref}
                  onChange={onChangeValue}
                  helperText={helperText || (!!error && error.message)}
                  error={!!error}
                  value={convertValue(value)}
                  autoComplete={autoComplete}
                  margin={margin}
                  fullWidth={fullWidth}
                  className={className}
                  variant={variant}
                  required={requiredForm}
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
                  inputRef={ref}
                  onChange={onChangeValue}
                  defaultValue={defaultValue}
                  value={value}
                  error={error}
                  noBorder={noBorder}
                  required={requiredForm}
                  type={type}
                  fullWidth={fullWidth}
                  readOnly={readOnly}
                  onFocus={onFocus}
                  formClass={formClass}
                  inputClass={inputClass}
                  placeholder={placeholder}
                />
              )}
            </>
          );
        }}
      />
    </>
  );
});

export default FormInput;
