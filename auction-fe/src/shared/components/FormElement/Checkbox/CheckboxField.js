import { Checkbox } from "@mui/material";
import { memo } from "react";
import "./CheckboxField.css";

const CheckboxField = ({
  onChange,
  fontSize,
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
      />
    </>
  );
};

export default memo(CheckboxField);
