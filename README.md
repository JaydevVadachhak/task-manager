# Task Manager Application

This project consists of an Angular frontend and Node.js/Express backend with MongoDB.

## Client (Angular)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.2.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Version Notes

```bash
node 18.20.4
npm 10.9.0
```

## Server (Node.js/Express)

The server was generated with node version 16.14.2.

### Prerequisites
1. node - 16.14.2
2. mongodb - 5.0.4

### Running Development Server

1. Navigate to the server directory: `cd server`
2. Run `npm install`
3. Run `npm start`

### REST API Endpoints

- **Create User**
  - `POST http://localhost:3000/api/users`
  - Request:
    ```json
    {
        "name": "Rahul Patel",
        "email": "rahul@gmail.com",
        "password": "rahul@123",
        "age": 32
    }
    ```

- **Login User**
  - `POST http://localhost:3000/api/users/login`
  - Request:
    ```json
    {
        "email": "rahul5@gmail.com",
        "password": "rahul@123"
    }
    ```

- **Logout User**
  - `POST http://localhost:3000/api/logout`
  - Request: `{}`

- **Get User Info**
  - `GET http://localhost:3000/api/users/me`

- **Update User Info**
  - `PATCH http://localhost:3000/api/users/me`
  - Request:
    ```json
    {
        "name": "Rahul Solanki",
        "age": 32
    }
    ```

- **Delete User**
  - `DELETE http://localhost:3000/api/users/me`

- **Create Task**
  - `POST http://localhost:3000/api/tasks`
  - Request:
    ```json
    {
        "description": "Upload Certificate",
        "completed": false
    }
    ```

- **Get All Tasks**
  - `GET http://localhost:3000/api/tasks`

- **Get Single Task**
  - `GET http://localhost:3000/api/tasks/:id`

- **Update Task**
  - `PATCH http://localhost:3000/api/tasks/:id`
  - Request:
    ```json
    {
        "description": "Upload Certificate",
        "completed": false
    }
    ```

- **Delete Task**
  - `DELETE http://localhost:3000/api/tasks/:id`

## Further Help

