# Employee Directory – Full Stack Application

## 📌 Project Overview

A full-stack Employee Directory application built using **React (frontend)** and **Python (FastAPI) (backend)**.
The application allows users to search employees efficiently and view employee details.

---

## 🗂 Project Structure

```
employee-directory/
├── frontend/   # React application
└── backend/    # FastAPI backend
```

---

## ⚙️ Setup Instructions

### Backend Setup

```bash
cd backend
python -m venv venv
venv\Scripts\activate   # On Windows
pip install -r requirements.txt
uvicorn app.main:app --reload
```

Backend runs at:

```
http://127.0.0.1:8000
```

---

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

## 🗄 Database Choice

* **SQLite** is used for simplicity and fast local development.
* It requires no separate server setup and is ideal for small-to-medium datasets.
* The database file is stored as `employees.db`.

---

## 🔍 Search Performance Optimization

* **Debounced search** on the frontend to reduce unnecessary API calls while typing.
* **Backend-side filtering** ensures only relevant employee data is returned.
* Indexed search fields improve query performance.
* Clean separation of routes, services, and models improves scalability.

---

## ♻️ Reusable Frontend Components

* `SearchBar` – Handles employee search input
* `EmployeeCard` – Displays individual employee details
* `EmployeeList` – Renders list of employees dynamically

---

## ✅ Features

* Search employees by name or designation
* Modular and reusable UI components
* RESTful API using FastAPI
* Clean project structure

---

## 👤 Author

**Jayant Jadav**

---

## 🔗 Repository

[https://github.com/jayantjadav456-prog/employee-directory](https://github.com/jayantjadav456-prog/employee-directory)
