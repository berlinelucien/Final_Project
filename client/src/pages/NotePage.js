import React from "react";
import NotesList from "../components/Notesss/NotesList";
import { useState, useEffect } from "react";
import Search from "../components/Notesss/Search";
import { nanoid } from "nanoid";

const NotePage = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note",
      date: "03/25/2022",
    },
    {
      id: nanoid(),
      text: "Adding another note",
      date: "03/30/2022",
    },
    {
      id: nanoid(),
      text: "Buy more food",
      date: "04/25/2022",
    },
  ]);

  // eslint-disable-next-line no-lone-blocks
  {
    /** searching text and toggle mode */
  }
  const [searchNote, setSearchNote] = useState("");

  // eslint-disable-next-line no-lone-blocks
  {
    /** to sotre or save the data in local storage even after closing tab */
  }
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);
  // eslint-disable-next-line no-lone-blocks
  {
    /*this is for saving the app data in local storage*/
  }
  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);

  // eslint-disable-next-line no-lone-blocks
  {
    /*this function is for adding new note*/
  }
  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString,
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  // eslint-disable-next-line no-lone-blocks
  {
    /*this function is for deleting notes in note app with a id*/
  }
  const deletingNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className="container">
      <Search handleSearch={setSearchNote} />
      <NotesList
        notes={notes.filter((note) =>
          note.text.toLowerCase().includes(searchNote)
        )}
        handleAddNote={addNote}
        handleDelete={deletingNote}
      />
    </div>
  );
};

export default NotePage;
