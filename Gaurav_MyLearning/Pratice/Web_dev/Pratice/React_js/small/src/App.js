import logo from './logo.svg';
import './App.css';
import React, { useRef } from 'react';

function App() {
  const  UpdateNote=()=> {
    const ref = React.useRef(null);
    ref.current.click();
  }
  return (
    <>
    <button onClick={UpdateNote}> Check</button>
    {/* // <!-- Button trigger modal --> */}
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
            ...
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
    </>

  );
}

export default App;
