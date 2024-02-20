import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import NoteForm from './NoteForm';
import notes from '../notes';

function App() {
  // State to track existing notes and the next available key
  const [noteList, setNoteList] = useState(notes);
  const [nextKey, setNextKey] = useState(notes.length + 1);

  // Function to add a new note
  const addNote = (newNote) => {
    // Add the new note to the list
    setNoteList([...noteList, { ...newNote, id: nextKey }]);
    // Increment the next available key for the next note
    setNextKey(nextKey + 1);
  };

  // Function to delete a note
  const deleteNote = (id) => {
    // Filter out the note with the provided id
    const updatedNotes = noteList.filter(note => note.id !== id);
    // Update the note list
    setNoteList(updatedNotes);
  };

  return (
    <div>
      <Header />
      {/* Render existing notes */}
      {noteList.map(note => (
        <Note
          key={note.id}
          id={note.id}
          title={note.title}
          content={note.content}
          onDeleteNote={deleteNote} 
        />
      ))}
      {/* Render NoteForm component for adding new note */}
      <div className="note-form">
        <NoteForm onAddNote={addNote} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
