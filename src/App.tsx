import React from 'react';
import TodoListItem from './components/Todo/TodoListItem';
import Form from './components/FormElements/Form';

const todos: Array<Todo> = [
  { id: Date.now(), text: 'WALK DOG', complete: true },
  { id: Date.now(), text: 'SHOP', complete: false },
];

function App() {
  return (
    <div className="App">
      <Form />
      <TodoListItem todo={todos[0]} />
      <TodoListItem todo={todos[1]} />
    </div>
  );
}

export default App;
