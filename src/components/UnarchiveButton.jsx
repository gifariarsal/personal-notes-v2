import React from "react";
import PropTypes from "prop-types";
import { IoArrowUpCircleOutline } from "react-icons/io5";

const UnarchiveButton = ({ id, onUnarchive }) => {
  return (
    <button className="action" onClick={() => onUnarchive(id)} title="Aktif">
      <IoArrowUpCircleOutline />
    </button>
  );
};

UnarchiveButton.propTypes = {
  id: PropTypes.string.isRequired,
  onUnarchive: PropTypes.func.isRequired,
};

export default UnarchiveButton;
