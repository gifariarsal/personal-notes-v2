import React from "react";
import PropTypes from "prop-types";
import { useNavigate, useParams } from "react-router-dom";
import NoteDetails from "../components/NoteDetails";
import NotFound from "../components/NotFound";
import { archiveNote, deleteNote, getActiveNotes, getArchivedNotes, getNote, unarchiveNote } from "../utils/api";

function DetailPageWrapper() {
  const { id } = useParams();
  const navigate = useNavigate();

  return <DetailPage id={id} navigate={navigate} />;
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      note: getNote(props.id),
      notFound: false,
      initializing: true,
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.handleArchive = this.handleArchive.bind(this);
    this.handleUnarchive = this.handleUnarchive.bind(this);
  }

  async componentDidMount() {
    const { data } = await getNote(this.props.id);

    this.setState(() => {
      return {
        note: data,
        initializing: false,
      };
    });
  }

  handleDelete(id) {
    deleteNote(id);

    this.setState(() => {
      return {
        note: getActiveNotes(),
      };
    });

    this.props.navigate("/");
  }

  handleArchive(id) {
    archiveNote(id);
    this.setState(() => {
      return {
        note: getArchivedNotes(),
      };
    });

    this.props.navigate("/archives");
  }

  handleUnarchive(id) {
    unarchiveNote(id);
    this.setState(() => {
      return {
        note: getActiveNotes(),
      };
    });

    this.props.navigate("/");
  }

  render() {
    if (this.state.notFound) {
      return <NotFound />;
    }

    return (
      <section className="detail-page">
        <NoteDetails
          {...this.state.note}
          onDelete={this.handleDelete}
          onArchive={this.handleArchive}
          onUnarchive={this.handleUnarchive}
        />
      </section>
    );
  }
}

DetailPage.propTypes = {
  id: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
};

export default DetailPageWrapper;
