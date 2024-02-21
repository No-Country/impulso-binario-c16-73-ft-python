FROM python:3.11.4-alpine

WORKDIR /app

ENV PYTHONUNBUFFERED=1
ENV PYTHONDONTWRITEBYTECODE=1
ENV TZ=America/Lima

COPY ./app /app

RUN apk update && apk add --no-cache gcc g++ libc-dev libffi-dev musl-dev
RUN apk add --no-cache postgresql-client

RUN pip install --no-cache-dir -r /app/requirements.txt  # Instalar los requisitos desde el archivo requirements.txt

EXPOSE 8000

CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]
