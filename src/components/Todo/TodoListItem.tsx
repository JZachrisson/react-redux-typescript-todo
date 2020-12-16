import React from 'react';
import './TodoListItem.css';

interface TodoListItemProps {
  todo: Todo;
}

const TodoListItem: React.FC<TodoListItemProps> = ({ todo }) => {
  return (
    <li>
      <label className={todo.complete ? 'complete' : undefined}>
        <input type="checkbox" checked={todo.complete} />
        {todo.text}
      </label>
    </li>
  );
};

export default TodoListItem;
