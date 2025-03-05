import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';  // Importing the global styles for the app
import './App.css';

// Data for notes
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

// Get the root element
const rootElement = document.getElementById('root');

// Render the app to the root element if it exists
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App notes={notes} />);
} else {
  console.error('Root element not found!');
}
