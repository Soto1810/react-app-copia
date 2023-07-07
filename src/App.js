import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [val, setVal] = useState("Hello World")
  const click = () => { alert(val) }
  const change = event => { setVal(event.target.value) }

  return (
    <div className="App">
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

        <a>
          <input onChange={change} value = {val}>
            <button onClick = {click}> Click me</button>
          </input>
        </a>
      </header>
    </div>
  );
}

export default App;
