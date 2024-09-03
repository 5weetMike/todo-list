import React, {useState} from "react";

const TodoList = ({todos, toggleComplete, deleteTodo}) => {
  return(
    <ul>
      {todos.map(todo => (
        <div>
          <p
          style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          onClick={() => toggleComplete(todo.id)}
          >
            {todo.text}
          </p>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
      ))}
    </ul>
  )
}
export default TodoList;