# Abetka

## Dependencies

<li><a href="https://www.docker.com">Docker</a></li>

## Project preparation

```bash
git clone https://github.com/olyaprykhodko/abetka.git
cd abetka
cp .env.example .env
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env

openssl rand -base64 32 # generate JWT_SECRET
```

## Run project

```bash
docker compose up --detach --build
```