import React from "react";
import { IoAddOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const AddButton = () => {
  return (
    <Link to="/notes/new">
      <button className="action" type="button" title="Buat Catatan">
        <IoAddOutline />
      </button>
    </Link>
  );
};

export default AddButton;
