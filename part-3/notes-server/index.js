const express = require('express')
const app = express()

app.use(express.json())  // Middleware to parse JSON (needed for POST requests in the future)

// Middleware to log method, path, and body
app.use((request, response, next) => {
  console.log(`${request.method} ${request.path}`)
  if (request.method === "POST" || request.method === "PUT" || request.method === "PATCH") {
    console.log("Body:", request.body)
  }
  next();  // Call the next middleware or route handler
})

let notes = [
  {
    id: 1,
    content: "HTML is easy",
    important: true
  },
  {
    id: 2,
    content: "Browser can execute only JavaScript",
    important: false
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true
  }
]

// GET all notes
app.get('/api/notes', (request, response) => {
  response.json(notes)
})

// GET a single note by ID
app.get('/api/notes/:id', (request, response) => {
  const myId = request.params.id
  const note = notes.find(note => note.id === parseInt(myId))
  if (note) {
    response.json(note)
  } else {
    response.status(404).send('Note not found')
  }
})

// POST a new note
app.post('/api/notes', (request, response) => {
  const { content, important } = request.body
  if (!content) {
    return response.status(400).send('Content is required')
  }
  const newNote = {
    id: notes.length + 1,
    content,
    important: important || false
  }
  notes.push(newNote)
  response.status(201).json(newNote)
})

// DELETE a note by ID
app.delete('/api/notes/:id', (request, response) => {
  const myId = request.params.id
  const initialLength = notes.length
  notes = notes.filter(note => note.id !== parseInt(myId))

  if (notes.length < initialLength) {
    response.status(204).end()
  } else {
    response.status(404).send('Note not found')
  }
})

// Middleware to handle 404 Not Found
app.use((request, response) => {
  response.status(404).send('Not Found')  // This will catch any routes not handled by the app
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
