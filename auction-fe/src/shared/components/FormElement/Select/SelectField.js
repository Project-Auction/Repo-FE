import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

function SelectField(props) {
  const handleChange = (event) => {
    props.onChange(event.target.value);
  };

  return (
    <FormControl
      fullWidth={props.fullWidth}
      sx={{
        width: props.width,
        minWidth: props.minWidth,
        height: props.height,
        minHeight: props.minHeight,
        m: props.m,
      }}
      disabled={props.disabled}
      error={props.error}
    >
      <InputLabel id={props.id} variant={props.variant}>
        {props.label}
      </InputLabel>
      <Select
        id={props.id}
        label={props.label}
        value={props.value}
        onChange={handleChange}
        variant={props.variant}
        error={props.error}
        defaultValue={props.defaultValue}
      >
        {props.items.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>
        {props.helperText || (props.error && props.detailError.message)}
      </FormHelperText>
    </FormControl>
  );
}

export default SelectField;
