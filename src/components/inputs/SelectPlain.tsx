import React from "react";

import { TextField } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";

import InputContainer from "components/inputs/InputContainer";
import { ISelectPlain } from "components/inputs/interfaces";

const SelectPlain = ({
  label,
  size,
  value,
  className,
  options,
  setValue,
  onChange,
}: ISelectPlain): React.ReactElement => {
  const handleChange = (_event, newValue): void => {
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <Autocomplete
      options={options}
      getOptionLabel={(option) => option.name}
      renderInput={(params) => <TextField {...params} label={label} />}
      defaultValue={typeof value == "string" ? null : value}
      onChange={handleChange}
      size={size}
      className={className}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
    />
  );
};

export default InputContainer(SelectPlain);
