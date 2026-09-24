import React, { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState([
    "Learn React",
    "Practice components",
    "Build a project"
  ]);

  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim() === "") return;

    setTasks([...tasks, task]);
    setTask("");
  };

  return (
    <div className="card">
      <h2>Todo List</h2>

      <div className="todo-input">
        <input
          type="text"
          placeholder="Enter a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button onClick={addTask}>
          Add
        </button>
      </div>

      <ul>
        {tasks.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
