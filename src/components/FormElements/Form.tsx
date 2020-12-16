import React from 'react';
import Button from './Button';
import Input from './Input';

const Form = () => {
  return (
    <div>
      <form>
        <Input />
        <Button>Add Todo</Button>
      </form>
    </div>
  );
};

export default Form;
