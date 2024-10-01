import React, { useState } from "react";
import TodoList from "./components/TodoList";
import TaskLists from "./components/TaskLists"; // Import TaskLists
import useLocalStorage from "./hooks/useLocalStorage";
import { generateId } from "./utils/todoUtils";

const App = () => {
  const [todos, setTodos] = useLocalStorage("todos", []); // Persist todos in localStorage
  const [lists, setLists] = useLocalStorage("lists", ["Default"]); // Persist lists in localStorage
  const [currentList, setCurrentList] = useState("Default"); // Current selected list
  const [newTodo, setNewTodo] = useState("");
  const [selectedList, setSelectedList] = useState(currentList); // Selected list for adding tasks

  // Add a new task
  const addTodo = () => {
    if (newTodo.trim() === "") return;
    const todo = { id: generateId(), text: newTodo, completed: false, list: selectedList };
    setTodos([...todos, todo]);
    setNewTodo("");
  };

  // Add a new task list and auto-select it
  const addList = (listName) => {
    if (!lists.includes(listName)) {
      setLists([...lists, listName]);
      setCurrentList(listName); // Automatically select the new list
    }
  };

  // Select a task list
  const selectList = (listName) => {
    setCurrentList(listName);
    setSelectedList(listName); // Set selected list for adding tasks
  };

  // Toggle completion of a task
  const toggleComplete = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  // Remove a task
  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Filter todos based on the selected list
  const getFilteredTodos = () => {
    return todos.filter((todo) => todo.list === currentList); // Filter by selected list
  };

  return (
    <div>
      <h1>Todo List</h1>

      {/* Task List Management */}
      <TaskLists lists={lists} addList={addList} selectList={selectList} currentList={currentList} />

      <div>
        <select value={selectedList} onChange={(e) => setSelectedList(e.target.value)}>
          {lists.map((list) => (
            <option key={list} value={list}>
              {list}
            </option>
          ))}
        </select>

        <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} placeholder="Add a new todo..." />
        <button onClick={addTodo}>Add to List</button>
      </div>

      {/* Todo List Display */}
      <TodoList
        todos={getFilteredTodos()}
        toggleComplete={toggleComplete}
        removeTodo={removeTodo} // Pass removeTodo to handle task deletion
      />
    </div>
  );
};

export default App;
