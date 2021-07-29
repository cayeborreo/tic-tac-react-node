// Get game details
export const fetchGame = async (callback) => {
  const response = await fetch(
    `${process.env.REACT_APP_BASE_API_URL}/api/game`,
    {
      method: "GET",
    }
  );
  const gameData = await response.json();
  return callback(gameData);
};

// Get the whole grid
export const fetchGrid = async (callback) => {
  const response = await fetch(
    `${process.env.REACT_APP_BASE_API_URL}/api/grid`,
    {
      method: "GET",
    }
  );
  const gridData = await response.json();
  return callback(gridData);
};

// Update just one slot
export const updateGridSlot = async (config) => {
  const { id, body, callback } = config;
  const response = await fetch(
    `${process.env.REACT_APP_BASE_API_URL}/api/grid/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }
  );

  const updatedGridData = await response.json();
  return callback(updatedGridData);
};

// Update the whole grid
export const updateGrid = async (config) => {
  const { body, callback } = config;
  const response = await fetch(
    `${process.env.REACT_APP_BASE_API_URL}/api/grid`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }
  );

  const updatedGridData = await response.json();
  return callback(updatedGridData);
};

export const updateGame = async (config) => {
  const { body, callback } = config;
  const response = await fetch(
    `${process.env.REACT_APP_BASE_API_URL}/api/game`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }
  );

  const updatedGameData = await response.json();
  return callback(updatedGameData);
};

export const clearGrid = async (callback) => {
  const response = await fetch(
    `${process.env.REACT_APP_BASE_API_URL}/api/grid`,
    {
      method: "DELETE",
    }
  );
  const gridData = await response.json();
  return callback(gridData);
};

export const evaluateGrid = (config) => {
  const { game, grid } = config;
  const { turnNumber, currentTurn, xWins, oWins } = game;

  // Transforms grid to 1's and 0's -> [1,0,0,1,0,0,1,0,0]
  let currentGridArray = Object.values(grid).map((slot) => {
    return slot.occupant === currentTurn ? 1 : 0;
  });

  // isTurnNumberGreaterThan5 {
  //   YES: isItAWin {
  //     YES: Update game and grid
  //   } else {
  //     NO: isItADraw {
  //       YES: Update game
  //     } else {
  //       NO: Next turn
  //     }
  //   }
  // } else {
  //   NO: isGridEmpty {
  //     YES: Do nothing—initialized board only
  //   } else {
  //     NO: Next turn
  //   }
  // }

  const isWinner = (gridArray) => {
    const winningCombinations = [
      "111000000",
      "000111000",
      "000000111",
      "100100100",
      "010010010",
      "001001001",
      "100010001",
      "001010100",
    ];

    let matchResult = winningCombinations.find((combo) => {
      let matches = 0;
      let winningArray = combo.split("");
      winningArray.forEach((slot, index) => {
        if (
          parseInt(slot) === 1 &&
          parseInt(slot) === currentGridArray[index]
        ) {
          matches += 1;
        }
      });

      return matches === 3;
    });

    return matchResult;
  };

  const isDraw = (game) => {
    return game?.turnNumber >= 8;
  };

  const isGridEmpty = (grid) => {
    let emptySlotChecker = grid.filter((slot) => !slot.occupant);
    return emptySlotChecker.length === 9;
  };

  const proceedToNextTurn = (game) => {
    const nextTurn = game?.currentTurn === "X" ? "O" : "X";
    let updatedGame = {
      currentTurn: nextTurn,
      turnNumber: game?.turnNumber + 1,
      status: "ONGOING",
    };
    return { game: updatedGame };
  };

  if (turnNumber >= 5) {
    const winningCombo = isWinner(currentGridArray);
    if (!!winningCombo) {
      // This is the winning block
      console.log("It's a winner!");
      let winningGrid = grid.map((slot, index) => {
        return { ...slot, winningSlot: parseInt(winningCombo[index]) === 1 };
      });

      let wonGame = {};
      switch (currentTurn) {
        case "X":
          wonGame = { ...game, status: "X_WINS", xWins: xWins + 1 };
          break;
        case "O":
          wonGame = { ...game, status: "O_WINS", oWins: oWins + 1 };
          break;
        default:
          break;
      }
      return { grid: winningGrid, game: wonGame };
    } else {
      if (isDraw(game)) {
        // Update game to indicate draw
        console.log("It's a draw!");
        return { grid, game: { ...game, status: "DRAW" } };
      } else {
        // Next turn
        return proceedToNextTurn(game);
      }
    }
  } else {
    // isGridEmpty
    if (isGridEmpty(grid)) {
      // Initialized board only—do not change anything
      return { grid, game: { ...game, status: "INITIALIZE" } };
    } else {
      // Too early in the game
      return proceedToNextTurn(game);
    }
  }
};
