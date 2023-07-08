import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {Text, StyleSheet} from 'react-native';

function App() {
  const [val, setVal] = useState("Hello World")
  //const click = () => { alert("Valor introducido: " + val) }
  const change = event => { setVal(event.target.value) }
  //const saveInput = () => {list.push(val)};
  const list = [];

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
              list.push(val);
              alert(list);
            }
          }> Save value</button>
        </a>
        
      </header>
    </div>
  );
}

export default App;
