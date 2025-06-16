const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

let tasks = []; // In-memory task list

// Get all tasks
app.get('/api/tasks', (req, res) => {
  res.json(tasks);
});

// Add new task
app.post('/api/tasks', (req, res) => {
  const { name, description } = req.body;
  const newTask = { id: Date.now(), name, description };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Update a task
app.put('/api/tasks/:id', (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  tasks = tasks.map(task =>
    task.id == id ? { ...task, name, description } : task
  );
  res.json({ message: 'Task updated' });
});

// Delete a task
app.delete('/api/tasks/:id', (req, res) => {
  tasks = tasks.filter(task => task.id != req.params.id);
  res.json({ message: 'Task deleted' });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
