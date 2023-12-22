import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import NoteList from "../components/NoteList";
import { useSearchParams } from "react-router-dom";
import { getArchivedNotes } from "../utils/api";
import Loading from "../components/Loading";

function ArchivePage() {
  const [searchParams, setSearchParams] = useSearchParams("");
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState(() => {
    return searchParams.get("title") || "";
  });

  useEffect(() => {
    const fetchArchivedNotes = async () => {
      try {
        const { data } = await getArchivedNotes();
        setNotes(data);
      } catch (error) {
        console.error("Error fetching archived notes:", error);
      } finally {
        setLoading(false);
      }
    };

    if (!title) {
      fetchArchivedNotes();
    }
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
      {loading ? <Loading /> : <NoteList notes={filteredNotes} />}
    </section>
  );
}

export default ArchivePage;
