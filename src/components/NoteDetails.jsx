import React from "react";
import { showFormattedDate } from "../utils";
import { IoTrashBinOutline } from "react-icons/io5";

const NoteDetails = ({ id, title, body, createdAt, archived, onDelete }) => {
  return (
    <div>
      <h3 className="detail-page__title">{title}</h3>
      <p className="detail-page__createdAt">{showFormattedDate(createdAt)}</p>
      <p className="detail-page__body">{body}</p>
      <div className="detail-page__action">
        <button className="action" onClick={() => onDelete(id)} title="Hapus">
            <IoTrashBinOutline />
        </button>
      </div>
    </div>
  );
};

export default NoteDetails;
