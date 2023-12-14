import logo from './logo.svg';
import './App.css';
import FileUpload from './FileUpload';
import FolderUploader from './FolderUpload';
import FileList from './FileList';


function App() {
  return (
    <div className="App">
      {/* <FileUpload></FileUpload> */}
      <FileList></FileList>
      {/* <FolderUploader></FolderUploader> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
