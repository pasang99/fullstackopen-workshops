import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  // State to track notes and showAll state
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState({ title: '', content: '', isImportant: false });
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:3001/notes")
      .then(response => setNotes(response.data))
      .catch(error => console.error("Error fetching notes:", error));
  }, []);
  // Add new note to the notes array
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newNote.title && newNote.content) {
      setNotes([...notes, { ...newNote, id: notes.length + 1 }]);
      setNewNote({ title: '', content: '', isImportant: false }); // Reset input
    }
  };

  // Filter notes based on showAll state
  const notesToShow = showAll ? notes : notes.filter(note => note.isImportant);

  return (
    <div>
      <h1>Notes</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={newNote.title}
          onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
        />
        <textarea
          placeholder="Content"
          value={newNote.content}
          onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
        />
        <label>
          Important:
          <input
            type="checkbox"
            checked={newNote.isImportant}
            onChange={(e) => setNewNote({ ...newNote, isImportant: e.target.checked })}
          />
        </label>
        <button type="submit">Add Note</button>
      </form>

      <button onClick={() => setShowAll(!showAll)}>
        {showAll ? 'Show Important Only' : 'Show All Notes'}
      </button>

      <ul>
        {notesToShow.map((note) => (
          <li key={note.id}>
            <h2>{note.title}</h2>
            <p>{note.content}</p>
            {note.isImportant && <span>Important</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
