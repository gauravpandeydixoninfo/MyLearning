import logo from './logo.svg';
import './App.css';
import { useRef } from 'react';


function UpdateNote(){
  const ref=useRef(null)
 ref.current.click();

  return(
    <>
    {/* // <!-- Button trigger modal --> */}
<button type="button" class="btn btn-primary" data-bs-toggle="modal" ref={ref} data-bs-target="#exampleModal">
  Launch demo modal
</button>

{/* <!-- Modal --> */}
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
</>
  )
}
function App() {
  return (
    <div>
      <button onClick={UpdateNote}>click</button>
    </div>
   
  );
}

export default App;
