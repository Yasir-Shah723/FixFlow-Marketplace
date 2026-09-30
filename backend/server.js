require('dotenv').config();
const http = require('http');
const app = require('./app');
const { connectDatabase } = require('./config/db');
const { initializeSocket } = require('./sockets');

const preferredPorts = [Number(process.env.PORT) || 5000, 5001, 5002, 5003];
const server = http.createServer(app);

const startServer = async () => {
  const connected = await connectDatabase();
  app.locals.dbConnected = connected;
  initializeSocket(server);

  const listenOnPort = (index = 0) => {
    const port = preferredPorts[index];

    server.once('error', (error) => {
      if (error.code === 'EADDRINUSE' && index < preferredPorts.length - 1) {
        console.warn(`Port ${port} is busy. Retrying on ${preferredPorts[index + 1]}...`);
        listenOnPort(index + 1);
        return;
      }

      throw error;
    });

    server.listen(port, () => {
      console.log(`FixFlow API running on http://localhost:${port}`);
    });
  };

  listenOnPort();
};

startServer();
