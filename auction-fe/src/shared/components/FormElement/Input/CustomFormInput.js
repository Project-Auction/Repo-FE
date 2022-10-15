import { forwardRef } from "react";
import "./Input.css";

const CustomFormInput = forwardRef((props, ref) => {
  const {
    label,
    type,
    defaultValue,
    inputRef,
    placeholder,
    onFocus,
    onChange,
    required,
    readOnly,
    value,
    error,
    fullWidth,
    noBorder,
    id,
    formClass,
    inputClass,
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
        ref={inputRef}
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
