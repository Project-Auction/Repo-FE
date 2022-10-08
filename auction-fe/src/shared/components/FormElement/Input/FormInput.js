import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

import "./FormInput.css";

import {
  formatCurrency,
  formatPhoneNumber,
} from "../../../format/format-input";
import CustomFormInput from "./CustomFormInput";

import Constants from "../../../../utils/Constants";
import { validateEmail } from "../../../../utils/validate_form";

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
  } = props;

  const { control } = useFormContext();

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
                  onChange={onChangeValue}
                  helperText={helperText || (!!error && error.message)}
                  error={!!error}
                  value={value}
                  autoComplete={autoComplete}
                  margin={margin}
                  fullWidth={fullWidth}
                  className={className}
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
