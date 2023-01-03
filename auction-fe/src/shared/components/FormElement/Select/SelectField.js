import { FormControl, FormHelperText, InputLabel, Select } from "@mui/material";

import { Controller, useFormContext } from "react-hook-form";
import { validateForm } from "../../../../utils/Validator";

import "./Select.css";

function SelectField(props) {
  const {
    fieldName,
    validators = [],
    children,
    isMui,
    defaultValue,
    id,
    fullWidth,
    width,
    minWidth,
    height,
    minHeight,
    m,
    disabled,
    variant,
    label,
    helperText,
    className,
  } = props;

  const { control } = useFormContext();

  const classes = `form--select ${className}
  ${fullWidth && "full--width"}`;

  return (
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
      render={({
        field: { onChange, value = defaultValue || "" },
        fieldState: { error },
      }) => {
        const onChangeValue = (event) => {
          onChange(event.target.value);
        };

        return (
          <>
            {isMui ? (
              <FormControl
                fullWidth={fullWidth}
                className={className}
                sx={{
                  width: width,
                  minWidth: minWidth,
                  height: height,
                  minHeight: minHeight,
                  m: m,
                }}
                disabled={disabled}
                error={error}
              >
                <InputLabel id={id} variant={variant}>
                  {label}
                </InputLabel>
                <Select
                  id={id}
                  label={label}
                  onChange={onChangeValue}
                  variant={variant}
                  error={error}
                  value={value || defaultValue}
                >
                  {children}
                </Select>
                <FormHelperText>
                  {helperText || (error && error.message)}
                </FormHelperText>
              </FormControl>
            ) : (
              <div className={classes}>
                <label htmlFor={id}>{label}</label>
                <select
                  onChange={onChangeValue}
                  onError={error}
                  value={value || defaultValue}
                >
                  {children}
                </select>
                {error && (
                  <div className="alert alert-danger">{error.message}</div>
                )}
              </div>
            )}
          </>
        );
      }}
    />
  );
}

export default SelectField;
