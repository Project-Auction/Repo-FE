import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

import { Controller, useFormContext } from "react-hook-form";

import "./Select.css";

function SelectField(props) {
  const {
    isMui,
    items,
    fieldName,
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
    value,
    defaultValue,
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
      render={({ field: { onChange }, fieldState: { error } }) => {
        const onChangeValue = (event) => {
          onChange(event.target.value);
        };

        return (
          <>
            {isMui ? (
              <FormControl
                fullWidth={fullWidth}
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
                  value={value}
                  onChange={onChangeValue}
                  variant={variant}
                  error={error}
                  defaultValue={defaultValue}
                >
                  {items.map((item) => (
                    <MenuItem key={item.value} value={item.value}>
                      {item.label}
                    </MenuItem>
                  ))}
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
                  defaultValue={defaultValue}
                  fullWidth={fullWidth}
                >
                  {items.map((item) => (
                    <option key={item.value} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </>
        );
      }}
    />
  );
}

export default SelectField;
