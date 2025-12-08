# Kortex

Kortex is a web-based Kanban board application designed for streamlined project management. It provides a visual and intuitive interface to help users organize tasks, track progress, and collaborate effectively.

## Project setup

```bash
# Install all project dependencies
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Database Setup

```bash
# Generate and apply initial database migration
npx prisma migrate dev --name init

# Generate Prisma Client for database access
npx prisma generate

# Reset database
npx prisma migrate reset
```

## Swagger API

```bash
# Access Swagger API
$ http://localhost:3000/api
```
