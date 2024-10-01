import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleComplete, removeTodo }) => {
  return (
    <div>
      <h2>Tasks</h2>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            removeTodo={removeTodo} // Pass removeTodo to handle task deletion
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
