import { forwardRef, useState } from "react";
import { TextField } from "@mui/material";
import {
  DateTimePicker,
  DesktopDatePicker,
  LocalizationProvider,
} from "@mui/x-date-pickers";
import { Controller, useFormContext } from "react-hook-form";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import "../Input/FormInput.css";
import { formatDate } from "../../../format/format-input";

const FormInputTime = forwardRef((props, ref) => {
  /*
   * dateType to choose date or datetimepicker
   */
  const {
    fieldName,
    label,
    inputFormat = "DD/MM/YYYY",
    dateType,
    className,
  } = props;

  const { control } = useFormContext();

  const [value, setValue] = useState(Date.now());

  return (
    <>
      <Controller
        name={fieldName}
        control={control}
        render={({ field: { onChange }, fieldState }) => {
          const onChangeValue = (newValue) => {
            setValue(newValue);
            onChange(formatDate(newValue.toString()));
          };

          return (
            <>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                {dateType === "date_timer_picker" ? (
                  <DateTimePicker
                    label={label}
                    onError={(error) => console.error(error.message)}
                    onChange={onChangeValue}
                    value={value}
                    inputRef={ref}
                    renderInput={(params) => <TextField {...params} />}
                    className={className}
                    {...fieldState}
                  />
                ) : (
                  <DesktopDatePicker
                    label={label}
                    inputFormat={inputFormat}
                    value={value}
                    inputRef={ref}
                    onError={(error) => console.error(error.message)}
                    onChange={onChangeValue}
                    renderInput={(params) => <TextField {...params} />}
                    className={className}
                    {...fieldState}
                  />
                )}
              </LocalizationProvider>
            </>
          );
        }}
      />
    </>
  );
});

export default FormInputTime;
