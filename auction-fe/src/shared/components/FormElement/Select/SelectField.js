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
  } = props;

  const { control } = useFormContext();

  return (
    <Controller
      name={fieldName}
      control={control}
      render={({ field: { onChange }, fieldState: { error } }) => {
        const handleOnChange = (event) => {
          onChange(event.target.value);
        };

        return (
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
              onChange={handleOnChange}
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
        );
      }}
      rules={{
        required: {
          value: true,
          message: "Không được để trống",
        },
      }}
    />
  );
}

export default SelectField;
