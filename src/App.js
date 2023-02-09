import React, { useState } from 'react';
import './App.css'
import UserInput from './components/UserInput/UserInput';

const App = () => {
  const [newName, setNewName] = useState("")
  const [newAge, setNewAge] = useState("")

  const getData = (name, age) => {
    setNewName(name)
    setNewAge(age)
  }

  const notEmpty = newName.length > 0 && newAge !== ""

  return (
    <div>
      <UserInput onBtnSubmit={getData} />
      
      <div className="all">
        <div className="container">
          <div className="output">
            {notEmpty && <p>{newName} ({newAge})</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
