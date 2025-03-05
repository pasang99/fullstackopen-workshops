const express = require('express');
const cors = require('cors');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const app = express();

app.use(cors());
app.use(express.json());

// Serve frontend static files
app.use(express.static(path.join(__dirname, 'dist')));

// API routes for notes
let notes = [
  {
    id: uuidv4(),
    content: "HTML is easy",
    important: true
  },
  {
    id: uuidv4(),
    content: "Browser can execute only JavaScript",
    important: false
  },
  {
    id: uuidv4(),
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true
  }
];

// API endpoints
app.get('/api/notes', (req, res) => {
  res.json(notes);
});

app.get('/api/notes/:id', (req, res) => {
  const note = notes.find(note => note.id === req.params.id);
  if (note) {
    res.json(note);
  } else {
    res.status(404).json({ error: 'Note not found' });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  notes = notes.filter(note => note.id !== req.params.id);
  res.status(204).end();
});

app.post('/api/notes', (req, res) => {
  const { content, important } = req.body;
  
  if (!content) {
    return res.status(400).json({ error: 'content missing' });
  }

  const note = {
    id: uuidv4(),
    content,
    important: important || false
  };

  notes.push(note);
  res.json(note);
});

// Fallback route for React SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Set port from environment variable (cloud-friendly)
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
