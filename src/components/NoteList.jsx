import React from "react";
import NoteItem from "./NoteItem";
import PropTypes from "prop-types";

const NoteList = ({ notes }) => {
  return (
    <>
      {notes.length > 0 ? (
        <section className="notes-list">
          <NoteItem notes={notes} />
        </section>
      ) : (
        <section className="notes-list-empty">
          <p>Tidak ada catatan</p>
        </section>
      )}
    </>
  );
};

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NoteList;
