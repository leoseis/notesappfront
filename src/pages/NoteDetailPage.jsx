import React from 'react'
import { BiSolidTrashAlt } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import "./NoteDetailPage.css";

const NoteDetailPage = () => {
  return (
    <div className="note-container">
        <h3 className="title">
          they are the real deal
        </h3>
        <span className="d-flex justify-content-center">
          <p className="note-date font-12 text-muted me-5">
            {" "}
          </p>
          <p className="note-date font-12 text-muted me-5">
          </p>
        </span>
        <span className="button-group">
          
            <button className="btn btn-primary">
              <FiEdit />
              <span>Edit</span>
            </button>


          <button className="btn btn-danger">
            <BiSolidTrashAlt />
            <span>Delete</span>
          </button>
        </span>
        <p className="description"></p>
      </div>
  )
}

export default NoteDetailPage