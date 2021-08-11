import React, { useRef } from "react";
import "./AddToDo.css";

interface AddToDoInterface {
  addTodo: (name: string) => void;
}

const AddToDo: React.FC<AddToDoInterface> = ({ addTodo }) => {
  const todoInputRef = useRef<HTMLInputElement>(null);

  const addToDoSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredText = todoInputRef.current!.value;
    addTodo(enteredText);
  };

  return (
    <form onSubmit={addToDoSubmitHandler}>
      <div>
        <label htmlFor="todo-input">Provide text</label>
        <input
          className="form-control"
          ref={todoInputRef}
          type="text"
          id="todo-input"
        />
        <button type="submit">Add!</button>
      </div>
    </form>
  );
};

export default AddToDo;
