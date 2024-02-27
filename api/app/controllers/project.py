from models.db.db_setup import db_session
from fastapi import APIRouter, HTTPException, Security
from fastapi.encoders import jsonable_encoder
from typing import TypeVar

from models.project import ProjectModel

api = APIRouter(
    prefix="/api",
    tags=["project"]
)

db = db_session()

T = TypeVar("T")


@api.get('/project')
async def get_project_all() -> list[dict]:
    try:
        total_data: list[tuple[T]] = ProjectModel.get_all_project(db)

        list_data = [
            {
            "usuario": data.name,
            "titulo_proyecto": data.project_name,
            "descripcion": data.description,
            "total_inversion": data.budget_amount,
            "recaudado": "25%"
            }
            for data in total_data
        ]

        return list_data
    except Exception as e:
        raise e