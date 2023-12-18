import React from "react";
import PropTypes from "prop-types";
import { IoArrowDownCircleOutline } from "react-icons/io5";

const ArchiveButton = ({ id, onArchive }) => {
  return (
    <button className="action" onClick={() => onArchive(id)} title="Arsip">
      <IoArrowDownCircleOutline />
    </button>
  );
};

ArchiveButton.propTypes = {
  id: PropTypes.string.isRequired,
  onArchive: PropTypes.func.isRequired,
};

export default ArchiveButton;
