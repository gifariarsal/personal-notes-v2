import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import NoteList from "../components/NoteList";
import { useSearchParams } from "react-router-dom";
import { getArchivedNotes } from "../utils/api";

function ArchivePage() {
  const [searchParams, setSearchParams] = useSearchParams("");
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState(() => {
    return searchParams.get("title") || "";
  });

  useEffect(() => {
    getArchivedNotes().then(({ data }) => {
      setNotes(data);
    });
  }, []);

  function handleChangeTitle(title) {
    setTitle(title);
    setSearchParams({ title });
  }

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(title.toLowerCase())
  );

  return (
    <section>
      <h2>Catatan Arsip</h2>
      <SearchBar title={title} changeTitle={handleChangeTitle} />
      <NoteList notes={filteredNotes} />
    </section>
  );
}

export default ArchivePage;
