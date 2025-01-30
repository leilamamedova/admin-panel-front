import React from "react";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDateTimePicker } from "@mui/x-date-pickers/MobileDateTimePicker";
import dayjs from "dayjs";

import InputContainer from "components/inputs/InputContainer";
import { IDateTimePicker } from "components/inputs/interfaces";
import { unFormatDate } from "utils/Utils";

const DateTimePicker = ({
  label,
  value,
  className,
  setValue,
  onChange,
}: IDateTimePicker): React.ReactElement => {
  const handleChange = (fulldate): void => {
    const date = unFormatDate(fulldate?.$d ?? null);

    setValue(date);
    onChange(date);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MobileDateTimePicker
        ampm={false}
        format='DD-MM-YYYY HH:mm'
        label={label}
        value={value ? dayjs(value) : null}
        onChange={(e) => handleChange(e)}
        className={className}
        closeOnSelect={false}
        sx={{
          ".MuiInputBase-input": {
            height: 10,
          },
        }}
      />
    </LocalizationProvider>
  );
};

export default InputContainer(DateTimePicker);
