import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

import "./FormInput.css";

import {
  formatCurrency,
  formatPhoneNumber,
} from "../../../format/format-input";
import CustomFormInput from "./CustomFormInput";

import Constants from "../../../../utils/Constants";

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
    required,
    type,
    fullWidth,
    className,
  } = props;

  const { control } = useFormContext();

  return (
    <>
      <Controller
        name={fieldName}
        control={control}
        render={({ field: { onChange, value }, fieldState: { error } }) => {
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
                  helperText={helperText}
                  error={error}
                  value={value}
                  autoComplete={autoComplete}
                  margin={margin}
                  required={required}
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
                  required={required}
                  type={type}
                  value={value}
                />
              )}
            </>
          );
        }}
      />
    </>
  );
};

export default FormInput;
