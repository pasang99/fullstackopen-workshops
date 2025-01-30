// src/components/Note.jsx
import React from 'react';

function Note({ note }) {
  return (
    <li>
      <h3>{note.title}</h3>
      <p>{note.content}</p>
    </li>
  );
}

export default Note;
