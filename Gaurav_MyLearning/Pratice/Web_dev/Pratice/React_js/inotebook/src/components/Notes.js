// import React from 'react';
import React, {useContext} from 'react';
import noteContext from "../context/notes/noteContext";
import Noteiteam from './Noteiteam';

const Notes = () => {
    const context = useContext(noteContext);
  const {notes, setNotes} = context;
  return (
    <div className='row my-3'>
        <h1>you Notes</h1>
    {notes.map((note)=>{
      return <Noteiteam note={note}/>
    })}
      
    </div>
  );
}

export default Notes;
