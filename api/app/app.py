from fastapi import FastAPI
from controllers import project

app = FastAPI()

app.include_router(project.api)