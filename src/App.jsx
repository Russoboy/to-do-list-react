import React, { useState } from "react";
import TodoItem from "./TodoItem.jsx";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  // compared to vanilla.js
  // let todos = [];               // List of tasks
  // let input = "";               // What user types
  // let darkMode = false;         // Light mode is default
  
  // function setTodos(newTodos) {
  //   todos = newTodos;
  //   render(); // You’d have to manually re-render your UI
  // }
  
  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { text: input, done: false }]);
      setInput("");
    }
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const toggleDone = (index) => {
    const newTodos = [...todos];
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
  };

  const editTodo = (index, newText) => {
    const newTodos = [...todos];
    newTodos[index].text = newText;
    setTodos(newTodos);
  };

  return (
    <div className={`app ${darkMode ? "dark" : ""}`}>
      <h1>📝 To-Do List</h1>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
      <div className="input-section"><input 
      type="text" 
      placeholder="Enter a task" 
      value={input} 
      onChange={(e) => setInput(e.target.value)}/>
        <button onClick={addTodo}>Add</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            index={index}
            todo={todo}
            toggleDone={toggleDone}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
