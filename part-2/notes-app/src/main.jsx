// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

let notes = [
  { id: 1, title: "Note 1", content: "This is the first note." },
  { id: 2, title: "Note 2", content: "This is the second note." },
  { id: 3, title: "Note 3", content: "This is the third note." },
];

ReactDOM.createRoot(document.getElementById('root')).render(

    <App notes={notes} />

);
