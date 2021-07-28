enum Turn {
  X,
  O,
}

enum Status {
  ONGOING,
  DRAW,
  X_WINS,
  O_WINS,
}

export interface Game {
  number: number;
  currentTurn: Turn;
  turnNumber: number;
  status: Status;
  xWins: number;
  oWins: number;
}
