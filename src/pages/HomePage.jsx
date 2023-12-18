import React from "react";
import SearchBar from "../components/SearchBar";
import NoteList from "../components/NoteList";
import { getActiveNotes, searchNotes } from "../utils/local-data";
import AddButton from "../components/AddButton";
import { useSearchParams } from "react-router-dom";

function HomePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();

  const title = searchParams.get("title");

  function changeSearchParams(keyword) {
    setSearchParams({ title: keyword });
  }

  return <HomePage activeKeyword={title} handleSearch={changeSearchParams} />;
}

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeNotes: props.activeKeyword
        ? searchNotes(props.activeKeyword)
        : getActiveNotes(),
    };

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(keyword) {
    this.setState(() => {
      return {
        activeNotes: searchNotes(keyword),
      };
    });

    this.props.handleSearch(keyword);
  }

  render() {
    return (
      <section>
        <h2>Catatan Aktif</h2>
        <SearchBar onSearch={this.handleSearch} keyword={this.props.activeKeyword} />
        <NoteList notes={this.state.activeNotes} />
        <div className="homepage__action">
          <AddButton />
        </div>
      </section>
    );
  }
}

export default HomePageWrapper;
