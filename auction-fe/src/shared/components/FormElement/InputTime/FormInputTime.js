import { useState } from "react";
import { TextField } from "@mui/material";
import {
  DateTimePicker,
  DesktopDatePicker,
  LocalizationProvider,
} from "@mui/x-date-pickers";
import { Controller, useFormContext } from "react-hook-form";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import "../Input/FormInput.css";

const FormInputTime = (props) => {
  /*
   * dateType to choose date or datetimepicker
   */
  const {
    fieldName,
    label,
    inputFormat = "DD/MM/YYYY",
    dateType,
    ref,
    className,
  } = props;

  const { control } = useFormContext();

  const [value, setValue] = useState(Date.now());

  return (
    <>
      <Controller
        name={fieldName}
        control={control}
        render={({ field: { onChange }, fieldState: { error } }) => {
          const onChangeValue = (newValue) => {
            setValue(newValue);
            onChange(newValue.toString());
          };

          return (
            <>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                {dateType === "date_timer_picker" ? (
                  <DateTimePicker
                    label={label}
                    onError={true}
                    onChange={onChangeValue}
                    value={value}
                    inputRef={ref}
                    renderInput={(params) => <TextField {...params} />}
                    className={className}
                  />
                ) : (
                  <DesktopDatePicker
                    label={label}
                    inputFormat={inputFormat}
                    value={value}
                    inputRef={ref}
                    onChange={onChangeValue}
                    renderInput={(params) => <TextField {...params} />}
                    className={className}
                  />
                )}
              </LocalizationProvider>
            </>
          );
        }}
      />
    </>
  );
};

export default FormInputTime;
