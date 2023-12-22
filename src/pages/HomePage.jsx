import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import NoteList from "../components/NoteList";
import AddButton from "../components/AddButton";
import { useSearchParams } from "react-router-dom";
import { getActiveNotes } from "../utils/api";
import Loading from "../components/Loading";
import { LocaleConsumer } from "../contexts/LocaleContext";

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
        const { data } = await getActiveNotes();
        setNotes(data);
      } catch (error) {
        console.error("Error fetching active notes:", error);
      } finally {
        setLoading(false);
      }
    };

    if (!title) {
      fetchActiveNotes();
    }
  }, [title]);

  function handleChangeTitle(title) {
    setTitle(title);
    setSearchParams({ title });
  }

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(title.toLowerCase())
  );

  return (
    <LocaleConsumer>
      {({ locale }) => (
        <section>
          <h2>{locale === "id" ? "Catatan aktif" : "Active notes"}</h2>
          <SearchBar title={title} changeTitle={handleChangeTitle} />
          {loading && !title ? <Loading /> : <NoteList notes={filteredNotes} />}
          <div className="homepage__action">
            <AddButton />
          </div>
        </section>
      )}
    </LocaleConsumer>
  );
}

export default HomePage;
