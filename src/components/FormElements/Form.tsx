import React, { useState } from 'react';
import Button from './Button';
import { useDispatch } from 'react-redux';

const Form = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e: any) => setText(e.target.value);

  const submitHandler = (e: any) => {
    e.preventDefault();
    console.log(text);
    dispatch({ type: 'todos/todoAdded', payload: text });
    setText('');
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="What needs to be done?"
          autoFocus={true}
          value={text}
          onChange={handleChange}
        />
        <Button>Add Todo</Button>
      </form>
    </div>
  );
};

export default Form;
