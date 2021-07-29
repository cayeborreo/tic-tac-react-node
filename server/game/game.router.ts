/**
 * Required External Modules and Interfaces
 */
import express, { Request, Response } from "express";
import * as GameService from "./game.service";
import { Game } from "./game.interface";

/**
 * Router Definition
 */

export const gameRouter = express.Router();

/**
 * Controller Definitions
 */

// GET game
gameRouter.get("/", async (req: Request, res: Response) => {
  try {
    const game: Game = await GameService.getGame();
    res.status(200).send(game);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// PUT game
gameRouter.put("/", async (req: Request, res: Response) => {
  try {
    const newGameInfo: Game = req.body;
    const updatedGame = await GameService.updateGame(newGameInfo);

    res.status(201).json(updatedGame);
  } catch (e) {
    res.status(500).send(e.message);
  }
});
