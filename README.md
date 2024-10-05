# abetka

[![CD workflow](https://github.com/olyaprykhodko/abetka/actions/workflows/cd.yml/badge.svg)](https://github.com/olyaprykhodko/abetka/actions/workflows/cd.yml)

- frontend link: [abetka.site](https://abetka.site)
- api link: [abetka.site/api](https://abetka.site/api)

## Requirements

[Node.js](https://nodejs.org) is required to install dependencies.

[Docker](https://www.docker.com/) + [Compose](https://docs.docker.com/compose/) are required to run the project in a container.

## Project preparation

```bash
git clone https://github.com/olyaprykhodko/abetka.git
cd abetka
npm install
```

## Generate environment variables

```bash
cp .env.example .env
sed -i '' "s,JWT_SECRET=secret,JWT_SECRET=$(openssl rand -base64 32),g" .env
```

## Run project

```bash
docker compose up --build --watch
```

## Conventional Commit specification

Follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification for commit messages and PR titles.
