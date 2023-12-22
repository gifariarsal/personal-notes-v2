import React from "react";
import { useNavigate } from "react-router-dom";
import NoteInput from "../components/NoteInput";
import { addNote } from "../utils/api";

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
