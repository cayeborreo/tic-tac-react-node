import React from "react";
import classNames from "classnames";

import x from "../assets/cross.svg";
import o from "../assets/circle.svg";

const GridSlot = ({ occupant, handleClick, winningSlot, id }) => {
  let slotOccupant = occupant === "X" ? x : o;
  return (
    <div
      className="column is-4"
      onClick={occupant ? null : handleClick}
      id={id}
    >
      <div
        className={classNames("box m-1", {
          "has-background-success": winningSlot,
        })}
      >
        {!!occupant ? (
          <figure className="image is-square">
            <img src={slotOccupant} alt="X" />
          </figure>
        ) : null}
      </div>
    </div>
  );
};

export default GridSlot;
