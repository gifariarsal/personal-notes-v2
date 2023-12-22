import React from "react";
import NoteItem from "./NoteItem";
import PropTypes from "prop-types";
import { LocaleConsumer } from "../contexts/LocaleContext";

const NoteList = ({ notes }) => {
  return (
    <LocaleConsumer>
      {({ locale }) => {
        return (
          <>
            {notes.length > 0 ? (
              <section className="notes-list">
                <NoteItem notes={notes} />
              </section>
            ) : (
              <section className="notes-list-empty">
                <p>{locale === "id" ? "Tidak ada catatan" : "No notes"}</p>
              </section>
            )}
          </>
        );
      }}
    </LocaleConsumer>
  );
};

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NoteList;
