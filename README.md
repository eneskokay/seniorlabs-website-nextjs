# Seniorlabs Website

A Next.js web application with PostgreSQL database, managed via Docker Compose.

## Tech Stack

- **Framework:** Next.js 16
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **ORM:** Prisma
- **Database:** PostgreSQL 16
- **Runtime:** Node.js 20

## Prerequisites

- [Docker](https://docs.docker.com/get-docker/) and [Docker Compose](https://docs.docker.com/compose/install/)
- [Node.js 20+](https://nodejs.org/) (for local development without Docker)

## Development

Start the app and database with hot-reloading:

```bash
docker compose -f docker-compose.dev.yml up
```

The app will be available at [http://localhost:3000](http://localhost:3000).

The dev setup mounts your local source files into the container, so code changes reflect immediately without rebuilding the image.

### Run Prisma migrations (dev)

```bash
docker compose -f docker-compose.dev.yml exec app npx prisma migrate dev
```

### Open Prisma Studio (dev)

```bash
docker compose -f docker-compose.dev.yml exec app npx prisma studio
```

## Production

Build and start the production image:

```bash
docker compose up --build
```

The app will be available at [http://localhost:3000](http://localhost:3000).

### Run Prisma migrations (prod)

```bash
docker compose exec app npx prisma migrate deploy
```

## Environment Variables

Both compose files read variables from a `.env` file at the project root. A `.env` file is included with development defaults.

| Variable | Default | Description |
|---|---|---|
| `POSTGRES_USER` | `postgres` | PostgreSQL username |
| `POSTGRES_PASSWORD` | `postgres` | PostgreSQL password |
| `POSTGRES_DB` | `seniorlabs` | PostgreSQL database name |
| `DATABASE_URL` | `postgresql://postgres:postgres@db:5432/seniorlabs` | Prisma database connection string |

`NODE_ENV` is set directly in each compose file (`development` for dev, `production` for prod) and is not sourced from `.env`.

## Local Development (without Docker)

```bash
npm install
npm run dev
```

Make sure a PostgreSQL instance is running and `DATABASE_URL` is set in your `.env` file.

```bash
npx prisma migrate dev   # apply migrations
npx prisma generate      # generate Prisma client
```
