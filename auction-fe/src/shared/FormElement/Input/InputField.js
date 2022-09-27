import { FormControl, TextField } from "@mui/material";

import "./Input.css";

function InputFiled(props) {
  const handleOnChange = (event) => {
    props.onChange(event.target.value);
  };

  return (
    <FormControl
      fullWidth={props.fullWidth}
      disabled={props.disabled}
      error={props.error}
      sx={{
        width: props.width,
        minWidth: props.minWidth,
        height: props.height,
        minHeight: props.minHeight,
        m: props.m,
      }}
    >
      <TextField
        variant={props.variant}
        onChange={handleOnChange}
        onBlur={props.onBlur}
        label={props.label}
        required={props.required}
        error={props.error}
        id={props.id}
        defaultValue={props.defaultValue}
        helperText={
          props.helperText || (props.error && props.detailError.message)
        }
        fullWidth={props.fullWidth}
        type={props.type}
        placeholder={props.placeholder}
        autoComplete={props.autoComplete}
        multiline={props.multiline}
        rows={props.rows}
        margin={props.margin}
        inputProps={{ className: `form-input ${props.inputClass}` }}
      />
    </FormControl>
  );
}

export default InputFiled;
