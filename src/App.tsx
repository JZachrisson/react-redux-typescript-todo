import React from 'react';
import './App.css';
import Form from './components/FormElements/Form';

function App() {
  return (
    <div className="App">
      <Form />
      <h1>MY TODOS</h1>
      <ul>
        <li>Todo 1</li>
        <li>Todo 2</li>
        <li>Todo 3</li>
      </ul>
    </div>
  );
}

export default App;
