/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { gridRouter } from "./grid/grid.router";

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

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use("/api/grid", gridRouter);

// Heroku config
// app.use(express.static(path.resolve(__dirname, "../client/build")));

// All other GET requests not handled before will return our React app
// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
// });

/**
 * Server Activation
 */

app.listen(PORT, () => console.log(`> Listening on port ${PORT}`));
