import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { forwardRef, memo, useState } from "react";
import "./Input.css";

const CustomFormInput = forwardRef((props, ref) => {
  const {
    label,
    type,
    value,
    inputRef,
    placeholder,
    onFocus,
    onChange,
    required,
    readOnly,
    error,
    fullWidth,
    noBorder,
    id,
    formClass,
    inputClass,
    alertDanger,
    hiddenPassword,
  } = props;

  const handleOnFocus = () => {
    onFocus(true);
  };

  /* Set status for hidden password */
  const [isHidden, setIsHidden] = useState(true);

  const handleChangeStatus = () => {
    setIsHidden((status) => !status);
  };

  const classes = `form-input__group
  ${noBorder && "no-border"}
  ${(!!error || !!alertDanger) && "error"}`;

  const classesInput = `form-input 
  ${fullWidth && "full-width"}
  ${inputClass}`;

  return (
    <div className={`form-wrapper ${formClass}`}>
      {label && <label htmlFor={id}>{label}</label>}

      <div className={`${classes}`}>
        <input
          className={classesInput}
          id={id}
          ref={inputRef}
          type={hiddenPassword ? (isHidden ? "password" : "text") : type}
          placeholder={placeholder}
          onChange={onChange}
          required={required}
          onFocus={handleOnFocus}
          value={value}
          readOnly={readOnly}
        />
        {hiddenPassword && isHidden && (
          <FontAwesomeIcon
            icon={faEye}
            className="icon-password"
            onClick={handleChangeStatus}
          />
        )}
        {hiddenPassword && !isHidden && (
          <FontAwesomeIcon
            icon={faEyeSlash}
            className="icon-password"
            onClick={handleChangeStatus}
          />
        )}
      </div>
      {(alertDanger || error) && (
        <div className="alert alert-danger">{alertDanger || error.message}</div>
      )}
    </div>
  );
});

export default memo(CustomFormInput);
