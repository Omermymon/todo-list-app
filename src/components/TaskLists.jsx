import React from "react";

const TaskLists = ({ lists, addList, selectList, currentList }) => {
  const [newListName, setNewListName] = React.useState("");

  const handleAddList = () => {
    if (newListName.trim() !== "") {
      addList(newListName);
      setNewListName(""); // Clear input field after adding
    }
  };

  return (
    <div>
      <h2>Task Lists</h2>
      <div>
        {lists.map((list) => (
          <button
            key={list}
            onClick={() => selectList(list)} // Call selectList on button click
            style={{
              backgroundColor: currentList === list ? "lightblue" : "white",
              margin: "5px",
              padding: "10px",
              cursor: "pointer",
            }}
          >
            {list}
          </button>
        ))}
      </div>

      {/* Input for adding a new list */}
      <input type="text" value={newListName} onChange={(e) => setNewListName(e.target.value)} placeholder="New List Name" />
      <button onClick={handleAddList}>Add List</button>
    </div>
  );
};

export default TaskLists;
