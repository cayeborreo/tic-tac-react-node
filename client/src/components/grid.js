import React from "react";
import GridSlot from "./grid-slot";

const Grid = ({ grid, handleClick }) => {
  return (
    <div className="columns grid is-multiline is-gapless is-mobile">
      {!!grid && grid?.length > 0
        ? grid?.map((slot) => {
            return (
              <GridSlot
                occupant={slot.occupant}
                winningSlot={slot?.winningSlot}
                handleClick={handleClick}
                id={slot?.id}
                key={slot?.id}
              />
            );
          })
        : null}
    </div>
  );
};

export default Grid;
