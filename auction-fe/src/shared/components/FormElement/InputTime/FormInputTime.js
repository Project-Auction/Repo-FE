import { forwardRef } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { validateForm } from "../../../../utils/Validator";

import "../Input/FormInput.css";

const FormInputTime = forwardRef((props, ref) => {
  /*
   * dateType to choose date or datetimepicker
   */
  const {
    fieldName,
    label,
    dateType,
    inputRef,
    placeholder,
    required,
    readOnly,
    error,
    fullWidth,
    noBorder,
    id,
    formClass,
    inputClass,
    alertDanger,
    validators = [],
  } = props;
  const { control } = useFormContext();

  const classes = `form-input__group
  ${noBorder && "no-border"}
  ${(!!error || !!alertDanger) && "error"}`;

  const classesInput = `form-input 
  ${fullWidth && "full-width"}
  ${inputClass}`;

  return (
    <>
      <Controller
        name={fieldName}
        control={control}
        render={({
          field: { onChange, value = "" },
          fieldState: { error },
        }) => {
          return (
            <>
              <div className={`form-wrapper ${formClass}`}>
                {label && <label htmlFor={id}>{label}</label>}

                <div className={`${error && "error"} ${classes}`}>
                  <input
                    className={classesInput}
                    id={id}
                    ref={inputRef}
                    type={dateType === "date" ? "date" : "datetime-local"}
                    placeholder={placeholder}
                    onChange={onChange}
                    required={required}
                    value={value}
                    readOnly={readOnly}
                  />
                </div>
                {(alertDanger || error) && (
                  <div className="alert alert-danger">
                    {alertDanger || error.message}
                  </div>
                )}
              </div>
            </>
          );
        }}
        rules={{
          validate: {
            validate: (value) => {
              if (validators.length >= 1) {
                return validateForm(value, validators);
              }
            },
          },
        }}
      />
    </>
  );
});

export default FormInputTime;
