import { useState } from "react";

const InputContainer = (Component) => (props) => {
  const [value, setValue] = useState<any>(props.value);

  return <Component {...props} value={value} setValue={setValue} />;
};

export default InputContainer;
