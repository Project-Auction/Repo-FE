import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

const CheckboxField = (props) => {
  const handleOnChange = (event) => {
    props.onChange(event.target.value);
  };

  <FormControl>
    <FormLabel>{props.label}</FormLabel>
    <RadioGroup row={props.row}>
      {props.items.map((item) => (
        <FormControlLabel
          key={item.id}
          value={item.name || item.value}
          control={<Radio />}
          disabled={props.disabled}
          onChange={handleOnChange}
          checked={item.checked}
        />
      ))}
    </RadioGroup>
  </FormControl>;
};

export default CheckboxField;
