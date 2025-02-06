const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

let notes = [
  { id: 1, content: 'HTML is easy', important: true },
  { id: 2, content: 'Browser can execute only JavaScript', important: false },
  { id: 3, content: 'GET and POST are the most important methods of HTTP protocol', important: false },
  { id: 4, content: 'GET and POST are the most important methods of HTTP protocol', important: false },
  { id: 9, content: 'demo', important: false },
  { id: 28, content: 'a new note.sssssssss..', important: false },
  { id: 93, content: 'a new nothvjhlke...', important: false },
  { id: 2, content: 'hi', important: false },
  { id: 43, content: 'a new note...dfd', important: false },
  { id: 27, content: 'a new note...', important: true }
];

app.get('/api/notes', (req, res) => {
  res.json(notes);
});

app.post('/api/notes', (req, res) => {
  const newNote = {
    id: notes.length + 1,
    content: req.body.content,
    important: req.body.important || false,
  };
  notes.push(newNote);
  res.status(201).json(newNote);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
