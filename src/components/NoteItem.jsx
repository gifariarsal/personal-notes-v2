import React from 'react'

const NoteItem = ({ title, createdAt, body }) => {
  return (
    <article className="note-item">
      <h3 className="note-item__title">{title}</h3>
      <p className="note-item__createdAt"></p>
      <p className="note-item__body">{body}</p>
    </article>
  );
};

export default NoteItem