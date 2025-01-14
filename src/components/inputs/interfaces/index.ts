import { Dispatch, SetStateAction } from "react";

import { IFilters } from "assets/interfaces";

export interface IInputPlain {
  label: string;
  value: string;
  size?: "small" | "medium";
  className?: any;
  type?: string;
  setValue: Dispatch<SetStateAction<string>>;
  onChange: (value: string) => void;
}

export interface IMultilinePlain {
  label: string;
  value: string;
  size?: "small" | "medium";
  className?: any;
  type?: string;
  setValue: Dispatch<SetStateAction<string>>;
  onChange: (value: string) => void;
}

export interface IDateTimePicker {
  label: string;
  value: string;
  className?: any;
  setValue: Dispatch<SetStateAction<string>>;
  onChange: (value: string) => void;
}

export interface ICheckboxPlain {
  label: string;
  value: string | boolean;
  className?: any;
  setValue: Dispatch<SetStateAction<string>>;
  onChange: (value: string) => void;
}

export interface IInputsStructure {
  fields: IFilters[];
  className?: any;
  variant: "block" | "flex";
  setFieldValue: (value: any, fieldName: string) => void;
}

export interface ISelectPlain {
  label: string;
  value: any;
  size?: "small" | "medium";
  className?: any;
  options: any;
  setValue: Dispatch<SetStateAction<string>>;
  onChange: (value: string) => void;
}
