import logo from './logo.svg';
import './App.css';
import PostDetails from './components/PostDetails';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-header-content">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://www.typescriptlang.org/docs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            TypeScript
          </a>
        </div>
      </header>
      <PostDetails />
    </div>
  );
}

export default App;