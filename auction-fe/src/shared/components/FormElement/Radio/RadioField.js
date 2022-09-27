import {
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
} from "@mui/material";

function Radio(props) {
  /*
   * row is  RadioGroup arranged by row or column
   */

  const handleChange = (event) => {
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
      <FormLabel>{props.label}</FormLabel>
      <RadioGroup row={props.row}>
        {props.items.map((item) => (
          <FormControlLabel
            key={item.value}
            value={item.value}
            control={<Radio />}
            label={item.label}
            disabled={item.disabled}
            onChange={handleChange}
            checked={item.checked}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}

export default Radio;
