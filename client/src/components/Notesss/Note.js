import React from "react";
import { MdDeleteForever } from "react-icons/md";
import "./Notes.css";
/** note card component: using id, text, date, handleDeleteNote
as props which have been defined in App.js */

function Note({ id, text, date, handleDelete }) {
  return (
    <div className="note">
      {/** main note text part */}
      <span>{text}</span>

      {/** footer part of the note */}
      <div className="note-footer">
        {/** store the date on which the user is going to create the note */}
        <small>{date}</small>
        {/** deleting the note by using the note unique id as a parameter */}
        <MdDeleteForever
          onClick={() => handleDelete(id)}
          className="delete-icon"
          size="1.3em"
        />
      </div>
    </div>
  );
}
export default Note;
