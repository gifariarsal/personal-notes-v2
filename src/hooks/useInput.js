import { useState } from "react";
import PropTypes from "prop-types";

function useInput(defaultValue = "") {
  const [value, setValue] = useState(defaultValue);

  const handleChangeValue = (event) => {
    setValue(event.target.value);
  };

  return [value, handleChangeValue];
}

useInput.propTypes = {
  defaultValue: PropTypes.string,
};

export default useInput;
