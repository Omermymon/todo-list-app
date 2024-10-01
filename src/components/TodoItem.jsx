import React from "react";

const TodoItem = ({ todo, toggleComplete, removeTodo }) => {
  return (
    <li>
      <span style={{ textDecoration: todo.completed ? "line-through" : "none" }} onClick={() => toggleComplete(todo.id)}>
        {todo.text}
      </span>
      {/* Delete Button */}
      <button onClick={() => removeTodo(todo.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
