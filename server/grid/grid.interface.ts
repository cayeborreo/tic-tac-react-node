enum Player {
  X,
  O,
}

export interface GridSlot {
  id: number;
  occupant: Player | null;
  winningSlot: boolean;
}

export interface Grid {
  [key: number]: GridSlot;
}
