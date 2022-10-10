import { Controller, useFormContext } from "react-hook-form";
import "../Input/Input.css";

const TextareaField = (props) => {
  const {
    fieldName,
    fullWidth,
    inputClass,
    noBorder,
    onFocus,
    placeholder,
    id,
    type,
    required,
    messageRequired,
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
  const elementType = (
    <Controller
      name={fieldName}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        const onChangeValue = (e) => {
          onChange(e.target.value);
        };

        <>
          <textarea
            className={classes}
            id={id}
            rows={rows || 3}
            onChange={onChangeValue}
            required={required}
            onFocus={() => {}}
            value={value}
            placeholder={placeholder}
            readOnly={readOnly}
          />
          {!!error && <p className="error">{error.message}</p>}
        </>;
      }}
    />
  );

  return (
    <div className={`form-wrapper ${formClass}`}>
      {label && <label htmlFor={id}>{label}</label>}
      {elementType}
    </div>
  );
};

export default TextareaField;
