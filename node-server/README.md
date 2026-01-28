# Node.js Express Server

This project is a simple Node.js Express server that listens on port 8001 and uses Nodemon for automatic reloading during development.

## Project Structure

```
node-server
├── src
│   └── server.js        # Entry point of the application
├── Dockerfile           # Dockerfile to build the Docker image
├── package.json         # npm configuration file
├── .dockerignore        # Files to ignore when building the Docker image
└── README.md            # Project documentation
```

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- Docker installed on your machine (if you want to run the server in a Docker container).

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/Wilcolab/Anythink-Market-ngt9syt4.git
   cd Anythink-Market-ngt9syt4/node-server
   ```

2. Install the dependencies:

   ```
   npm install
   ```

### Running the Server

To run the server with Nodemon for automatic reloading, use the following command:

```
npm run dev
```

The server will be available at `http://localhost:8001`.

### Building the Docker Image

To build the Docker image, run:

```
docker build -t node-server .
```

### Running the Docker Container

To run the Docker container, use the following command:

```
docker run -p 8001:8001 node-server
```

The server will be accessible at `http://localhost:8001` from your host machine.

### License

This project is licensed under the MIT License.