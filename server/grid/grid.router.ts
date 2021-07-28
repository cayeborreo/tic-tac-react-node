/**
 * Required External Modules and Interfaces
 */
import express, { Request, Response } from "express";
import { GridSlot } from "./grid.interface";
import * as GridService from "./grid.service";
//  import { BaseItem, Item } from "./item.interface";

/**
 * Router Definition
 */

export const gridRouter = express.Router();

/**
 * Controller Definitions
 */

// GET grid
gridRouter.get("/", async (req: Request, res: Response) => {
  try {
    const grid: GridSlot[] = await GridService.getGrid();
    res.status(200).send(grid);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// PUT grid/:id
gridRouter.put("/:id", async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);

  try {
    const newGridSlot: GridSlot = req.body;

    const updatedItem = await GridService.updateGrid(id, newGridSlot);

    res.status(201).json(updatedItem);
  } catch (e) {
    res.status(500).send(e.message);
  }
});
