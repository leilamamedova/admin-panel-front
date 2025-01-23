import React, { useState } from "react";

import { deepClone } from "utils/Utils";

const InputContainer = (Component) => {
  return function WithInputContainer({ ...props }) {
    const [value, setValue] = useState<any>(props.value);

    const childrenProps = deepClone(props);
    childrenProps.setValue = setValue;
    childrenProps.value = value;

    return <Component {...childrenProps} />;
  };
};

export default InputContainer;
