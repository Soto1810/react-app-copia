import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [records, setRecords] = useState([]);

  const handleAddRecord = () => {
    const record = inputValue.trim();
    if (!record) {
      alert('No value inserted');
      return;
    }
    if (records.includes(record)) {
      alert('Duplicated token');
      return;
    }
    setRecords([...records, record].sort());
    setInputValue('');
  };

  const handleDisplayAll = () => {
    if (records.length === 0) {
      alert('[Empty list]');
      return;
    }
    alert(records);
  };

  const handleRemoveRecord = () => {
    const record = inputValue.trim();
    if (!record) {
      alert('No value inserted');
      return;
    }
    if (records.length === 0) {
      alert('[Empty list]');
      return;
    }
    if (!records.includes(record)) {
      alert('Non-existing value');
      return;
    }
    const updatedRecords = records.filter((item) => item !== record);
    setRecords(updatedRecords);
    setInputValue('');
    alert('Successfully removed ' + record);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Search Engine</p>
        <p>
          <table>
            <tbody>
              <tr>
                <td>Enter the token</td>
                <td>
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Token"
                  />
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <button type="button" onClick={handleAddRecord}>
                    Add
                  </button>
                  <button type="button" onClick={handleDisplayAll}>
                    Display
                  </button>
                  <button type="button" onClick={handleRemoveRecord}>
                    Remove
                  </button>
                </td>
              </tr>
              <tr>----------------------------</tr>
              <tr>
                <td>Web link</td>
                <td>
                  <input type="text" placeholder="Token" />
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <button type="button">Search!</button>
                </td>
              </tr>
            </tbody>
          </table>
        </p>
      </header>
    </div>
  );
}

export default App;


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (

//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           {/* Edit <code>src/App.js</code> and save to reload.  */}
//           Search Engine
//         </p>
//         <p>
//           <table>
//             <tr>
//               <td>
//                 Enter the token
//               </td>
//               <td>
//                 <input type="text" id="inputtext" placeholder='Token' />
//               </td>
//             </tr>
//             <tr>
//               <td></td>
//               <td>
//                 <button type="button" id="add">Add</button>
//                 <button type="button" id="display">Display</button>
//                 <button type="button" id="remove">Remove</button>
//                 <button type="button" id="">Search!</button>
//               </td>
//             </tr>
//             <tr>{"----------------------------"}</tr>
//             <tr>
//               <td>
//                 Web link
//               </td>
//               <td>
//                 <input type="text" id="inputtext" placeholder='Token' />
//               </td>
//             </tr>
//             <tr>
//               <td></td>
//               <td>
//                 <button type="button" id="">Search!</button>
//               </td>
//             </tr>

//           </table>
//         </p>
//       </header>
//     </div>
//   );
// }
// let addButton = document.querySelector('#add');
// let displayButton = document.querySelector('#display');
// let removeButton = document.querySelector('#remove');
// let records = [];

// addButton?.addEventListener('click', addRecord);
// displayButton?.addEventListener('click', displayAll);
// removeButton?.addEventListener('click', removeRecord);

// function addRecord() {
//   let record = document.querySelector('#inputtext').value.trim();
//   if (!record) {
//     alert('No value inserted');
//     return;
//   }
//   if (records.includes(record)) {
//     alert('Duplicated token');
//     return;
//   }
//   records.push(record);
//   document.querySelector('#inputtext').value = '';
// }

// function displayAll() {
//   if (records.length === 0) {
//     alert("[Empty list]")
//     return;
//   }
//   alert(records.sort());
// }

// function removeRecord() {
//   let record = document.querySelector('#inputtext').value.trim();
//   if (!record) {
//     alert('No value inserted');
//     return;
//   }
//   if (records.length === 0) {
//     alert("[Empty list]")
//     return;
//   }
//   if (!records.includes(record)) {
//     alert("Non existing value")
//     return;
//   }
//   const index = records.indexOf(record);
//   records.splice(index, 1);
//   document.querySelector('#inputtext').value = '';
//   alert("Succesfully removed " + record);
// }

// export default App;
