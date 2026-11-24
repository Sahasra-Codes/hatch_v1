from typing import Literal

from fastapi import FastAPI

app = FastAPI(title="Hatch API")


@app.get("/api/health")
def health() -> dict[str, Literal["ok"]]:
    return {"status": "ok"}
