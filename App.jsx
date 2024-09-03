// import { useState } from 'react'
// import './App.css'

// const App = () => {
//   // create state value to hold the input values
//   const [inputText, setInputText] = useState("");

//   // function to update the state to whatever has been typed in the input box that triggered the event
//   const handleInputChange = (e) => {
//     // use the event object to target the element that triggered the event and get the value of that element
//     //  set that value as the new state value using the function declared in the state hook
//     setInputText(e.target.value);
//   };

//   return (
//     <div>
//       {/* use onCHange event on the input to track what is typed in the box */}
//       <input type="text" onChange={handleInputChange} />
//       {/* display the inputs value in the h1 by using the current state value */}
//       <h1>{inputText}</h1>
//     </div>
//   );
// }
// export default App


import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import './App.css'

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text:text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;