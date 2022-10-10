import { forwardRef } from "react";
import "./Input.css";

const CustomFormInput = forwardRef((props, ref) => {
  const {
    formClass,
    id,
    label,
    type,
    placeholder,
    onChange,
    required,
    readOnly,
    onFocus,
    value,
    error,
    fullWidth,
    inputClass,
    noBorder,
    defaultValue,
  } = props;

  const handleOnFocus = () => {
    onFocus(true);
  };

  const classes = `form-input 
  ${fullWidth && "full-width"}
  ${inputClass} 
  ${noBorder && "no-border"}`;

  return (
    <div className={`form-wrapper ${formClass}`}>
      {label && <label htmlFor={id}>{label}</label>}

      <input
        className={classes}
        id={id}
        ref={ref}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
        onFocus={handleOnFocus}
        value={value}
        readOnly={readOnly}
        defaultValue={defaultValue}
      />
      {!!error && <p className="error">{error.message}</p>}
    </div>
  );
});

export default CustomFormInput;
