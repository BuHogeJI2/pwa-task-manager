# PWA Task Manager

## Description
PWA Task Manager is a Progressive Web Application designed to help users effectively manage their tasks and events. Built with React on the frontend and Node.js on the backend, it offers a clean interface to set and track daily, weekly, or monthly goals. By leveraging PWA capabilities, users can access and utilize the application even when offline, making task management seamless anytime, anywhere.

## 🚧 Development Status
This project is still under active development, and not all planned features have been implemented yet. Contributions, feedback, and suggestions are highly appreciated!

## Features

- **Calendar View**: Visualize tasks and events on a monthly, weekly, or daily basis.
- **Event Management**: Create, update, delete, and read events with ease.
- **Goal Setting**: Define and track goals for specific time periods.
- **Offline Access**: Being a PWA, the app works offline, ensuring you're always in control of your tasks.

## Libraries & Utilities Used

- **React**: For building the user interface.
- **Node.js**: The backend runtime.
- **Express**: Backend web application framework.
- **Mongoose**: For modeling and managing the database.
- **Axios**: Promise-based HTTP client for both browser and node.js.
- **Material-UI**: UI framework for designing components.

## Getting Started

### Prerequisites
Ensure you have Node.js installed. If not, [download and install Node.js](https://nodejs.org/).

### Starting the Server

1. Navigate to the `server` directory:
    ```bash
    cd path/to/pwa-task-manager/server
    ```

2. Install the required packages:
    ```bash
    npm install
    ```

3. Start the server:
    ```bash
    node server.js
    ```

Your server should now be running at `http://localhost:5005`.

### Starting the Client

1. Navigate to the `client` directory:
    ```bash
    cd path/to/pwa-task-manager/client
    ```

2. Install the required packages:
    ```bash
    npm install
    ```

3. Start the React app:
    ```bash
    npm start
    ```

Your app should now be accessible at `http://localhost:3000` (or the next available port).