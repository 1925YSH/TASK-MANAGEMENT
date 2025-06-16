# 📝 Task Manager Application

A simple Task Management App built using **React (frontend)** and **Node.js (backend)**. This app allows users to **Create**, **View**, **Update**, and **Delete** tasks.

---

## 📁 Project Structure

task-manager-app/
├── backend/
│ └── server.js # Express API with in-memory storage
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ │ ├── TaskForm.jsx
│ │ │ └── TaskList.jsx
│ │ ├── App.jsx
│ │ ├── App.css
│ │ └── main.jsx
│ └── package.json # Frontend dependencies
├── README.md

yaml
Copy
Edit

---

## 🚀 Features

- Add a new task with name & description
- View all tasks
- Edit existing tasks
- Delete tasks
- Fully responsive basic UI
- In-memory data storage (no database used)

---

## 🔧 Technologies Used

- **Frontend**: React, JavaScript, CSS
- **Backend**: Node.js, Express
- **Tools**: Vite, Fetch API, Git

---

## 📦 Installation & Running Locally

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/task-manager-app.git
cd task-manager-app
2. Start Backend Server
bash
Copy
Edit
cd backend
npm install
node server.js
Runs on http://localhost:5000

3. Start Frontend React App
bash
Copy
Edit
cd frontend
npm install
npm run dev
Runs on http://localhost:5173

🧪 Sample API Endpoints
Method	Endpoint	Description
GET	/api/tasks	Get all tasks
POST	/api/tasks	Add a new task
PUT	/api/tasks/:id	Update a task
DELETE	/api/tasks/:id	Delete a task

📌 Notes
No external database is used (as per assignment requirement).

Task data will reset once the backend server restarts.

Uses useState, useEffect hooks and functional components.