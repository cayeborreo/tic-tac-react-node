import React, { Fragment, useEffect, useState } from "react";
import classNames from "classnames";

import Game from "./components/game";
import Grid from "./components/grid";
import {
  clearGrid,
  evaluateGrid,
  fetchGame,
  fetchGrid,
  updateGame,
  updateGrid,
  updateGridSlot,
} from "./requests";

const App = () => {
  const [grid, setGrid] = useState([]);
  const [game, setGame] = useState({});

  useEffect(() => {
    fetchGame(setGame);
    fetchGrid(setGrid);
  }, []);

  const handleClick = async (event) => {
    event.preventDefault();
    const id = event.currentTarget.id;
    await updateGridSlot({
      id: id,
      body: { occupant: game?.currentTurn },
      callback: setGrid,
    });
  };

  useEffect(() => {
    // evaluateGrid should be here

    if (game?.status === "ONGOING") {
      let results = evaluateGrid({
        game,
        grid,
      });

      switch (results?.game?.status) {
        case "X_WINS":
        case "O_WINS":
          updateGame({ body: results?.game, callback: setGame });
          updateGrid({ body: results?.grid, callback: setGrid });
          break;
        case "DRAW":
        case "ONGOING":
          updateGame({ body: results?.game, callback: setGame });
          break;
        case "INITIALIZE":
        default:
          break;
      }
    }
  }, [grid]);

  const handleNewGame = (event) => {
    event.preventDefault();
    const newGame = {
      ...game,
      number: game?.number + 1,
      currentTurn: "X",
      turnNumber: 1,
      status: "ONGOING",
    };
    updateGame({ body: newGame, callback: setGame });
    clearGrid(setGrid);
  };

  const NewGameButton = () => (
    <button
      className={classNames(
        "button m-1 ml-5",
        {
          "is-dark": game?.status === "ONGOING",
        },
        {
          "is-success": game?.status !== "ONGOING",
        }
      )}
      onClick={handleNewGame}
    >
      New Game
    </button>
  );

  const GameStatus = () => {
    switch (game?.status) {
      case "ONGOING":
      default:
        return (
          <Fragment>
            Player{" "}
            <span
              className={classNames(
                { "has-text-danger": game?.currentTurn === "X" },
                { "has-text-primary": game?.currentTurn === "O" }
              )}
            >
              {game?.currentTurn}
            </span>
            ’s Turn
          </Fragment>
        );
      case "X_WINS":
        return (
          <Fragment>
            Player <span className="has-text-danger">X</span> wins! 🎉
          </Fragment>
        );
      case "O_WINS":
        return (
          <Fragment>
            Player <span className="has-text-primary">O</span> wins! 🎉
          </Fragment>
        );
      case "DRAW":
        return <Fragment>It's a draw 🥲</Fragment>;
    }
  };
  return (
    <div className="app p-5 has-background-black-ter">
      <div className="columns mt-5 is-multiline is-centered">
        <section className="column is-10-mobile is-offset-1-mobile is-5-tablet is-4-desktop">
          <header className="is-flex">
            <h1 className="is-size-3 has-text-weight-bold has-text-warning is-flex-grow-1">
              TIC-TAC-TOE
            </h1>
          </header>
          <Grid
            grid={grid}
            handleClick={game?.status === "ONGOING" ? handleClick : null}
          />
          <center>
            <p className="is-size-3 has-text-weight-bold has-text-grey-lighter">
              <GameStatus />
              <NewGameButton />
            </p>
          </center>
        </section>
        <section className="column is-12-mobile is-12-tablet p-0">
          <Game game={game} />
        </section>
      </div>
    </div>
  );
};

export default App;
