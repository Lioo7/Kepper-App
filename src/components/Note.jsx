import React from 'react'
import PropTypes from 'prop-types'

function Note (props) {
  return (
    <div className='note'>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  )
}

Note.propTypes = {
  title: PropTypes.string.isRequired, // Validate 'title' prop as a required string
  content: PropTypes.string.isRequired // Validate 'content' prop as a required string
}

export default Note
