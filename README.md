# Abetka

[![CD workflow](https://github.com/olyaprykhodko/abetka/actions/workflows/cd.yml/badge.svg)](https://github.com/olyaprykhodko/abetka/actions/workflows/cd.yml)

> ⚠️ **Project Status**: This project is currently paused/on hold and not actively maintained.

## About

Abetka is a monolithic educational platform for connecting students with teachers for online lessons. The project features a tutoring marketplace where users can browse teachers, book lessons, make payments, and manage their schedules.

### Architecture

**Monolithic structure** with three main components:

- **Backend** (`/backend`) - NestJS REST API with JWT authentication, file uploads (MinIO), user management, bookings, payments, and reviews
- **Frontend** (`/frontend`) - Next.js application with TypeScript and Tailwind CSS for the user interface
- **Database** (`/database`) - PostgreSQL database with initial schema dump

### CI/CD

CI/CD pipeline is configured via GitHub Actions, but **deployment is currently disabled**.

## Quick Start

### Prerequisites

- [Docker](https://www.docker.com/) + [Docker Compose](https://docs.docker.com/compose/)
- [Node.js](https://nodejs.org) (for local development)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/olyaprykhodko/abetka.git
   cd abetka
   ```

2. **Install dependencies** (optional, for local development)

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env
   sed -i '' "s,JWT_SECRET=secret,JWT_SECRET=$(openssl rand -base64 32),g" .env
   ```

4. **Start the application**
   ```bash
   docker compose up --build --watch
   ```

### Services

Once running, the application will be available at:

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:3500
- **PostgreSQL**: localhost:5432

### Development

The `docker compose` setup includes hot-reload for both frontend and backend services. Changes to source files will automatically sync to the containers and restart the services as needed.

### Stopping the Application

```bash
docker compose down
```

To remove volumes (database data):

```bash
docker compose down -v
```
