import { forwardRef } from "react";
import "./Input.css";

const InputFiled = forwardRef((props, ref) => {
  const handleOnChange = (event) => {
    props.onChange(event.target.value);
  };

  const handleOnFocus = () => {
    props.onFocus(true);
  };

  const element =
    props.element === "input" ? (
      <input
        className={`form-input ${props.inputClass}`}
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={handleOnChange}
        required={props.required}
        ref={ref}
        onFocus={handleOnFocus}
      />
    ) : (
      <textarea
        className={`form-input ${props.inputClass}`}
        id={props.id}
        rows={props.rows || 3}
        onChange={handleOnChange}
        required={props.required}
        ref={ref}
        onFocus={handleOnFocus}
      />
    );

  return (
    <div className={`form-wrapper ${props.formClass}`}>
      <label htmlFor={props.id}>{props.label}</label>
      {element}
    </div>
  );
});

export default InputFiled;
