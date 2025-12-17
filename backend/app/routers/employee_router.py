from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import SessionLocal
from app.service.employee_service import search_employees

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/employees")
def get_employees(search: str = "", db: Session = Depends(get_db)):
    if not search:
        raise HTTPException(status_code=400, detail="Search query required")
    return search_employees(db, search)
