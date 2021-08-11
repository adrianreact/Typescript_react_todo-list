import React from "react";
import "./ToDoList.css";

interface ToDoListProps {
  todos: { id: string; name: string }[];
  removeTodo: (todoId: string) => void;
}

const ToDoList: React.FC<ToDoListProps> = ({ todos, removeTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span>{todo.name}</span>
          <button onClick={removeTodo.bind(null, todo.id)}>DELETE</button>
        </li>
      ))}
    </ul>
  );
};

export default ToDoList;
