/**
 * Data Model Interfaces
 */
import { Game } from "./game.interface";

/**
 * In-Memory Store
 */

let game: Game = {
  number: 1,
  currentTurn: "X",
  turnNumber: 1,
  status: "ONGOING",
  xWins: 0,
  oWins: 0,
};

/**
 * Service Methods
 */

export const getGame = async (): Promise<Game> => {
  return game;
};

export const updateGame = async (newGameInfo: Game): Promise<Game> => {
  game = { ...game, ...newGameInfo };

  return game;
};
