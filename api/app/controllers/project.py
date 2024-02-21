from models.db.db_setup import db_session
from fastapi import APIRouter, HTTPException, Security
from fastapi.encoders import jsonable_encoder

from models.project import ProjectModel

api = APIRouter(
    prefix="/api",
    tags=["project"]
)

db = db_session()


@api.get('/project')
async def get_project_all() -> list[dict]:
    try:
        data = ProjectModel.get_all_project(db)
        return jsonable_encoder(data)
    except Exception as e:
        raise e