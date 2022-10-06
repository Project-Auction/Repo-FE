import { forwardRef } from "react";
import { Controller, useFormContext } from "react-hook-form";
import "./Input.css";

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
  } = props;

  const { control } = useFormContext();

  const classes = `form-input 
  ${fullWidth && "full-width"}
  ${inputClass} 
  ${noBorder && "no-border"}`;

  const elementType = (
    <Controller
      name={fieldName}
      control={control}
      render={({ field: { onChange }, fieldState: { error } }) => {
        const onChangeValue = (e) => {
          onChange(e.target.value);
        };

        const handleOnFocus = () => {
          onFocus(true);
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
      <label htmlFor={id}>{label}</label>
      {elementType}
    </div>
  );
});

export default InputFiled;
