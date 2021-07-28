"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Turn;
(function (Turn) {
    Turn[Turn["X"] = 0] = "X";
    Turn[Turn["O"] = 1] = "O";
})(Turn || (Turn = {}));
var Status;
(function (Status) {
    Status[Status["ONGOING"] = 0] = "ONGOING";
    Status[Status["DRAW"] = 1] = "DRAW";
    Status[Status["X_WINS"] = 2] = "X_WINS";
    Status[Status["O_WINS"] = 3] = "O_WINS";
})(Status || (Status = {}));
