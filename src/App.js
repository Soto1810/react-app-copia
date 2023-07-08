import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [val, setVal] = useState("Hello World")
  //const click = () => { alert("Valor introducido: " + val) }
  const change = event => { setVal(event.target.value) }
  //const saveInput = () => {list.push(val)};
  let list = [];

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
          <input onChange={change} value = {val}/>
          <button onClick = {
            () => {
              alert("Valor introducido: " + val);
              list.push(val);
            }
          }> Click me</button>
        </a>
        <a>
          {list}
        </a>
      </header>
    </div>
  );
}

export default App;
