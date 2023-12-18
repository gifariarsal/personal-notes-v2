import React from "react";
import SearchBar from "../components/SearchBar";
import NoteList from "../components/NoteList";
import { getActiveNotes, getAllNotes } from "../utils/local-data";
import AddButton from "../components/AddButton";

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeNotes: getActiveNotes(),
    };
  }
  render() {
    return (
      <section>
        <h2>Catatan Aktif</h2>
        <SearchBar />
        <NoteList notes={this.state.activeNotes} />
        <div className="homepage__action">
          <AddButton />
        </div>
      </section>
    );
  }
}

export default HomePage;
