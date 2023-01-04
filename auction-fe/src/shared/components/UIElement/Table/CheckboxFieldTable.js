import CheckboxField from "../../FormElement/Checkbox/CheckboxField";

const CheckboxFieldTable = ({
  onChange,
  item,
  pos,
  fontSize,
  color,
  checkedColor,
  checked,
}) => {
  return <CheckboxField fontSize color checked checkedColor onChange />;
};

export default CheckboxFieldTable;
