enum Player {
  X,
  O,
}

export interface GridSlot {
  row: number;
  column: number;
  occupant: Player | null;
  winningSlot: boolean;
}

export interface Grid {
  [key: number]: GridSlot;
}
