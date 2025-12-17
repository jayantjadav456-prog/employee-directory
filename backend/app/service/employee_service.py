from sqlalchemy.orm import Session
from app.models.employee import Employee

def search_employees(db: Session, search: str):
    return db.query(Employee).filter(
        Employee.name.ilike(f"%{search}%") |
        Employee.department.ilike(f"%{search}%") |
        Employee.designation.ilike(f"%{search}%")
    ).all()

