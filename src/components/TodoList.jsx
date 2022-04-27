import React from "react";

function TodoList({ todo, setTodo, setEditTodo }) {

  const handleDelete =({id})=>{
    setTodo(todo.filter((todo) => todo.id !== id));
  }

  const handleComplete = (todo) =>{
    setTodo(
      todo.map((item) => {
        if(item.id === todo.id){
          return{...item, completed:!item.completed}
        }
        return item;
      })
    )
  }

  const handleEdit =({id})=>{
    const findTodo = todo.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  }
  return (
    <div>
      {todo.map((todo) => {
        return(
        <li className="list-item" key={todo.id}>
          <input
            type="text"
            value={todo.title}
            className="list"
            onChange={(event) => event.preventDefault()}
          />
          <div>
            <button className="button-complete task-button" onClick={() => handleComplete(todo)}>
              <i className="fa fa-check-circle"></i>
            </button>
            <button className="button-edit task-button" onClick={() => handleEdit(todo)}>
              <i className="fa fa-edit"></i>
            </button>
            <button className="button-delete task-button" onClick={() => handleDelete(todo)}>
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </li>
        )
      })}
    </div>
  );
}

export default TodoList;
