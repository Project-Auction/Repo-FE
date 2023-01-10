import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { memo } from "react";

function RadioField(props) {
  /*
   * row is  RadioGroup arranged by row or column
   * set defaultValue for form default value
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
      <RadioGroup row={props.row} defaultValue={props.defaultValue}>
        {!props.list && (
          <FormControlLabel
            key={props.name}
            value={props.name}
            control={<Radio />}
            label={props.labelInput}
            disabled={props.disabled}
            onChange={handleChange}
            checked={props.checked}
          />
        )}

        {props.list > 0 &&
          props.items.map((item) => (
            <FormControlLabel
              key={item.value}
              value={item.value || item.name}
              control={<Radio />}
              label={item.labelInput}
              disabled={item.disabled}
              onChange={handleChange}
              checked={item.checked}
            />
          ))}
      </RadioGroup>
    </FormControl>
  );
}

export default memo(RadioField);
