import React from "react";
import { IoCheckmarkOutline } from "react-icons/io5";
import PropTypes from "prop-types";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };

    this.handleOnChangeTitle = this.handleOnChangeTitle.bind(this);
    this.handleOnChangeBody = this.handleOnChangeBody.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnChangeTitle(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  handleOnChangeBody(event) {
    this.setState(() => {
      return {
        body: event.target.innerHTML,
      };
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.onAddNote(this.state);
    this.setState(() => {
      return {
        title: "",
        body: "",
      };
    });
  }
  render() {
    return (
      <form className="add-new-page__input" onSubmit={this.handleOnSubmit}>
        <input
          className="add-new-page__input__title"
          type="text"
          placeholder="Judul Catatan"
          value={this.state.title}
          onChange={this.handleOnChangeTitle}
        />
        <div
          className="add-new-page__input__body"
          data-placeholder="Tuliskan isi catatan"
          contentEditable
          onInput={this.handleOnChangeBody}
        />
        <div className="add-new-page__action">
          <button className="action" type="submit">
            <IoCheckmarkOutline />
          </button>
        </div>
      </form>
    );
  }
}

NoteInput.propTypes = {
  onAddNote: PropTypes.func.isRequired,
};

export default NoteInput;
