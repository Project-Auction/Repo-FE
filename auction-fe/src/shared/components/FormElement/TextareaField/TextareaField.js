import { Controller, useFormContext } from "react-hook-form";
import { validateForm } from "../../../../utils/Validator";
import "../Input/Input.css";

const TextareaField = (props) => {
  const {
    fieldName,
    fullWidth,
    inputClass,
    noBorder,
    placeholder,
    id,
    required,
    rows,
    formClass,
    label,
    readOnly,
    validators = [],
    alertDanger,
  } = props;

  const { control } = useFormContext();

  const classes = `form-text-area 
  ${fullWidth && "full-width"}
  ${inputClass} 
  ${noBorder && "no-border"}`;

  const elementType = (
    <Controller
      name={fieldName}
      control={control}
      rules={{
        validate: {
          validate: (value) => {
            if (validators.length >= 1) {
              return validateForm(value, validators);
            }
          },
        },
      }}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        const onChangeValue = (e) => {
          onChange(e.target.value);
        };

        return (
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
            {(alertDanger || error) && (
              <div className="alert alert-danger">
                {alertDanger || error.message}
              </div>
            )}
          </>
        );
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
