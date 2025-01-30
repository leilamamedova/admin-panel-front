import React from "react";

import { TextField } from "@mui/material";

import InputContainer from "components/inputs/InputContainer";
import { IMultilinePlain } from "components/inputs/interfaces";

const MultilinePlain = ({
  label,
  size,
  value,
  className,
  type,
  setValue,
  onChange,
}: IMultilinePlain): React.ReactElement => {
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
      multiline
      rows={4}
      value={value || ""}
      onChange={(e) => handleChange(e)}
      className={className}
    />
  );
};

export default InputContainer(MultilinePlain);
