# Kortex Backend

This is the backend for Kortex, a web-based Kanban board application. It provides the API for the frontend, handling data storage, user authentication, and business logic.

## Features

- **RESTful API:** A complete API for managing boards, lists, and tasks.
- **User Authentication:** JWT-based authentication to secure the API.
- **Database Management:** Uses Prisma to manage the PostgreSQL database.

## Technologies

- [NestJS](https://nestjs.com/)
- [Prisma](https://www.prisma.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [Docker](https://www.docker.com/)
- [Passport](https://docs.nestjs.com/techniques/authentication) for authentication strategies
- [Jest](https://jestjs.io/) for testing

## Project Structure

The project follows a standard NestJS application structure:

- `src/`: Contains the main source code.
  - `auth/`: Handles user authentication.
  - `board/`: Manages boards.
  - `list/`: Manages lists.
  - `task/`: Manages tasks.
  - `user/`: Manages users.
  - `database/`: Contains the Prisma service.
- `prisma/`: Contains the database schema and migrations.
- `test/`: Contains end-to-end tests.

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

- [Node.js](https://nodejs.org/) (version specified in `package.json`)
- [Docker](https://www.docker.com/)

### Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/kortex-board/kortex-backend
    ```

2. Navigate to the project directory:

    ```sh
    cd kortex-backend
    ```

3. Install the dependencies:

    ```sh
    npm install
    ```

### Database Setup

1. Start the PostgreSQL database using Docker:

    ```sh
    docker-compose up -d
    ```

2. Apply the database migrations:

    ```sh
    npx prisma migrate dev
    ```

### Running the Application

```sh
# Development
npm run start

# Watch mode
npm run start:dev

# Production mode
npm run start:prod
```

## Testing

```sh
# Unit tests
npm run test

# E2e tests
npm run test:e2e

# Test coverage
npm run test:cov
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

- GitHub: [kortex-board](https://github.com/kortex-board)

## Acknowledgements

- [NestJS](https://nestjs.com/)
- [Prisma](https://www.prisma.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [JWT](https://jwt.io/)
- [Passport](https://docs.nestjs.com/techniques/authentication)
- [Docker](https://www.docker.com/)
- [Biome](https://biomejs.dev/)
