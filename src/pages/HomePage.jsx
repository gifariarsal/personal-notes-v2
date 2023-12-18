import React from "react";
import SearchBar from "../components/SearchBar";
import NoteList from "../components/NoteList";
import { IoAddOutline } from "react-icons/io5";
import { getActiveNotes, getAllNotes } from "../utils/local-data";
import { Link } from "react-router-dom";

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeNotes: getAllNotes(),
    };
  }
  render() {
    return (
      <section>
        <h2>Catatan Aktif</h2>
        <SearchBar />
        <NoteList notes={this.state.activeNotes} />
        <div className="homepage__action">
          <Link to="/notes/new">
            <button className="action" type="button" title="Buat Catatan">
              <IoAddOutline />
            </button>
          </Link>
        </div>
      </section>
    );
  }
}

export default HomePage;
