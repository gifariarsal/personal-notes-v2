import React from "react";
import { showFormattedDate } from "../utils";
import { Link } from "react-router-dom";
import parser from "html-react-parser";
import PropTypes from "prop-types";

const NoteItem = ({ notes }) => {
  return (
    <>
      {notes.map((note) => (
        <article className="note-item" key={note.id}>
          <h3 className="note-item__title">
            <Link to={`/notes/${note.id}`}>{note.title}</Link>
          </h3>
          <p className="note-item__createdAt">
            {showFormattedDate(note.createdAt)}
          </p>
          <p className="note-item__body">{parser(note.body)}</p>
        </article>
      ))}
    </>
  );
};

NoteItem.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NoteItem;
