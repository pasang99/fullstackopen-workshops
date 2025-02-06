// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';  // Importing the global styles for the app
import './App.css';


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

ReactDOM.createRoot(document.getElementById('root')).render(

    <App notes={notes} />

);
