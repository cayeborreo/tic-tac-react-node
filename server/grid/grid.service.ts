/**
 * Data Model Interfaces
 */
import { Grid, GridSlot } from "./grid.interface";

/**
 * In-Memory Store
 */

let initialValues: Grid = {
  1: {
    id: 1,
    occupant: null,
    winningSlot: false,
  },
  2: {
    id: 2,
    occupant: null,
    winningSlot: false,
  },
  3: {
    id: 3,
    occupant: null,
    winningSlot: false,
  },
  4: {
    id: 4,
    occupant: null,
    winningSlot: false,
  },
  5: {
    id: 5,
    occupant: null,
    winningSlot: false,
  },
  6: {
    id: 6,
    occupant: null,
    winningSlot: false,
  },
  7: {
    id: 7,
    occupant: null,
    winningSlot: false,
  },
  8: {
    id: 8,
    occupant: null,
    winningSlot: false,
  },
  9: {
    id: 9,
    occupant: null,
    winningSlot: false,
  },
};

let grid: Grid = { ...initialValues };

/**
 * Service Methods
 */

const sortObject = (object: Grid) => {
  return Object.keys(object)
    .sort()
    .reduce((result: Grid, key: string) => {
      result[parseInt(key)] = object[parseInt(key)];
      return result;
    }, {} as Grid);
};

export const getGrid = async (): Promise<GridSlot[]> => {
  grid = sortObject(grid);
  return Object.values(grid);
};

export const getGridSlot = async (id: number): Promise<GridSlot> => {
  let slot = grid[id];
  return slot;
};

export const updateGridSlot = async (
  slot: number,
  newGridSlot: GridSlot
): Promise<GridSlot[] | []> => {
  if (!grid[slot]) {
    return [];
  }

  let updatedGridSlot = { [slot]: { ...grid[slot], ...newGridSlot } };

  grid = sortObject({ ...grid, ...updatedGridSlot });

  return Object.values(grid);
};

export const updateGrid = async (newGrid: GridSlot[]): Promise<GridSlot[]> => {
  let gridObject: Grid = {};
  newGrid.forEach((slot, index) => {
    gridObject[index + 1] = {
      ...slot,
    };
  });
  grid = newGrid;
  return Object.values(grid);
};

export const clearGrid = async (): Promise<GridSlot[]> => {
  grid = initialValues;
  return Object.values(grid);
};
