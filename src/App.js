import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './Component/Welcome'
import ListEmployees from './Component/ListEmployees'


function App() {
  return (
    <div className="App">
    
      <Welcome></Welcome>
     
      <ListEmployees></ListEmployees>

    </div>
  );
}

export default App;
