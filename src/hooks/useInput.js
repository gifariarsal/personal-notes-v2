import { useState } from "react";

function useInput(defaultValue = "") {
  const [value, setValue] = useState(defaultValue);

  const handleChangeValue = (event) => {
    setValue(event.target.value);
  };

  return [value, handleChangeValue];
}

export default useInput;
