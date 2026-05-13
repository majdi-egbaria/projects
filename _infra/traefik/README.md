# README

## Commands

```bash
# Up
docker compose -p p-traefik up -d

# Down
docker compose -p p-traefik down

## Delete (Volume)
docker compose -p p-traefik down -v

## Delete (Volume + Images)
docker compose -p p-traefik down -v --rmi all
```
