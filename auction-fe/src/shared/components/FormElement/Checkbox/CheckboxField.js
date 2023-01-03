import { Checkbox } from "@mui/material";
import "./CheckboxField.css";

const CheckboxField = ({
  onChange,
  fontSize,
  defaultChecked,
  disabled,
  color,
  checkedColor,
  icon,
  checkedIcon,
  checked,
}) => {
  return (
    <>
      <Checkbox
        onChange={onChange}
        sx={{
          "& .MuiSvgIcon-root": { fontSize: fontSize ? fontSize : 16 },
          color: color,
          "&.Mui-checked": {
            color: checkedColor,
          },
        }}
        disabled={disabled}
        icon={icon}
        checkedIcon={checkedIcon}
        checked={checked}
        defaultChecked={defaultChecked}
      />
    </>
  );
};

export default CheckboxField;
