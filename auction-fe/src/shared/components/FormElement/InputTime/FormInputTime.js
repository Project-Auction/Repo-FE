import { useState } from "react";
import { TextField } from "@mui/material";
import {
  DateTimePicker,
  DesktopDatePicker,
  LocalizationProvider,
} from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import { Controller, useFormContext } from "react-hook-form";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import "../Input/FormInput.css";

const FormInputTime = (props) => {
  const { fieldName, label, inputFormat = "DD/MM/YYYY", dateType } = props;

  const { control } = useFormContext();

  const [value, setValue] = useState(dayjs());

  return (
    <>
      <Controller
        name={fieldName}
        control={control}
        render={({ field: { onChange } }) => {
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
                    onChange={onChangeValue}
                    value={value}
                    renderInput={(params) => <TextField {...params} />}
                  />
                ) : (
                  <DesktopDatePicker
                    label={label}
                    inputFormat={inputFormat}
                    value={value}
                    onChange={onChangeValue}
                    renderInput={(params) => <TextField {...params} />}
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
