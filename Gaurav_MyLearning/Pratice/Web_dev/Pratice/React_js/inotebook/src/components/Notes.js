// import React from 'react';
import React, {useContext, useEffect} from 'react';
import noteContext from "../context/notes/noteContext";
import Noteiteam from './Noteiteam';
import AddNote from './AddNote';

const Notes = () => {
    const context = useContext(noteContext);
    const {notes, getNotes} = context;
    useEffect(() =>{
      getNotes()
    }, [])
  return (
    <>
    <AddNote/>
    <div className='row my-3'>
        <h1>you Notes</h1>
    {notes.map((note)=>{
      return <Noteiteam key={note._id} note={note}/>
    })}
      
    </div>
    </>
  );
}

export default Notes;
