import React from "react";
import { v4 as uuidV4 } from "uuid";

function Form({ input, setInput, todo, setTodo, editTodo, setEditTodo }) {
  const updateTodo = (title, id, completed) => {
    const newTodo = todo.map((todo) =>
      todo.id === id ? { title, id, completed } : todo
    );
    setTodo(newTodo);
    setEditTodo("");
  };
  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (!editTodo) {
      setTodo([...todo, { id: uuidV4(), title: input, completed: false }]);
      setInput("");
    } else {
      updateTodo(input, editTodo.id, editTodo.completed);
    }
  };
  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Enter your Todo..."
        className="task-input"
        value={input}
        required
        onChange={onInputChange}
      />
      <button className="button-add" type="submit">
        {" "}
        Add
      </button>
    </form>
  );
}

export default Form;
