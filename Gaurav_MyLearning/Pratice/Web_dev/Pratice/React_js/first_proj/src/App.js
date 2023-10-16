import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  return (
    <>
      <Navbar title="gauravutils" textAbout="AboutUtils" />
      <div className="container">
        <TextForm heading="this is heading" />
      </div>

    </>
  );
}

export default App;
