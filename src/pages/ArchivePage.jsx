import React from "react";
import SearchBar from "../components/SearchBar";
import { getArchivedNotes, searchNotes } from "../utils/local-data";
import NoteList from "../components/NoteList";
import { useSearchParams } from "react-router-dom";

function ArchivePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();

  const title = searchParams.get("title");

  function changeSearchParams(keyword) {
    setSearchParams({ title: keyword });
  }

  return <ArchivePage activeKeyword={title} handleSearch={changeSearchParams} />;
}


class ArchivePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      archiveNotes: props.activeKeyword
        ? searchNotes(props.activeKeyword)
        : getArchivedNotes(),
    };

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(keyword) {
    this.setState(() => ({
      archiveNotes: searchNotes(keyword, false), // Pass false to search archived notes
    }));

    this.props.handleSearch(keyword);
  }

  render() {
    return (
      <section>
        <h2>Catatan Arsip</h2>
        <SearchBar
          onSearch={this.handleSearch}
          keyword={this.props.activeKeyword}
        />
        <NoteList notes={this.state.archiveNotes} />
      </section>
    );
  }
}

export default ArchivePageWrapper;
