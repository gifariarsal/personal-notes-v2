import React from "react";
import NoteItem from "./NoteItem";

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

export default NoteList;
