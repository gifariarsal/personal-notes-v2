import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import NoteList from "../components/NoteList";
import AddButton from "../components/AddButton";
import { useSearchParams } from "react-router-dom";
import { getActiveNotes } from "../utils/api";
import Loading from "../components/Loading";

function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams("");
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState(() => {
    return searchParams.get("title") || "";
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchActiveNotes = async () => {
      try {
        setLoading(true);
        const { data } = await getActiveNotes();
        setNotes(data);
      } catch (error) {
        console.error("Error fetching active notes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchActiveNotes();
  }, [title]);

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
      {loading ? (
        <Loading />
      ) : (
        <NoteList notes={filteredNotes} />
      )}
      <div className="homepage__action">
        <AddButton />
      </div>
    </section>
  );
}

export default HomePage;
