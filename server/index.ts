// server/index.js

// const express = require("express");

// const PORT = process.env.PORT || 3001;

// const app = express();

// Have Node serve the files for our built React app
// app.use(express.static(path.resolve(__dirname, "../client/build")));

// app.get("/api", (req, res) => {
//   res.json({ message: "Hello from server!" });
// });

// All other GET requests not handled before will return our React app
// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
// });

// app.listen(PORT, () => {
//   console.log(`Server listening on ${PORT}`);
// });

import dotenv from "dotenv";
import express from "express";

// load the environment variables from the .env file
dotenv.config({
  path: ".env",
});

/**
 * Express server application class.
 * @description Will later contain the routing system.
 */
class Server {
  public app = express();
}

// initialize server app
const server = new Server();

// make server listen on some port
((port = process.env.APP_PORT || 5000) => {
  server.app.listen(port, () => console.log(`> Listening on port ${port}`));
})();
