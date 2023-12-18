import React from "react";
import { showFormattedDate } from "../utils";
import { IoTrashBinOutline } from "react-icons/io5";
import PropTypes from "prop-types";
import parser from "html-react-parser";
import ArchiveButton from "./ArchiveButton";
import UnarchiveButton from "./UnarchiveButton";
import NotFound from "./NotFound";

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
  if (!id) {
    return <NotFound />;
  }

  return (
    <div>
      <h3 className="detail-page__title">{title}</h3>
      <p className="detail-page__createdAt">{showFormattedDate(createdAt)}</p>
      <p className="detail-page__body">{parser(body)}</p>
      <div className="detail-page__action">
        <button className="action" onClick={() => onDelete(id)} title="Hapus">
          <IoTrashBinOutline />
        </button>
        {archived ? (
          <UnarchiveButton id={id} onUnarchive={onUnarchive} />
        ) : (
          <ArchiveButton id={id} onArchive={onArchive} />
        )}
      </div>
    </div>
  );
};

NoteDetails.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  createdAt: PropTypes.string,
  archived: PropTypes.bool,
  onArchive: PropTypes.func.isRequired,
  onUnarchive: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default NoteDetails;
