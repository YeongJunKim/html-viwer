import logo from './logo.svg';
import './App.css';
import FileUpload from './FileUpload';
import HtmlFileUpload from './HtmlFileUpload';
import FolderUploader from './FolderUpload';

function App() {
  return (
    <div className="App">
      <FileUpload></FileUpload>
      <FolderUploader></FolderUploader>
      <HtmlFileUpload></HtmlFileUpload>
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;
