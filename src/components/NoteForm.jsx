import React, { useState } from 'react';

function NoteForm({ onAddNote }) {
  // State to track new note title and content
  const [newNoteTitle, setNewNoteTitle] = useState('');
  const [newNoteContent, setNewNoteContent] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Check if either the title or content is empty
    if (!newNoteTitle.trim() || !newNoteContent.trim()) {
      alert('Please enter both title and content for the new note.');
      return;
    }

    // Call the onAddNote function passed from the parent component
    onAddNote({
      title: newNoteTitle,
      content: newNoteContent,
    });

    // Clear input fields after adding the note
    setNewNoteTitle('');
    setNewNoteContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter title"
        value={newNoteTitle}
        onChange={e => setNewNoteTitle(e.target.value)}
      />
      <textarea
        placeholder="Enter content"
        value={newNoteContent}
        onChange={e => setNewNoteContent(e.target.value)}
      ></textarea>
      <button type="submit">Add Note</button>
    </form>
  );
}

export default NoteForm;
