import { useState, useEffect } from "react";
import Notes from "./components/Notes";
import noteService from './services/notes';
import Notification from "./components/Notification";
import './App.css'; // Ensure your CSS file is imported

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [showAll, setShowAll] = useState(true);
  const [notification, setNotification] = useState('');

  useEffect(() => {
    console.log('effect');
    //1. get data from backend
    let myAxios = noteService.getAll();
    myAxios.then((result) => {
      console.dir(result);
      console.log('promise fulfilled');
      setNotes(result);
    }).catch((error) => {
      console.log("error", error);
    });
  }, []);

  const notesToShow = notes.filter((note) => (showAll ? true : note.important));
  const handleSubmit = (event) => {
    event.preventDefault();
    let myNote = {
      content: newNote,
      important: Math.random() < 0.5
    };
    let postPromise = noteService.create(myNote);
    postPromise.then((result) => {
      console.log("created data return", result.data);
      setNotes(notes.concat(result.data));
      setNewNote('');
    }).catch((error) => {
      console.error("Error creating note:", error.message);
      setNotification("Failed to create note");
      setTimeout(() => setNotification(null), 5000);
    });
  };

  const handleChange = (event) => {
    setNewNote(event.target.value);
  };

  const handleShowAll = () => {
    setShowAll(!showAll);
  };

  const updateData = (id) => {
    console.log('update note', id);
    let currentNote = notes.find((note) => note.id === id);
    console.log('current note', currentNote);
    let updatedNote = { ...currentNote, important: !currentNote.important };
    console.log('updated note', updatedNote);

    //1. update the server
    let putPromise = noteService.update(id, updatedNote);
    putPromise.then((result) => {
      console.log("updated data return", result);
    }).catch((error) => {
      console.log("error", error);
      if (error.response.status === 404) {
        setNotification(" sorry this note is fake");
        setTimeout(() => {
          setNotification(null);
        }, 5000);
        // alert('the note is already deleted');
        setNotes(notes.filter((note) => note.id !== id));
      }
    });
    console.log("return promise", putPromise);
    //2. update the state
    setNotes(notes.map((note) => note.id === updatedNote.id ? updatedNote : note));
  };

  return (
    <div>
      <h1 className="greenHeading">Notes</h1>
      <Notification message={notification} />
      <button onClick={handleShowAll}>
        Show {showAll ? 'important' : 'all'}
      </button>
      <ul>
        {notesToShow.map(value => {
          return <Notes key={value.id} notes={value} updateNote={() => { updateData(value.id) }} />
        })}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" value={newNote} onChange={handleChange} />
        <button type="submit">Add Note</button>
      </form>
    </div>
  );
};

export default App;