// Note.jsx
import React from 'react';
import PropTypes from 'prop-types';

function Note(props) {
  const handleDelete = () => {
    // Call the onDeleteNote function passed from the parent component
    props.onDeleteNote(props.id);
  };

  return (
    <div className='note'>
      <button className="delete-button" onClick={handleDelete}>x</button>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  );
}

Note.propTypes = {
  id: PropTypes.number.isRequired, // Validate 'id' prop as a required number
  title: PropTypes.string.isRequired, // Validate 'title' prop as a required string
  content: PropTypes.string.isRequired, // Validate 'content' prop as a required string
  onDeleteNote: PropTypes.func.isRequired // Validate 'onDeleteNote' prop as a required function
};

export default Note;
