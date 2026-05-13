#!/bin/bash

echo "Updating server..."
apt update && apt upgrade -y

echo "Creating shared Docker networks..."
docker network create shared_network || true

echo "Setup complete."
docker network ls

echo "Edit traefik file"
touch ../_infra/traefik/acme.json
chmod 600 ../_infra/traefik/acme.json
