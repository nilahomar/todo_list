import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const initialState = JSON.parse(localStorage.getItem("todos")) || []
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState(initialState);
  const [editTodo, setEditTodo] = useState(null);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todo))
  }, [todo])

  return (
    <div className="container">
      <div className="app-wrapper">
        <Header />
        <Form input={input} setInput={setInput} todo={todo} setTodo={setTodo} editTodo={editTodo} setEditTodo={setEditTodo} />
        <TodoList todo={todo} setTodo={setTodo} setEditTodo={setEditTodo} />
      </div>
    </div>
  );
}

export default App;
