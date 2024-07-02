// import React from 'react';
import React, { useContext, useEffect, useRef, useState } from 'react';
import noteContext from "../context/notes/noteContext";
import Noteiteam from './Noteiteam';
import AddNote from './AddNote';
// import createBrowserHistory from 'history/createBrowserHistory';
// import {useHistory} from 'react-router';
import { useNavigate } from 'react-router-dom';

const Notes = (props) => {
  // console.log("**********Notes called*****************", props)
  const context = useContext(noteContext);
  // let history= useHistory();
  // const history = createBrowserHistory({forceRefresh:true});
  // const history= require("history");
  const navigate = useNavigate();
  const { notes, getNotes, editNote } = context;
  // console.log("localStorage.token=>" + localStorage.getItem('token'))
  useEffect(() => {
    if (localStorage.getItem('token')) {
      console.log("token is not empty")
      getNotes()
    }
    else {
      console.log("in home /login is called");

      navigate("/login")
    }
    // eslint-disable-next-line
  }, [])
  const ref = useRef(null);
  const refClose = useRef(null);
  const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "" })

  const updateNote = (currentNote) => {
    // console.log("updateNote is clicking");
    // console.log("ref==>" + ref.current);

    // ref.modal('toggle');
    // modal('toggle');
    console.log("ref.current"+ ref.current);
    ref.current.click();
    setNote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag })

  }

  const handleClick = (e) => {
    // console.log("updating the note...", note);
    editNote(note.id, note.etitle, note.edescription, note.etag);
    
    refClose.current.click();
    // addNote(note.title, note.description, note.tag);
    props.showAlert("Updated successfully", "success");
  }

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }

  return (
    <>
      <AddNote showAlert={props.showAlert} />
      <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit Notes</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
              </button>
            </div>
            <div className="modal-body">
              <form className='my-3'>

                <div className="mb-3">
                  <label htmlFor="title" className="form-label">Title</label>
                  <input type="text" className="form-control" id="etitle" name="etitle" value={note.etitle} aria-describedby="emailHelp" onChange={onChange} minLength={5} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">Description</label>
                  <input type="text" className="form-control" id="edescription" name="edescription" value={note.edescription} onChange={onChange} minLength={5} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="tag" className="form-label">Tag</label>
                  <input type="text" className="form-control" id="etag" name="etag" value={note.etag} onChange={onChange} minLength={5} required />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button disabled={note.etitle.length < 5 || note.edescription.length < 5} onClick={handleClick} type="button" className="btn btn-primary">Update Notes</button>
            </div>
          </div>
        </div>
      </div>
      <div className='row my-3'>
        <h1>Your's Notes</h1>
        <div className='container mx-2'>
          {notes.length === 0 && "No notes to display"}
        </div>
        {notes.map((note) => {
          return <Noteiteam key={note._id} updateNote={updateNote} showAlert={props.showAlert} note={note} />
        })}

      </div>
    </>
  );
}

export default Notes;
