export interface Game {
  number: number;
  currentTurn: "X" | "O";
  turnNumber: number;
  status: "ONGOING" | "DRAW" | "X_WINS" | "O_WINS";
  xWins: number;
  oWins: number;
}
