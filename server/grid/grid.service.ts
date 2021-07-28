/**
 * Data Model Interfaces
 */
import { Grid, GridSlot } from "./grid.interface";

/**
 * In-Memory Store
 */

let grid: Grid = {
  1: {
    row: 1,
    column: 1,
    occupant: null,
    winningSlot: false,
  },
  2: {
    row: 1,
    column: 2,
    occupant: null,
    winningSlot: false,
  },
  3: {
    row: 1,
    column: 3,
    occupant: null,
    winningSlot: false,
  },
  4: {
    row: 2,
    column: 1,
    occupant: null,
    winningSlot: false,
  },
  5: {
    row: 2,
    column: 2,
    occupant: null,
    winningSlot: false,
  },
  6: {
    row: 2,
    column: 3,
    occupant: null,
    winningSlot: false,
  },
  7: {
    row: 3,
    column: 1,
    occupant: null,
    winningSlot: false,
  },
  8: {
    row: 3,
    column: 2,
    occupant: null,
    winningSlot: false,
  },
  9: {
    row: 3,
    column: 3,
    occupant: null,
    winningSlot: false,
  },
};

/**
 * Service Methods
 */

export const getGrid = async (): Promise<GridSlot[]> => Object.values(grid);

export const updateGrid = async (
  slot: number,
  newGridSlot: GridSlot
): Promise<GridSlot[] | string> => {
  if (!grid[slot]) {
    return "No slot found. Check if your slot number is within range 1-9.";
  }

  const updatedGridSlot = { slot: { ...grid[slot], ...newGridSlot } };

  return Object.values(updatedGridSlot);
};
