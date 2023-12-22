import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import NoteList from "../components/NoteList";
import AddButton from "../components/AddButton";
import { useSearchParams } from "react-router-dom";
import { getActiveNotes } from "../utils/api";

function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams("");
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState(() => {
    return searchParams.get("title") || "";
  });

  useEffect(() => {
    getActiveNotes().then(({ data }) => {
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
      <h2>Catatan Aktif</h2>
      <SearchBar title={title} changeTitle={handleChangeTitle} />
      <NoteList notes={filteredNotes} />
      <div className="homepage__action">
        <AddButton />
      </div>
    </section>
  );
}

export default HomePage;
