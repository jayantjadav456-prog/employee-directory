# Employee Directory – Full Stack Application

This is a full-stack Employee Directory application built using React for the frontend and Python (FastAPI) for the backend.  
The application allows users to search and view employee details efficiently.

---

## Tech Stack

Frontend:
- React (Vite)
- JavaScript
- CSS

Backend:
- Python (FastAPI)

Database:
- SQLite

Version Control:
- Git & GitHub

---

## Setup Steps

### Backend Setup
1. Navigate to backend folder:
   ```bash
   cd backend
##Frontend Setup

1.Navigate to frontend folder:

cd frontend


2.Install dependencies:

npm install


3.Run frontend:

npm run dev


4.Open browser:

http://localhost:5173

##Database Choice

SQLite is used as the database for this project.

Reasons:

Lightweight and easy to configure

No external database server required

Suitable for small-scale applications and assignments

Stores employee data in a single local file

##Search Performance Optimization

Search performance is optimized using the following techniques:

1.Frontend:

Debouncing is implemented in the search bar to prevent unnecessary API calls while typing.

API requests are sent only after the user stops typing for a short duration.

2.Backend:

Search filtering is handled at the database level.

Only relevant employee records are returned instead of sending the entire dataset.

These optimizations reduce network calls and improve application performance.

##Folder Structure

employee-directory/
│
├── backend/
│   ├── app/
│   │   ├── models/
│   │   │   ├── __init__.py
│   │   │   └── employee.py
│   │   │
│   │   ├── routers/
│   │   │   ├── __init__.py
│   │   │   └── employee_router.py
│   │   │
│   │   ├── service/
│   │   │   ├── __init__.py
│   │   │   └── employee_service.py
│   │   │
│   │   ├── __init__.py
│   │   ├── database.py
│   │   ├── schemas.py
│   │   └── main.py
│   │
│   ├── employees.db
│   └── requirements.txt
│
├── frontend/
│   ├── public/
│   │   └── vite.svg
│   │
│   ├── src/
│   │   ├── assets/
│   │   │   └── react.svg
│   │   │
│   │   ├── components/
│   │   │   ├── EmployeeCard.jsx
│   │   │   ├── EmployeeList.jsx
│   │   │   └── SearchBar.jsx
│   │   │
│   │   ├── hooks/
│   │   │   └── useDebounce.js
│   │   │
│   │   ├── services/
│   │   │   └── api.js
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── App.css
│   │   └── index.css
│   │
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── vite.config.js
│   └── eslint.config.js
│
├── README.md
└── .gitignore



---
## Reusable Components

.SearchBar – Handles user input

.EmployeeCard – Displays employee details

.EmployeeList – Renders the list of employees

This improves code readability, reusability, and maintainability.

 ##Features

.Search employees by name/designation

.Fast and optimized API calls

.Clean UI with reusable components

.Full separation of frontend and backend


---
