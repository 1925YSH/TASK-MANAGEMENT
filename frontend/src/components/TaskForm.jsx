
import React, { useState, useEffect } from "react";
import "./TaskForm.css";

function TaskForm({ onAddTask, onUpdateTask, editingTask, setEditingTask }) {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");

  
  useEffect(() => {
    if (editingTask) {
      setTaskName(editingTask.name);
      setDescription(editingTask.description);
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!taskName.trim()) return;

    const taskData = {
      name: taskName,
      description,
    };

    if (editingTask) {
      //  Edit 
      onUpdateTask(editingTask.id, taskData);
    } else {
      //  Add 
      onAddTask(taskData);
    }

    // Clear form
    setTaskName("");
    setDescription("");
    setEditingTask(null); // Exit editing 
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Task Name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">
        {editingTask ? "Update Task" : "Add Task"}
      </button>
    </form>
  );
}

export default TaskForm;
