# README

## Commands

```bash
# Up
docker compose -p p-postgres up -d

# Down
docker compose -p p-postgres down

## Delete (Volume)
docker compose -p p-postgres down -v

## Delete (Volume + Images)
docker compose -p p-postgres down -v --rmi all
```

## SQL

```bash
docker compose -p p-postgres exec p-postgres psql -U admin -d db

# psql> CREATE USER app_user WITH PASSWORD 'secret';

# psql> CREATE DATABASE app_db;

# psql> ALTER DATABASE app_db OWNER TO app_user;

docker compose -p p-postgres exec p-postgres psql -U app_user -d app_db
```
