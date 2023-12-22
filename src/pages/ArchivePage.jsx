import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import NoteList from "../components/NoteList";
import { useSearchParams } from "react-router-dom";
import PropTypes from "prop-types";
import { getArchivedNotes } from "../utils/api";

function ArchivePage() {
  const [searchParams, setSearchParams] = useSearchParams("");
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState(() => {
    return searchParams.get("title") || "";
  });

  useEffect(() => {
    getArchivedNotes().then(({ data }) => {
      setNotes(data);
    });
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
      <NoteList notes={filteredNotes} />
    </section>
  );
}

export default ArchivePage;
// function ArchivePageWrapper() {
//   const [searchParams, setSearchParams] = useSearchParams();

//   const title = searchParams.get("title");

//   function changeSearchParams(keyword) {
//     setSearchParams({ title: keyword });
//   }

//   return (
//     <ArchivePage activeKeyword={title} handleSearch={changeSearchParams} />
//   );
// }

// class ArchivePage extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       archiveNotes: props.activeKeyword
//         ? searchNotes(props.activeKeyword)
//         : getArchivedNotes(),
//     };

//     this.handleSearch = this.handleSearch.bind(this);
//   }

//   handleSearch(keyword) {
//     this.setState(() => ({
//       archiveNotes: searchNotes(keyword, false),
//     }));

//     this.props.handleSearch(keyword);
//   }

//   render() {
//     return (
//       <section>
//         <h2>Catatan Arsip</h2>
//         <SearchBar
//           onSearch={this.handleSearch}
//           keyword={this.props.activeKeyword}
//         />
//         <NoteList notes={this.state.archiveNotes} />
//       </section>
//     );
//   }
// }

// ArchivePage.propTypes = {
//   activeKeyword: PropTypes.string,
//   handleSearch: PropTypes.func,
// };

// export default ArchivePageWrapper;
