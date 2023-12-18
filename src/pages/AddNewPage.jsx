import React from "react";
import { useNavigate } from "react-router-dom";
import { addNote } from "../utils/local-data";
import NoteInput from "../components/NoteInput";

const AddNewPage = () => {
  const navigate = useNavigate();

  const handleAddNote = (note) => {
    addNote(note);
    navigate("/");
  };
  return (
    <section className="add-new-page">
      <NoteInput onAddNote={handleAddNote} />
    </section>
  );
};

export default AddNewPage;
