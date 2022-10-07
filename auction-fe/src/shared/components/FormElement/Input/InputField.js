import { forwardRef } from "react";
import { Controller, useFormContext } from "react-hook-form";
import "./Input.css";

import Constants from "../../../../utils/Constants";
import {
  formatCurrency,
  formatPhoneNumber,
} from "../../../format/format-input";

const InputFiled = forwardRef((props, ref) => {
  const {
    fieldName,
    fullWidth,
    inputClass,
    noBorder,
    onFocus,
    element,
    placeholder,
    id,
    type,
    required,
    rows,
    formClass,
    label,
    format,
    readOnly,
  } = props;

  const { control } = useFormContext();

  const classes = `form-input 
  ${fullWidth && "full-width"}
  ${inputClass} 
  ${noBorder && "no-border"}`;

  const handleOnFocus = () => {
    onFocus(true);
  };

  const elementType = (
    <Controller
      name={fieldName}
      control={control}
      render={({ field: { onChange, value = "" }, fieldState: { error } }) => {
        const onChangeValue = (e) => {
          if (format === Constants.FormInputFormat.PHONE_NUMBER.VALUE) {
            value = formatPhoneNumber(e.target.value);
            onChange(value);
          } else if (format === Constants.FormInputFormat.MONEY.VALUE) {
            value = formatCurrency(e.target.value);
            onChange(value);
          } else {
            value = e.target.value;
            onChange(e.target.value);
          }
        };
        return element === "input" ? (
          <>
            <input
              className={classes}
              id={id}
              type={type}
              placeholder={placeholder}
              onChange={onChangeValue}
              required={required}
              ref={ref}
              onFocus={handleOnFocus}
              value={value}
              readOnly={readOnly}
            />
            {!!error && <p className="error">{error.message}</p>}
          </>
        ) : (
          <>
            <textarea
              className={classes}
              id={id}
              rows={rows || 3}
              onChange={onChangeValue}
              required={required}
              ref={ref}
              onFocus={handleOnFocus}
              value={value}
              readOnly={readOnly}
            />
            {!!error && <p className="error">{error.message}</p>}
          </>
        );
      }}
      rules={
        required && {
          required: { value: true, message: "Không được để trống" },
        }
      }
    />
  );

  return (
    <div className={`form-wrapper ${formClass}`}>
      {label && <label htmlFor={id}>{label}</label>}
      {elementType}
    </div>
  );
});

export default InputFiled;
