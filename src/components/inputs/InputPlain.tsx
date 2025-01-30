import React from "react";

import { TextField } from "@mui/material";

import InputContainer from "components/inputs/InputContainer";
import { IInputPlain } from "components/inputs/interfaces";

const InputPlain = ({
  label,
  size,
  value,
  className,
  type,
  setValue,
  onChange,
}: IInputPlain): React.ReactElement => {
  const handleChange = (event): void => {
    const value = event.target.value;

    setValue(value);
    onChange(value);
  };

  return (
    <TextField
      label={label}
      size={size ?? "medium"}
      type={type ?? "text"}
      value={value || ""}
      onChange={(e) => handleChange(e)}
      className={className}
      inputProps={{
        min: 0,
      }}
    />
  );
};

export default InputContainer(InputPlain);
