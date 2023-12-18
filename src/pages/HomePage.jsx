import React from "react";
import SearchBar from "../components/SearchBar";
import NoteList from "../components/NoteList";
import { IoAddOutline } from "react-icons/io5";
import { getActiveNotes } from "../utils/local-data";

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeNotes: getActiveNotes()
    }
  }
  render() {
    return (
      <section>
        <h2>Catatan Aktif</h2>
        <SearchBar />
        <NoteList notes={this.state.activeNotes} />
        <div className="homepage__action">
          <button className="action" type="button" title="Tambah Catatan">
            <IoAddOutline />
          </button>
        </div>
      </section>
    );
  }
}

export default HomePage;
