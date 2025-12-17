from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware
import mysql.connector

app = FastAPI()

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# MySQL connection
def get_db():
    return mysql.connector.connect(
        host="localhost",
        user="root",
        password="1974",   # 👈 change this
        database="employee_db"
    )

@app.get("/")
def root():
    return {"status": "Backend running"}

@app.get("/employees")
def search_employees(search: str = Query(..., min_length=1)):
    db = get_db()
    cursor = db.cursor(dictionary=True)

    query = """
        SELECT * FROM employees
        WHERE name LIKE %s
        OR email LIKE %s
        OR department LIKE %s
        OR designation LIKE %s
    """

    value = f"%{search}%"
    cursor.execute(query, (value, value, value, value))
    results = cursor.fetchall()

    cursor.close()
    db.close()

    return results
