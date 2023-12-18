import React from "react";
import SearchBar from "../components/SearchBar";
import { getArchivedNotes } from "../utils/local-data";
import NoteList from "../components/NoteList";

class ArchivePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      arciveNotes: getArchivedNotes(),
    };
  }
  render() {
    return (
      <section>
        <h2>Catatan Arsip</h2>
        <SearchBar />
        <NoteList notes={this.state.arciveNotes} />
      </section>
    );
  }
}

export default ArchivePage;
