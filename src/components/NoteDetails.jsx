import React from "react";
import { showFormattedDate } from "../utils";
import {
  IoTrashBinOutline,
  IoArrowDownCircleOutline,
  IoArrowUpCircleOutline,
} from "react-icons/io5";
import PropTypes from "prop-types";

const NoteDetails = ({
  id,
  title,
  body,
  createdAt,
  archived,
  onArchive,
  onUnarchive,
  onDelete,
}) => {
  return (
    <div>
      <h3 className="detail-page__title">{title}</h3>
      <p className="detail-page__createdAt">{showFormattedDate(createdAt)}</p>
      <p className="detail-page__body">{body}</p>
      <div className="detail-page__action">
        <button className="action" onClick={() => onDelete(id)} title="Hapus">
          <IoTrashBinOutline />
        </button>
        {archived ? (
          <button
            className="action"
            onClick={() => onUnarchive(id)}
            title="Aktif"
          >
            <IoArrowUpCircleOutline />
          </button>
        ) : (
          <button
            className="action"
            onClick={() => onArchive(id)}
            title="Arsip"
          >
            <IoArrowDownCircleOutline />
          </button>
        )}
      </div>
    </div>
  );
};

NoteDetails.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  onArchive: PropTypes.func.isRequired,
  onUnarchive: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default NoteDetails;
