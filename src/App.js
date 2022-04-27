import React, { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);
  const [editTodo, setEditTodo] = useState(null);
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
