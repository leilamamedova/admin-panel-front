import React from "react";

import { Checkbox, FormControlLabel } from "@mui/material";

import InputContainer from "components/containers/inputContainer";
import { ICheckboxPlain } from "components/inputs/interfaces";

const CheckboxPlain = ({
  label,
  value,
  className,
  setValue,
  onChange,
}: ICheckboxPlain): React.ReactElement => {
  const checked = Boolean(value);

  const handleChange = (_event, value): void => {
    setValue(value);
    onChange(value);
  };

  return (
    <FormControlLabel
      label={label}
      control={<Checkbox checked={checked} onChange={handleChange} />}
      className={className}
    />
  );
};

export default InputContainer(CheckboxPlain);

CheckboxPlain.displayName = "CheckboxPlain";
