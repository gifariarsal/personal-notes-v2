import React from "react";
import PropTypes from "prop-types";
import { useNavigate, useParams } from "react-router-dom";
import {
  getNote,
  getAllNotes,
  deleteNote,
  archiveNote,
  unarchiveNote,
} from "../utils/local-data";
import NoteDetails from "../components/NoteDetails";
import NotFound from "../components/NotFound";

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
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.handleArchive = this.handleArchive.bind(this);
    this.handleUnarchive = this.handleUnarchive.bind(this);
  }

  componentDidMount() {
    if (!this.state.note) {
      this.setState({ notFound: true });
    }
  }

  handleDelete(id) {
    deleteNote(id);

    this.setState(() => {
      return {
        note: getAllNotes(),
      };
    });

    this.props.navigate("/");
  }

  handleArchive(id) {
    archiveNote(id);
    this.setState(() => {
      return {
        note: getAllNotes(),
      };
    });

    this.props.navigate("/archives");
  }

  handleUnarchive(id) {
    unarchiveNote(id);
    this.setState(() => {
      return {
        note: getAllNotes(),
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
