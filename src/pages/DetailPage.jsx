import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NoteDetails from "../components/NoteDetails";
import NotFound from "../components/NotFound";
import { archiveNote, deleteNote, getNote, unarchiveNote } from "../utils/api";
import Loading from "../components/Loading";

function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchNote = async () => {
      try {
        setLoading(true);
        const { data } = await getNote(id);
        setNote(data);
      } catch (error) {
        console.error("Error fetching note:", error);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };

    fetchNote();
  }, [id]);

  async function handleDelete(id) {
    try {
      await deleteNote(id);
      navigate("/");
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  }

  async function handleArchive(id) {
    try {
      await archiveNote(id);
      navigate("/archives");
    } catch (error) {
      console.error("Error archiving note:", error);
    }
  }

  async function handleUnarchive(id) {
    try {
      await unarchiveNote(id);
      navigate("/");
    } catch (error) {
      console.error("Error unarchiving note:", error);
    }
  }

  if (loading) {
    return <Loading />;
  }

  if (notFound) {
    setLoading(false);
    return <NotFound />;
  }

  return (
    <section className="detail-page">
      <NoteDetails
        {...note}
        onDelete={handleDelete}
        onArchive={handleArchive}
        onUnarchive={handleUnarchive}
      />
    </section>
  );
}

export default DetailPage;
