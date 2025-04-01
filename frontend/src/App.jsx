import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Doctor Appointment", completed: true },
    { id: 2, text: "Meeting at School", completed: false },
  ]);

  const [text, setText] = useState("");

  const addTask = () => {
    if (text.trim() === "") return;
    const newTask = { id: Date.now(), text, completed: false };
    setTasks([...tasks, newTask]);
    setText("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleCompleted = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>My To-Do List</h1>
      </header>
      <div className="main-content">
        <div className="todo-container">
          <input
            type="text"
            className="task-input"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Add New TO-DO"
          />
          <button className="add-task-btn" onClick={addTask}>
            Add Task
          </button>
          <div className="tasks-list">
            {tasks.map((task) => (
              <div key={task.id} className="task-item">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleCompleted(task.id)}
                />
                <span
                  className={
                    task.completed ? "task-text completed" : "task-text"
                  }
                >
                  {task.text}
                </span>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="delete-task-btn"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
