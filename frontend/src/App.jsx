// src/App.jsx
import React, { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((err) => console.error("Error fetching tasks:", err));
  }, []);

  const handleAddTask = (newTask) => {
    fetch("http://localhost:5000/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    })
      .then((res) => res.json())
      .then((createdTask) => setTasks([...tasks, createdTask]))
      .catch((err) => console.error("Error adding task:", err));
  };

  const handleUpdateTask = (taskId, updatedTask) => {
    fetch(`http://localhost:5000/api/tasks/${taskId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTask),
    })
      .then(() => {
        setTasks((prevTasks) =>
          prevTasks.map((task) =>
            task.id === taskId ? { ...task, ...updatedTask } : task
          )
        );
        setEditingTask(null);
      })
      .catch((err) => console.error("Error updating task:", err));
  };

  const handleDeleteTask = (taskId) => {
    fetch(`http://localhost:5000/api/tasks/${taskId}`, {
      method: "DELETE",
    })
      .then(() => setTasks(tasks.filter((task) => task.id !== taskId)))
      .catch((err) => console.error("Error deleting task:", err));
  };

  const handleEdit = (task) => {
    setEditingTask(task);
  };

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <TaskForm
        onAddTask={handleAddTask}
        onUpdateTask={handleUpdateTask}
        editingTask={editingTask}
        setEditingTask={setEditingTask}
      />
      <TaskList
        tasks={tasks}
        onDelete={handleDeleteTask}
        onEdit={handleEdit}
      />
    </div>
  );
}

export default App;
