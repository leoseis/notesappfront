import React from 'react'
import "./Modal.css"

const Modal = ({handleIsOpen} ) => {
  return (
    <div className="c-modal-overlay">
    <div className="c-modal">
      <button className="close-button">×</button>
      <div className="c-modal-content">
        <h2>Delete Note</h2>
        <p>Are you sure you want to Delete this note?</p>
        <span className="d-flex justify-content-center">
          <button className="btn btn-danger me-3"onClick={handleIsOpen}>Delete</button>
          <button className="btn btn-primary"onClick={handleIsOpen}>Cancel</button>
        </span>
      </div>
    </div>
  </div>
  )
}

export default Modal