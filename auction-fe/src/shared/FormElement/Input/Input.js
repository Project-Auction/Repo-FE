import { FormControl, TextField } from "@mui/material";

import "./Input.css";

function Input(props) {
  console.log(props.label);
  const handleOnChange = (event) => {
    props.onChange(event.target.value);
  };

  return (
    <FormControl fullWidth={props.fullWidth}>
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

export default Input;
