// import react from "react";
import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:3001"
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial);
  var getNotes = async () => {
    // TODO: API Call
    console.log("Adding a new note")
    //API Call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU2NDNjMmFmYTNhNzE4MDVhMmUxNmRmIn0sImlhdCI6MTcwMTA2NzgxOH0.NqgIg2MI-SaaCDCol2KH2BEQwEZR6b57ZjLz76DjrU4",
      }

    });
    const json = await response.json();
    console.log(json);
    setNotes(json)

  }
  // Add a Note
  const addNote =async (title, description, tag) => {
    // TODO: API Call
    console.log("Adding a new note")
    //API Call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU2NDNjMmFmYTNhNzE4MDVhMmUxNmRmIn0sImlhdCI6MTcwMTA2NzgxOH0.NqgIg2MI-SaaCDCol2KH2BEQwEZR6b57ZjLz76DjrU4",
      },

      body: JSON.stringify({title, description, tag})
    });
    // const json = response.json();
    console.log("adding a new note")
    const note = {
      "_id": "66758546f065d311009eb81fb",
      "user": "65643c2afa3a71805a2e16df",
      "title": "My title",
      "description": "fgldy [ADDED]",
      "tag": "personal",
      "date": "2023-11-28T06:10:55.115Z",
      "__v": 0
    }
    setNotes(notes.concat(note));

  }

  //Delete a Note
  const deleteNote = (id) => {
    //TODO: API Call
    console.log("Deleting the note with id" + id);
    const newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes)

  }

  //Edit a Note
  const editNote = async (id, title, description, tag) => {
    //API Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU2NDNjMmFmYTNhNzE4MDVhMmUxNmRmIn0sImlhdCI6MTcwMTA2NzgxOH0.NqgIg2MI-SaaCDCol2KH2BEQwEZR6b57ZjLz76DjrU4",
      },

      body: JSON.stringify({title, description, tag})
    });
    const json =  response.json();
  


  // Logic to edit in client
  for (let index = 0; index < notes.length; index++) {
    const element = notes[index];
    if (element._id === id) {
      element.title = title;
      element.description = description;
      element.tag = tag;
    }

  }
}


return (
  <NoteContext.Provider value={{ notes, setNotes, addNote, deleteNote, editNote, deleteNote, getNotes }}>
    {props.children}
  </NoteContext.Provider>
)
}

export default NoteState;