# Project Title

This project is a simple authentication server built with Express.js. It provides endpoints for user registration, login, and token refreshing. This server uses JWT for authentication.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/your-username/your-repository.git
   ```
2. **Install dependencies**

   ```bash
   npm install
   ```

   or

   ```bash
   bun install
   ```

3. **Create a `.env` file in the root directory and fill in your environment variables:**
   ```env
   ENV=dev
   DB_USER=your-db-username
   DB_PWD=your-db-password
   DB_NAME=your-db-name
   DB_HOST=your-db-host
   DB_PORT=your-db-port
   PROCESS_PORT=your-process-port
   ACCESS_TOKEN_SECRET=your-access-token-secret
   REFRESH_TOKEN_SECRET=your-refresh-token-secret
   API_VERSION=v1
   ```
4. **Start the server**
   ```bash
   npm start
   ```
   or
   ```bash
   bun start
   ```

## Usage

This project serves as a backend server for a user authentication system. It provides API endpoints for user registration, login, logout, and token refresh operations. Below are some examples and use cases on how you can use this project:

### User Registration

- Endpoint: `POST /api/v1/signup`
- Request Body:

  ```json
  {
    "username": "exampleUser",
    "password": "examplePassword",
    "password_confirm": "examplePassword"
  }
  ```

### User Login

- **Endpoint**: `POST /api/v1/login`
- **Request Body**:
  ```json
  {
    "username": "exampleUser",
    "password": "examplePassword"
  }
  ```

### Logout from All Devices

- **Endpoint**: `POST /api/v1/logout-all`
- **Headers**:
  ```plaintext
  Authorization: Bearer <access_token>
  ```

### Token Refresh

- **Endpoint**: `POST /api/v1/refresh`
- **Headers**:
  ```plaintext
  Authorization: Bearer <access_token>
  ```

### Use Cases

1. **User Management System**:

   - This project can be utilized as a backend service for managing user authentication in applications.
   - It can handle user registration, login, and maintaining session tokens.

2. **Secure Access Control**:

   - By integrating this project into your system, you can ensure that only authenticated users have access to certain protected routes or resources.
   - The provided middleware functions can be used to protect your API endpoints.

3. **Token-Based Authentication**:
   - This project implements JWT (JSON Web Tokens) for secure, token-based user authentication.
   - Tokens can be refreshed using the provided refresh token endpoint, ensuring that users remain logged in even if their access tokens expire.

Remember to replace `<access_token>` with the actual access token obtained upon login or token refresh.

## Project Structure

```plaintext
src
├── app.js
├── controllers
│   ├── authControllers.js
│   └── errorController.js
├── helpers
│   ├── APIError.js
│   ├── catchAsync.js
│   ├── protect.js
│   ├── signTokens.js
│   └── user_helpers
│       ├── findUser.js
│       └── updateUser.js
├── models
│   └── userModel.js
├── routes
│   └── authRoutes.js
└── server.js
```

## API Endpoints

- POST `/api/v1/login`
- POST `/api/v1/signup`
- POST `/api/v1/logout-all`
- POST `/api/v1/refresh`

## Contributing

If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Your Name - your-email@example.com

Project Link: [https://github.com/RepoRover/Two-Token](https://github.com/RepoRover/Two-Token)
