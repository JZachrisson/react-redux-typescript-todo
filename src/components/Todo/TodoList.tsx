import { useSelector } from 'react-redux';
import TodoListItem from './TodoListItem';

const selectTodos = (state: any) => state.todos;

const TodoList = () => {
  const todos = useSelector(selectTodos);

  const renderedListItems = todos.map((todo: Todo) => {
    return <TodoListItem key={todo.id} todo={todo} />;
  });

  return <ul className="todo-list">{renderedListItems}</ul>;
};

export default TodoList;
