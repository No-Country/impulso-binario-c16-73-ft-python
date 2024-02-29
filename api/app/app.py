from fastapi import FastAPI
from controllers import project
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.include_router(project.api)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    expose_headers=["Content-Disposition"]
)