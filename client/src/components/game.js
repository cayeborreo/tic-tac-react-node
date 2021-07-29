import React from "react";

const Game = ({ game }) => {
  const { turnNumber, number, xWins, oWins } = game;
  return (
    <footer className="is-block has-text-centered">
      <p>
        Turn {turnNumber} of Game {number}
      </p>
      <div className="mt-2 field is-grouped is-grouped-multiline is-justify-content-center">
        <div className="control">
          <div className="tags has-addons">
            <span className="tag is-dark">X Wins</span>
            <span className="tag is-danger">
              <b>{xWins}</b>
            </span>
          </div>
        </div>
        <div className="control">
          <div className="tags has-addons">
            <span className="tag is-dark">O Wins</span>
            <span className="tag is-primary">
              <b>{oWins}</b>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Game;
