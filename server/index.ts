/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import * as path from "path";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { gridRouter } from "./grid/grid.router";
import { gameRouter } from "./game/game.router";

// load the environment variables from the .env file
dotenv.config({
  path: ".env",
});

/**
 * App Variables
 */

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10) || 3000;

const app = express();

/**
 *  App Configuration
 */
// Path config and for Heroku to work too
app.use(express.static(path.join(__dirname, "client", "build")));

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use("/api/grid", gridRouter);
app.use("/api/game", gameRouter);

// Handle `/` request — serve index
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build/index.html"));
});

// All other GET requests not handled will either...
app.get("*", (req, res) => {
  if (req.path.includes("client")) {
    // return the client static files, or...
    res.sendFile(path.join(__dirname, "../", req.path));
  } else {
    // ...serve the React app
    res.sendFile(path.resolve(__dirname, "../client/build/index.html"));
  }
});

/**
 * Server Activation
 */

app.listen(PORT, () => console.log(`> Listening on port ${PORT}`));
