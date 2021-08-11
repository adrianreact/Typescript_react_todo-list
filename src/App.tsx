import React, { useState } from "react";
import ToDoList from "./components/ToDoList";
import AddToDo from "./components/AddToDo";
import { ToDoModel } from "./todo.model";

const App: React.FC = () => {
  const [todos, setTodos] = useState<ToDoModel[]>([]);

  const addTodo = (name: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), name: name },
    ]);
  };

  const removeTodo = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  return (
    <div className="App">
      <AddToDo addTodo={addTodo} />
      <ToDoList todos={todos} removeTodo={removeTodo} />
    </div>
  );
};

export default App;
