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

// GET grid/:id
gridRouter.get("/:id", async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);
  try {
    const slot: GridSlot = await GridService.getGridSlot(id);
    res.status(200).send(slot);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// PUT grid/:id
gridRouter.put("/:id", async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);
  const newGridSlot = req.body;

  try {
    const updatedGrid = await GridService.updateGridSlot(id, newGridSlot);

    res.status(200).json(updatedGrid);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// PUT grid
gridRouter.put("/", async (req: Request, res: Response) => {
  const newGrid = req.body;
  try {
    const updatedGrid = await GridService.updateGrid(newGrid);

    res.status(200).json(updatedGrid);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// DELETE grid
gridRouter.delete("/", async (req: Request, res: Response) => {
  try {
    const updatedGrid = await GridService.clearGrid();

    res.status(200).json(updatedGrid);
  } catch (e) {
    res.status(500).send(e.message);
  }
});
