// src/components/TaskList.jsx
import React from "react";
import "./TaskList.css";

function TaskList({ tasks, onDelete, onEdit }) {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <div key={task.id} className="task-item">
          <h3>{task.name}</h3>
          <p>{task.description}</p>
          <button onClick={() => onDelete(task.id)}>Delete</button>
          <button onClick={() => onEdit(task)}>Edit</button>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
