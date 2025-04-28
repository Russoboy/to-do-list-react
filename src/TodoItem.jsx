import React, { useState } from "react";

function TodoItem({ todo, index, toggleDone, deleteTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editInput, setEditInput] = useState(todo.text);

  const handleSave = () => {
    editTodo(index, editInput);
    setIsEditing(false);
  };
  return (
    <li className="todo-item">
      {isEditing ? (
        <>
          <input
            value={editInput}
            onChange={(e) => setEditInput(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <span
            onClick={() => toggleDone(index)}
            className={todo.done ? "done" : ""}
          >
            {todo.text}
          </span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteTodo(index)}>Delete</button>
        </>
      )}
    </li>
  );
}

export default TodoItem;
